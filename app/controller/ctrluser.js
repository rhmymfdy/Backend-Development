const conn = require("../database/db.js")

module.exports = {
    getUser : (req,res)=>{
        const get = 'select * from user'
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
    getUserparam : (req,res)=>{
        const id_user = req.params.id_user
        const get = `select * from user where id_user = ${id_user}`
        conn.query(get,(err,data) =>{
            if(err){
                console.log('Error:', err)
                res.status(500).send({
                    message : err.message || `Terjadi Kesalahan saat Get data dengan params ${id_user}`
                })
            }
            else
                res.send(data)
        })
    },
    postUser : (req,res) =>{
        const post_user = req.body;
        conn.query('insert into user set ?', post_user,(err)=>{
            if (err) {
                console.log('error',err);
                res.status(500).send({
                    message : err.message || 'Terjadi Kesalahan Saat Insert data'
                })
            }
            else
                res.send(post_user)
        })
    },
    putUser : (req,res)=>{
        const id_user = req.params.id_user
        const user = req.body
        const get = `update user set nama = '${user.nama}', alamat = '${user.alamat}', no_telp = '${user.no_telp}', email = '${user.email}' where id_user = ${id_user}`
        conn.query(get,(err,data) =>{
            if(err){
                res.status(500).send({
                    message : err.message || 'Terjadi Kesalahan saat Update data dengan id_user user' + id_user
                })
            }
            else if (data.affectedRows == 0){
                res.status(404).send({
                    message : err.message || `Tidak dapat menemukan User dengan ${id_user}`
                })
            }
            else
                console.log ('update user berhasil', {id_user:id_user, ... user})
                res.send({id_user:id_user, ... user})
        })
    },
    deleteUser : (req,res)=>{
        const id_user = req.params.id_user
        const user = req.body
        const get = `delete from user where id_user = '${id_user}'`
        conn.query(get,(err,data) =>{
            if(err){
                res.status(500).send({
                    message : err.message || 'Terjadi Kesalahan saat Delete data dengan id_user' + id_user
                })
            }
            else if (data.affectedRows == 0){
                res.status(404).send({
                    message : err.message || `Tidak dapat menemukan user dengan nama ${user.nama}`
                })
            }
            else
                res.send(`User dengan nama = ${user.nama} telah dihapus`)
        })
    }
}