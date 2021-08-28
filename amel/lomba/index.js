// *** Inisiasi Library ***
// memanggil library express
const express = require("express")();
// memanggil library body-parser
const bodyParser = require("body-parser")
// memanggil library cors
const cors = require("cors")
// memanggil library mysql
const mysql = require("mysql")

// implementasi
const app = express;
// penggunaan cors agar end-point dapar diakses oleh cross platform
app.use(cors())
// untuk ekstrak data request berformat json
app.use(bodyParser.json())
// untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// create MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "rpl"
})

db.connect(error => {
    if (error) {
        console.log(error.message)
    } else {
        console.log("MySQL Connected")
    }
})

// endpoint akses data kurir
app.get("/kurir", (req, res) => {
    // create sql query
    let sql = "select * from kurir"

    // run query
    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message // pesan error
            }            
        } else {
            response = {
                count: result.length, // jumlah data
                kurir: result // isi data
            }            
        }
        res.json(response) // send response
    })
})

// end-point akses data berdasarkan nama tertentu
app.get("/kurir/:nama", (req, res) => {
    let data = {
        nama: req.params.nama
    }
    // create sql query
    let sql = "select * from kurir where ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message // pesan error
            }            
        } else {
            response = {
                count: result.length, // jumlah data
                siswa: result // isi data
            }            
        }
        res.json(response) // send response
    })
})


// endpoint tambah data
app.post("/kurir", (req, res) => {
    // prepare data
    let data = {
        nama: req.body.nama,
        alamat: req.body.alamat,
        kurir_pengirim: req.body.kurir_pengirim,
        tanggal_kirim: req.body.tanggal_kirim
    }

    // create sql query insert
    let sql = "insert into kurir set ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data inserted",
                kurir: result //menampilkan isi data yang telah ditambahkan
            }
        }
        res.json(response) // send response
    })
})

// end-point mengubah data kurir
app.put("/kurir", (req,res) => {

    // prepare data
    let data = [
        // data
        {
            nama: req.body.nama,
            alamat: req.body.alamat,
            kurir_pengirim: req.body.kurir_pengirim,
            tanggal_kirim: req.body.tanggal_kirim
        },

        // parameter (primary key)
        {
            id_kurir: req.body.id_kurir
        }
    ]

    // create sql query update
    let sql = "update kurir set ? where ?"

    // run query
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data updated"
            }
        }
        res.json(response) // send response
    })
})


app.listen(8080, (port) => {
    console.log(`Server run on 8080`)
})