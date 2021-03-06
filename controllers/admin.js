require('dotenv').config();
const db = require('../connection')
    , jwt = require('jsonwebtoken')
    , { v4: uuidv4 } = require('uuid')
    , { compareSync } = require('bcryptjs')
    , { generateRandomString, hashPassword } = require('../utils')
    , { getTodayDate } = require('../utils')

const getAll = async (req, res) => {
    try {
        let sql = 
            `SELECT id, nama, email, no_telp, role 
            FROM Admin
            WHERE deleted_at IS NULL`
        let admins = await db(sql)

        res.status(200).send({
            message: "Success retrieving data",
            result: admins,
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send({
            message: "Failed to retrieve data",
            error: error.message
        })
    }
}
// 1 SU
// 2 sekret
// 3 romo paroki
// 4 romo

// bidang yg ada kan: 
// 5 Liturgi,
// 6 Yanmas,
// 7 Pewartaan,
// 8 Sarana Prasarana,
// 9 Litbang.

// Nnti ketua bidg mngkn diberi akses melihat proses,
// mendapat rekap, dan memberi jawaban atas disposisi Romo bgt mbak

const getAllByRole = async (req, res) => {
    let { roleId } = req.params

    try {
        // CODE HARUS DIUBAH!!! SEMENTARA GINI
        let sql = `SELECT id, nama, email, no_telp, role 
                    FROM Admin 
                    WHERE role=?`
        if(parseInt(roleId) === 4) {
            sql = `SELECT id, nama, email, no_telp, role 
            FROM Admin 
            WHERE role=? OR role=3`
        }
        let admins = await db(sql, [ roleId ])

        res.status(200).send({
            message: "Success retrieving data",
            result: admins,
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send({
            message: "Failed to retrieve data",
            error: error.message
        })
    }
}

const getById = async (req, res) => {
    let { id } = req.params
    
    try {
        let sql = 
            `SELECT id, nama, email, no_telp, role 
            FROM Admin WHERE id = ?`

        let result = await db(sql, [ id ])

        if(result.length === 0) {
            res.status(404).send({
                message: "Data not found",
            })
        } else {
            res.status(200).send({
                message: "Success retrieving data",
                result: result,
            })
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).send({
            message: "Failed to retrieve data",
            error: error.message
        })
    }
}

const post = async (req, res) => {
    try {
        let id = uuidv4()
            , { nama, email, no_telp, role } = req.body
            , created_at = getTodayDate()
            , plainPassword = generateRandomString(10)
            , password = hashPassword(plainPassword)
    
        let sql = `INSERT INTO Admin SET ?`
        
        let result = await db(sql, [ {
                id,
                nama,
                email,
                no_telp,
                password,
                role,
                created_at
            } ])
        
        res.status(200).send({
            message: "Success adding data",
            result: {...result, generatedPassword: plainPassword},
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send({
            message: "Failed adding data",
            error: error.message,
        })
    }
}

const update = async (req, res) => {
    const { nama, email, no_telp, role } = req.body
    const updated_at = getTodayDate()
    const { id } = req.params

    try {
        let sql = `SELECT * FROM Admin WHERE id = ?`
        let result = await db(sql, [ id ])

        if (result.length === 0) {
            res.status(404).send({
                message: "Data not found",
            })
        } else {
            sql = `UPDATE Admin SET ? WHERE id=?`
            result = await db(sql, [ {nama, email, no_telp, role, updated_at}, id ]) 
            
            res.status(200).send({
                message: "Success updating data",
                result: result,
            })
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).send({
            message: "Failed updating data",
            error: error.message,
        })
    }
}

const setAsRomoParoki = async (req, res) => {
    const updated_at = getTodayDate()
        , role = 3
        , { id } = req.body

    try {
        let sql = `UPDATE Admin SET role=4 WHERE role=3`
        let result = await db(sql)

        sql = `UPDATE Admin SET ? WHERE id=?`
        result = await db(sql, [ {role, updated_at}, id ]) 
        
        res.status(200).send({
            message: "Success change romo as romo paroki",
            result: result,
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send({
            message: "Failed updating data",
            error: error.message,
        })
    }
}

const remove = async (req, res) => {
    let { id } = req.params
    let deleted_at = getTodayDate()

    try {
        let sql = `SELECT * FROM Admin WHERE id = ?`
        let result = await db(sql, [ id ])

        if (result.length === 0) {
            res.status(404).send({
                message: "Data not found",
            })
        } else {
            let msg, status
            if (result[0].role === 1 || result[0].role >=5) {
                msg = "Cannot remove permanent user"
                status = 403
            } else {
                sql = `UPDATE Admin SET ? WHERE id=?`
                result = await db(sql, [ { deleted_at }, id ])
                msg = "Success deleting data"
                status = 200
            }
            res.status(status).send({
                message: msg,
                result: result,
            })
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).send({
            message: "Failed deleting data",
            error: error.message,
        })
    }
}

const login = async (req, res) => {
    let { email, password } = req.body

    try {
        let sql = `SELECT * FROM Admin WHERE email=?`

        let admin = await db(sql,  email )
     
        if(admin.length === 0) {
            res.status(404).send({ message: "Invalid email or password" })
        } else {
            if(compareSync(password, admin[0].password)) {
                let token = jwt.sign({
                    id: admin[0].id
                }, process.env.JWT_SECRET_KEY, { expiresIn: "9999h"})
                res.status(200).send({
                    message: "Success logged in",
                    token: token
                })
            } else {
                res.status(401).send({ message: "Invalid email or password" })
            }
        }
    } catch (error) {
    
        res.status(500).send({
            error: true,
            message:error
        })
    }
}

const changePassword = async (req, res) => {
    const {
        id,
        lama,
        baru
    } = req.body

    try {
        let sql = `SELECT * FROM Admin WHERE id = ?`
        let result = await db(sql, [ id ])

        if (result.length === 0) {
            res.status(404).send({
                message: "Data not found",
            })
        } else {
            if (compareSync(lama, result[0].password)) {
                let password = hashPassword(baru)
                sql = `UPDATE Admin SET ? WHERE id=?`
                result = await db(sql, [ {
                    password
                }, id ]) 
                
                res.status(200).send({
                    message: "Success updating data",
                    result: result,
                })
            } else {
                res.status(400).send({
                    message: "Password lama salah",
                })
            }
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).send({
            message: "Failed updating data",
            error: error.message,
        })
    }
}

module.exports = {
    getAll,
    getAllByRole,
    getById,
    post,
    update,
    setAsRomoParoki,
    remove,

    login,
    changePassword,
}