// Import Modul
const conn = require("../database/db.js")

module.exports = {
    getStudio : (req,res)=>{
        const get = 'select * from studio'
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
    getStudioparam : (req,res)=>{
        const id = req.params.id
        const get = `select * from studio where id = '${id}'`
        conn.query(get,(err,data) =>{
            if(err){
                console.log('Error:', err)
                res.status(500).send({
                    message : err.message || `Terjadi Kesalahan saat Get data dengan params ${id}`
                })
            }
            else
                res.send(data)
        })
    },
    postStudio : (req,res) =>{
        const post_studio = req.body;
        conn.query('insert into studio set ?', post_studio,(err)=>{
            if (err) {
                console.log('error',err);
                res.status(500).send({
                    message : err.message || 'Terjadi Kesalahan Saat Insert data'
                })
            }
            else
                res.send(post_studio)
        })
    },
    putStudio : (req,res)=>{
        const id = req.params.id
        const studio = req.body
        const get = `update studio set id = '${studio.id}', nama = '${studio.nama}', alamat = '${studio.alamat}', no_telp = '${studio.no_telp}' where id = '${id}'`
        conn.query(get,(err,data) =>{
            if(err){
                res.status(500).send({
                    message : err.message || 'Terjadi Kesalahan saat Update data dengan id Studio' + id
                })
            }
            else if (data.affectedRows == 0){
                res.status(404).send({
                    message : err.message || `Tidak dapat menemukan Studio dengan ${id}`
                })
            }
            else
                console.log ('update Studio berhasil', {id:id, ... studio})
                res.send({id:id, ... studio})
        })
    },
    deleteStudio : (req,res)=>{
        const id = req.params.id
        const studio = req.body
        const get = `delete from studio where id = '${id}'`
        conn.query(get,(err,data) =>{
            if(err){
                res.status(500).send({
                    message : err.message || 'Terjadi Kesalahan saat Delete data dengan id' + id
                })
            }
            else if (data.affectedRows == 0){
                res.status(404).send({
                    message : err.message || `Tidak dapat menemukan Studio dengan nama ${studio.id}`
                })
            }
            else
                res.send(`Studio dengan id = '${id}' telah dihapus`)
        })
    }
}