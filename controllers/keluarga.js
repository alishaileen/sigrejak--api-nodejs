require('dotenv').config();
const db = require('../connection')
    , jwt = require('jsonwebtoken')
    , { v4: uuidv4 } = require('uuid')
    , {compareSync } = require('bcryptjs')
    , { generateRandomString, hashPassword } = require('../utils')

const getAll = async (req, res) => {
    try {
        let sql = 
            `SELECT id,
                    nama_keluarga,
                    nama_kepala_keluarga,
                    no_telp_kepala_keluarga,
                    email,
                    username
            FROM Keluarga`
        let families = await db(sql)

        res.status(200).send({
            message: "Success retrieving data",
            result: families,
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
            `SELECT id,
                    nama_keluarga,
                    nama_kepala_keluarga,
                    no_telp_kepala_keluarga,
                    email,
                    username
            FROM Keluarga WHERE id = ?`

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

// Cek apakah username/email sudah dipakai atau belum
const checkUsernameOrEmailExist = async (input, keyword, id = null) => {
    let sql, result
    
    try {
        if (id === null) {
            sql = `SELECT * FROM Keluarga WHERE ${keyword}=?`
            result = await db(sql, [ input ])
        } else {
            sql =
                `SELECT * FROM Keluarga WHERE ${keyword}=?
                EXCEPT
                SELECT * FROM Keluarga WHERE id=?`
            result = await db(sql, [ input, id ])
        }

        if (result.length > 0) {
            return true // this means it exist, the error is true
        } else {
            return false
        }
    } catch (error) {
        return true
    }
}

const post = async (req, res) => {
    let id = uuidv4(),
        {
            nama_keluarga,
            nama_kepala_keluarga,
            no_telp_kepala_keluarga,
            username,
            email,
        } = req.body

    if ( await checkUsernameOrEmailExist(username, 'username') ) {
        res.status(409).send({ message: "Username sudah dipakai" })
        return
    }
    if ( await checkUsernameOrEmailExist(email, 'email') ) {
        res.status(409).send({ message: "Email sudah dipakai" })
        return
    }

    try {
        let plainPassword = generateRandomString(6)
        let password = hashPassword(plainPassword)
        
        sql = `INSERT INTO Keluarga SET ?`
        
        result = await db(sql, [ {
            id,
            nama_keluarga,
            nama_kepala_keluarga,
            no_telp_kepala_keluarga,
            username,
            email,
            password,
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
    const {
        nama_keluarga,
        nama_kepala_keluarga,
        no_telp_kepala_keluarga,
        username,
        email,
    } = req.body
    const { id } = req.params

    if ( await checkUsernameOrEmailExist(username, 'username',id) ) {
        res.status(409).send({ message: "Username sudah dipakai" })
        return
    }
    if ( await checkUsernameOrEmailExist(email, 'email',id) ) {
        res.status(409).send({ message: "Email sudah dipakai" })
        return
    }

    try {
        let sql = `SELECT * FROM Keluarga WHERE id = ?`
        let result = await db(sql, [ id ])

        if (result.length === 0) {
            res.status(404).send({
                message: "Data not found",
            })
        } else {
            sql = `UPDATE Keluarga SET ? WHERE id=?`
            result = await db(sql, [ {
                nama_keluarga,
                nama_kepala_keluarga,
                no_telp_kepala_keluarga,
                username,
                email,
            }, id ]) 
            
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

const remove = async (req, res) => {
    let { id } = req.params

    try {
        let sql = `SELECT * FROM Keluarga WHERE id = ?`
        let result = await db(sql, [ id ])

        if (result.length === 0) {
            res.status(404).send({
                message: "Data not found",
            })
        } else {
            sql = `DELETE FROM Keluarga WHERE id=?`
            result = await db(sql, [ id ])
    
            res.status(200).send({
                message: "Success deleting data",
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
    let { username, password } = req.body

    try {
        let sql = `SELECT * FROM Keluarga WHERE username=?`

        let family = await db(sql, username )
     
        if(family.length === 0) {
            res.status(404).send({
                message: "Invalid username or password",
            })
        }
        else {
            if(compareSync(password, family[0].password)) {
                let token = jwt.sign({
                    id: family[0].id
                }, process.env.JWT_SECRET_KEY, { expiresIn: "1000h"})
                res.status(200).send({
                    message: "Success logged in",
                    token: token
                })
            } else {
                res.status(401).send({
                    message: "Invalid username or password",
                })
            }
        }
    } catch (error) {
        res.status(500).send({
            error: true,
            message: error.message
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
        let sql = `SELECT * FROM Keluarga WHERE id = ?`
        let result = await db(sql, [ id ])

        if (result.length === 0) {
            res.status(404).send({
                message: "Data not found",
            })
        } else {
            if (compareSync(lama, result[0].password)) {
                let password = hashPassword(baru)
                sql = `UPDATE Keluarga SET ? WHERE id=?`
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
    getById,
    post,
    update,
    remove,

    login,
    changePassword
}