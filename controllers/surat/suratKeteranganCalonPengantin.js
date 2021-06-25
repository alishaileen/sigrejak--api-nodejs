const db = require('../../connection')
    , { getTodayDate, generateNomorSurat, generateFileName, deleteFile } = require('../../utils')
    , path = require('path')

const getAll = async (req, res) => {
    try {
        let sql = 
            `SELECT S.id,
                    S.no_surat,
                    S.id_keluarga,
                    S.id_lingkungan,
                    S.id_umat,
                    U.nama,
                    U.nama_baptis,
                    U.tempat_lahir,
                    U.tgl_lahir,
                    U.alamat,
                    U.no_telp,
                    U.pekerjaan,
                    Ayah.nama AS nama_ayah,
                    Ibu.nama AS nama_ibu,
                    S.nama_pasangan,
                    S.tempat_lahir_pasangan,
                    S.tgl_lahir_pasangan,
                    S.alamat_pasangan,
                    S.no_telp_pasangan,
                    S.pekerjaan_pasangan,
                    S.agama_pasangan,
                    S.nama_ayah_pasangan,
                    S.nama_ibu_pasangan,
                    D.file_akta_lahir,
                    S.file_syarat,
                    S.ketua_lingkungan,
                    S.ketua_lingkungan_approval,
                    S.id_sekretariat,
                    S.sekretariat_approval,
                    S.id_romo,
                    S.romo_approval,
                    DATE_FORMAT(S.created_at, '%d-%m-%Y') AS created_at,
                    DATE_FORMAT(S.updated_at, '%d-%m-%Y') AS updated_at,
                    DATE_FORMAT(S.deleted_at, '%d-%m-%Y') AS deleted_at 
            FROM Surat_Keterangan_Calon_Pengantin S JOIN Umat U ON (S.id_umat=U.id)
                JOIN Detail_Umat D ON (U.id=D.id_umat)
                JOIN (SELECT id, nama FROM Umat) Ayah ON (D.id_ayah=Ayah.id)
                JOIN (SELECT id, nama FROM Umat) Ibu ON (D.id_ibu=Ibu.id) 
                JOIN Lingkungan L ON (S.id_lingkungan=L.id)`
        let result = await db(sql)

        res.status(200).send({
            message: "Success retrieving data",
            result: result,
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
    const { id } = req.params

    try {
        let sql = 
            `SELECT S.id,
                    S.no_surat,
                    S.id_keluarga,
                    S.id_lingkungan,
                    S.id_umat,
                    U.nama,
                    U.nama_baptis,
                    U.tempat_lahir,
                    U.tgl_lahir,
                    U.alamat,
                    U.no_telp,
                    U.pekerjaan,
                    Ayah.nama AS nama_ayah,
                    Ibu.nama AS nama_ibu,
                    S.nama_pasangan,
                    S.tempat_lahir_pasangan,
                    S.tgl_lahir_pasangan,
                    S.alamat_pasangan,
                    S.no_telp_pasangan,
                    S.pekerjaan_pasangan,
                    S.agama_pasangan,
                    S.nama_ayah_pasangan,
                    S.nama_ibu_pasangan,
                    D.file_akta_lahir,
                    S.file_syarat,
                    S.ketua_lingkungan,
                    S.ketua_lingkungan_approval,
                    S.id_sekretariat,
                    S.sekretariat_approval,
                    S.id_romo,
                    S.romo_approval,
                    DATE_FORMAT(S.created_at, '%d-%m-%Y') AS created_at,
                    DATE_FORMAT(S.updated_at, '%d-%m-%Y') AS updated_at,
                    DATE_FORMAT(S.deleted_at, '%d-%m-%Y') AS deleted_at 
            FROM Surat_Keterangan_Calon_Pengantin S JOIN Umat U ON (S.id_umat=U.id)
                JOIN Detail_Umat D ON (U.id=D.id_umat)
                JOIN (SELECT id, nama FROM Umat) Ayah ON (D.id_ayah=Ayah.id)
                JOIN (SELECT id, nama FROM Umat) Ibu ON (D.id_ibu=Ibu.id) 
                JOIN Lingkungan L ON (S.id_lingkungan=L.id)
            WHERE S.id = ?`
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

const getByIdLingkungan = async (req, res) => {
    const { id } = req.params

    try {
        let sql = 
            `SELECT S.id,
                    S.no_surat,
                    S.id_keluarga,
                    S.id_lingkungan,
                    S.id_umat,
                    U.nama,
                    U.nama_baptis,
                    U.tempat_lahir,
                    U.tgl_lahir,
                    U.alamat,
                    U.no_telp,
                    U.pekerjaan,
                    Ayah.nama AS nama_ayah,
                    Ibu.nama AS nama_ibu,
                    S.nama_pasangan,
                    S.tempat_lahir_pasangan,
                    S.tgl_lahir_pasangan,
                    S.alamat_pasangan,
                    S.no_telp_pasangan,
                    S.pekerjaan_pasangan,
                    S.agama_pasangan,
                    S.nama_ayah_pasangan,
                    S.nama_ibu_pasangan,
                    D.file_akta_lahir,
                    S.file_syarat,
                    S.ketua_lingkungan,
                    S.ketua_lingkungan_approval,
                    S.id_sekretariat,
                    S.sekretariat_approval,
                    S.id_romo,
                    S.romo_approval,
                    DATE_FORMAT(S.created_at, '%d-%m-%Y') AS created_at,
                    DATE_FORMAT(S.updated_at, '%d-%m-%Y') AS updated_at,
                    DATE_FORMAT(S.deleted_at, '%d-%m-%Y') AS deleted_at 
            FROM Surat_Keterangan_Calon_Pengantin S JOIN Umat U ON (S.id_umat=U.id)
                JOIN Detail_Umat D ON (U.id=D.id_umat)
                JOIN (SELECT id, nama FROM Umat) Ayah ON (D.id_ayah=Ayah.id)
                JOIN (SELECT id, nama FROM Umat) Ibu ON (D.id_ibu=Ibu.id) 
                JOIN Lingkungan L ON (S.id_lingkungan=L.id)
            WHERE S.id_lingkungan = ?`
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

const getByIdKeluarga = async (req, res) => {
    const { id } = req.params

    try {
        let sql = 
            `SELECT S.id,
                    S.no_surat,
                    S.id_keluarga,
                    S.id_lingkungan,
                    S.id_umat,
                    U.nama,
                    U.nama_baptis,
                    U.tempat_lahir,
                    U.tgl_lahir,
                    U.alamat,
                    U.no_telp,
                    U.pekerjaan,
                    Ayah.nama AS nama_ayah,
                    Ibu.nama AS nama_ibu,
                    S.nama_pasangan,
                    S.tempat_lahir_pasangan,
                    S.tgl_lahir_pasangan,
                    S.alamat_pasangan,
                    S.no_telp_pasangan,
                    S.pekerjaan_pasangan,
                    S.agama_pasangan,
                    S.nama_ayah_pasangan,
                    S.nama_ibu_pasangan,
                    D.file_akta_lahir,
                    S.file_syarat,
                    S.ketua_lingkungan,
                    S.ketua_lingkungan_approval,
                    S.id_sekretariat,
                    S.sekretariat_approval,
                    S.id_romo,
                    S.romo_approval,
                    DATE_FORMAT(S.created_at, '%d-%m-%Y') AS created_at,
                    DATE_FORMAT(S.updated_at, '%d-%m-%Y') AS updated_at,
                    DATE_FORMAT(S.deleted_at, '%d-%m-%Y') AS deleted_at 
            FROM Surat_Keterangan_Calon_Pengantin S JOIN Umat U ON (S.id_umat=U.id)
                JOIN Detail_Umat D ON (U.id=D.id_umat)
                JOIN (SELECT id, nama FROM Umat) Ayah ON (D.id_ayah=Ayah.id)
                JOIN (SELECT id, nama FROM Umat) Ibu ON (D.id_ibu=Ibu.id) 
                JOIN Lingkungan L ON (S.id_lingkungan=L.id)
            WHERE S.id_keluarga = ?`
        let result = await db(sql, [ id ])

        res.status(200).send({
            message: "Success retrieving data",
            result: result,
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send({
            message: "Failed to retrieve data",
            error: error.message
        })
    }
}

const post = async (req, res) => {
    let no_surat = generateNomorSurat("F8"),
        {
            id_keluarga,
            id_lingkungan,
            id_umat,
            nama_pasangan,
            tempat_lahir_pasangan,
            tgl_lahir_pasangan,
            alamat_pasangan,
            no_telp_pasangan,
            pekerjaan_pasangan,
            agama_pasangan,
            nama_ayah_pasangan,
            nama_ibu_pasangan,
            ketua_lingkungan,
            isKetuaLingkungan,
        } = req.body,
        { file_syarat } = req.files,

        created_at = getTodayDate(),
        id_sekretariat = null,
        sekretariat_approval = null,
        ketua_lingkungan_approval = (isKetuaLingkungan === true ? 1 : 0)
        if(isKetuaLingkungan === false) ketua_lingkungan = null

    try {
        let pathToFiles = `files/`
        let tempNamaFile = generateFileName('calon-pengantin', path.extname(file_syarat.name))

        file_syarat.mv(`${pathToFiles}${tempNamaFile}`, (err) => {
            if(err) {
                console.log("file syarat error: "+err)
                return res.status(500).send({
                    message: "Failed to save file",
                })
            }
        })

        let sql = `INSERT INTO Surat_Keterangan_Calon_Pengantin SET ?`
        let result = await db(sql, [
            {
                no_surat,
                id_keluarga,
                id_lingkungan,
                id_umat,
                nama_pasangan,
                tempat_lahir_pasangan,
                tgl_lahir_pasangan,
                alamat_pasangan,
                no_telp_pasangan,
                pekerjaan_pasangan,
                agama_pasangan,
                nama_ayah_pasangan,
                nama_ibu_pasangan,
                file_syarat: tempNamaFile,
                ketua_lingkungan,
                ketua_lingkungan_approval,
                id_sekretariat,
                sekretariat_approval,
                created_at,
            }
        ])
        
        res.status(200).send({
            message: "Success adding data",
            result: result,
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
    let {
        id_keluarga,
        id_lingkungan,
        id_umat,
        nama_pasangan,
        tempat_lahir_pasangan,
        tgl_lahir_pasangan,
        alamat_pasangan,
        no_telp_pasangan,
        pekerjaan_pasangan,
        agama_pasangan,
        nama_ayah_pasangan,
        nama_ibu_pasangan,
        ketua_lingkungan,
        ketua_lingkungan_approval,
        id_sekretariat,
        sekretariat_approval,
        id_romo,
        romo_approval,
    } = req.body,
    file_syarat = null
    file_syarat = req.files != null ? req.files.file_syarat : null

    console.log(req.files)

    // Saat ketua lingkungan blm approve dan user edit data,
    // ketua_lingkungan_approval harus di-set jadi 0
    // karena by default dari front end itu undefined
    // Karna di front end pakenya FormData()
    if (ketua_lingkungan_approval === undefined) {
        ketua_lingkungan_approval = 0
    }

    let updated_at = getTodayDate()
    let { id } = req.params
    let tempNamaFile
    
    try {
        let sql = `SELECT * FROM Surat_Keterangan_Calon_Pengantin WHERE id = ?`
        let result = await db(sql, [ id ])
        
        if (result.length === 0) {
            res.status(404).send({
                message: "Data not found",
            })
        } else {
            if(file_syarat != null) {
                let pathToFiles = `files/`
                
                if(result[0].file_syarat) {
                    let del = await deleteFile(pathToFiles, result[0].file_syarat)
                    console.log('del: '+del)
                    if ( del === false ) {
                        return res.status(500).send({ message: "Failed to delete old file" })
                    }
                }
    
                tempNamaFile = generateFileName('calon-pengantin', path.extname(file_syarat.name))
    
                file_syarat.mv(`${pathToFiles}${tempNamaFile}`, (err) => {
                    if(err) {
                        console.log('error save file')
                        console.log(err)
                        return res.status(500).send({ message: "Failed to save file" })
                    }
                    console.log('berhasil simpan')
                })
            }

            console.log('temp nama file: '+tempNamaFile)

            sql = `UPDATE Surat_Keterangan_Calon_Pengantin SET ? WHERE id=?`
            let data = {
                id_keluarga,
                id_lingkungan,
                id_umat,
                nama_pasangan,
                tempat_lahir_pasangan,
                tgl_lahir_pasangan,
                alamat_pasangan,
                no_telp_pasangan,
                pekerjaan_pasangan,
                agama_pasangan,
                nama_ayah_pasangan,
                nama_ibu_pasangan,
                ketua_lingkungan,
                ketua_lingkungan_approval,
                id_sekretariat,
                sekretariat_approval,
                id_romo,
                romo_approval,
                updated_at,
            }
            if(file_syarat != null) {
                data.file_syarat = tempNamaFile
            }

            result = await db(sql, [ data, id ]) 
    
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
    let { id } = req.params,
        deleted_at = getTodayDate()

    try {
        let sql = `SELECT * FROM Surat_Keterangan_Calon_Pengantin WHERE id = ?`
        let result = await db(sql, [ id ])
        
        if (result.length === 0) {
            res.status(404).send({
                message: "Data not found",
            })
        } else {
            sql =  `UPDATE Surat_Keterangan_Calon_Pengantin SET ? WHERE id=?`
            result = await db(sql, [ { deleted_at }, id ])

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

module.exports = {
    getAll,
    getById,
    getByIdLingkungan,
    getByIdKeluarga,
    post,
    update,
    remove
}