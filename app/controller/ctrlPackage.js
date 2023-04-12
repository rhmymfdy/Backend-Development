const conn = require("../database/db.js")

module.exports = {
    getPakckage : (req,res)=>{
        const get = 'select * from package'
        conn.query(get,(err,data) =>{
            if(err){
                console.log('Error:', err)
                res.status(500).send({
                    message : err.message || 'Terjadi Kesalahan saat Get data'
                })
            }
            else
                res.send(data)
        })
    },
    getPakckageparam : (req,res)=>{
        const id_package = req.params.id_package
        const get = `select * from package where id = ${id_package}`
        conn.query(get,(err,data) =>{
            if(err){
                console.log('Error:', err)
                res.status(500).send({
                    message : err.message || `Terjadi Kesalahan saat Get data dengan params ${id_package}`
                })
            }
            else
                res.send(data)
        })
    },
    postPakckage : (req,res) =>{
        const post_package = req.body;
        conn.query('insert into package set ?', post_package,(err)=>{
            if (err) {
                console.log('error',err);
                res.status(500).send({
                    message : err.message || 'Terjadi Kesalahan Saat Insert data'
                })
            }
            else
                res.send(post_package)
        })
    },
    putPakckage : (req,res)=>{
        const id_package = req.params.id_package
        const package = req.body
        const get = `update package set nama = '${package.nama}', harga = '${package.harga}', deskripsi = '${package.deskripsi}' where id_package = '${id_package}'`
        conn.query(get,(err,data) =>{
            if(err){
                res.status(500).send({
                    message : err.message || 'Terjadi Kesalahan saat Update data dengan id package' + id_package
                })
            }
            else if (data.affectedRows == 0){
                res.status(404).send({
                    message : err.message || `Tidak dapat menemukan package dengan ${id_package}`
                })
            }
            else
                console.log ('update Studio berhasil', {id_package:id_package, ... package})
                res.send({id_package:id_package, ... package})
        })
    },
    deletePakckage : (req,res)=>{
        const id_package = req.params.id_package
        const package = req.body
        const get = `delete from package where id_package = ${id_package}`
        conn.query(get,(err,data) =>{
            if(err){
                res.status(500).send({
                    message : err.message || 'Terjadi Kesalahan saat Delete data dengan id_package' + package
                })
            }
            else if (data.affectedRows == 0){
                res.status(404).send({
                    message : err.message || `Tidak dapat menemukan Pakckage dengan nama ${package.id_package}`
                })
            }
            else
                res.send(`Studio dengan nama = ${package.id_package} telah dihapus`)
        })
    }
}