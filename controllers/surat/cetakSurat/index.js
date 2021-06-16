require('dotenv').config();
const db = require('../../../connection')
const puppeteer = require('puppeteer')
const fs = require('fs-extra')
const hbs = require('handlebars')
const path = require('path')

const compile = async (templateName, data) => {
  const filePath = path.join(`templates/`, `${templateName}.hbs`)
  const html = await fs.readFile(filePath, 'utf-8')
  
  return hbs.compile(html)(data)
}

const getData = async (jenisSurat, id) => {
  if (jenisSurat === 'surat-keterangan') {
    return getDataSuratKeterangan(id)
  }
  else if (jenisSurat === 'surat-izin-pelayanan-ekaristi') {
    return getDataSuratIzinEkaristi(id)
  }
}

const getTemplateSurat = (jenisSurat) => {
  if (jenisSurat === 'surat-keterangan') return 'suratKeterangan'
  else if (jenisSurat === 'surat-izin-pelayanan-ekaristi') return 'suratIzinEkaristi'
} 

const cetakSurat = async (req, res) => {
  const { jenisSurat, id } = req.params

  try {
    const browser = await puppeteer.launch()
    const page =  await browser.newPage()
    
    const data = await getData(jenisSurat, id)

    console.log(data)

    if (data === 404) {
      return res.status(404).send({
        message: 'Data not found'
      });
    }

    const content = await compile(getTemplateSurat(jenisSurat), data)

    await page.setContent(content)
    await page.emulateMediaType('screen')

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true
    })

    console.log('done generate pdf')

    res.set('Content-Type', 'application/pdf');
    res.set('Content-Disposition', `attachment; filename="${data.no_surat}.pdf"`);
    res.status(200).send(pdfBuffer);

    await browser.close()
  } catch (error) {
    console.log(error)
    res.status(500).send({
      message: 'error',
      error: error.message
    });
  }
}






const getDataSuratKeterangan = async (id) => {
  try {
    let sql = 
    `SELECT S.id,
            S.no_surat,
            L.nama_lingkungan,
            S.ketua_lingkungan,
            U.nama,
            U.tempat_lahir,
            U.tgl_lahir,
            U.alamat,
            U.pekerjaan,
            S.pendidikan,
            O.nama AS nama_ortu,
            O.alamat AS alamat_ortu,
            S.keperluan,
            S.ketua_lingkungan_approval,
            Sekret.nama AS nama_sekretariat,
            S.sekretariat_approval,
            Romo.nama AS nama_romo_paroki,
            S.romo_approval,
            DATE_FORMAT(S.created_at, '%d-%m-%Y') AS created_at
    FROM Surat_Keterangan S JOIN Umat U ON (S.id_umat=U.id) 
        JOIN (SELECT * FROM Umat) O ON (S.id_ortu=O.id) 
        JOIN Lingkungan L ON (S.id_lingkungan=L.id)
        JOIN Admin Sekret ON (S.id_sekretariat=Sekret.id)
        JOIN (SELECT id, nama, role FROM Admin) Romo ON (S.id_romo=Romo.id)
    WHERE S.id = ?`
    let result = await db(sql, [ id ])
    
    if(result.length === 0) {
      return 404
    } else {
      return result[0]
    }
  } catch (error) {
    console.log(error.message)
  }
}

const getDataSuratIzinEkaristi = async (id) => {
  try {
    let sql = 
    `SELECT S.id,
            S.no_surat,
            L.nama_lingkungan,
            K.nama_keluarga,
            K.nama_kepala_keluarga,
            K.no_telp_kepala_keluarga,
            S.id_lingkungan,
            L.nama_lingkungan,
            DATE_FORMAT(S.tgl_pelaksanaan, '%d-%m-%Y') AS tgl_pelaksanaan,
            S.waktu_mulai,
            S.waktu_selesai,
            S.intensi,
            S.lokasi_rumah,
            S.no_telp_lokasi,
            S.romo_pemimpin,
            S.alamat_komunitas,
            S.no_telp_komunitas,
            S.ketua_lingkungan,
            S.ketua_lingkungan_approval,
            Sekret.nama AS nama_sekretariat,
            S.sekretariat_approval,
            Romo.nama AS nama_romo_paroki,
            S.romo_approval,
            DATE_FORMAT(S.created_at, '%d-%m-%Y') AS created_at
    FROM Surat_Izin_Pelayanan_Ekaristi S JOIN Keluarga K ON (S.id_keluarga=K.id)
        JOIN Lingkungan L ON (S.id_lingkungan=L.id)
        JOIN Admin Sekret ON (S.id_sekretariat=Sekret.id)
        JOIN (SELECT id, nama, role FROM Admin) Romo ON (S.id_romo=Romo.id)
    WHERE S.id = ?`
    let result = await db(sql, [ id ])
    
    if(result.length === 0) {
      return 404
    } else {
      result[0].waktu_mulai = result[0].waktu_mulai.substring(0,5)
      result[0].waktu_selesai = result[0].waktu_selesai.substring(0,5)
      return result[0]
    }
  } catch (error) {
    console.log(error.message)
  }
}




module.exports = {
  cetakSurat,
}