const conn = require("../database/db.js")

module.exports = {
    getShop : (req,res)=>{
        const get = 'select * from shop'
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
    getShopparam : (req,res)=>{
        const id_brg = req.params.id_brg
        const get = `select * from shop where id_brg = ${id_brg}`
        conn.query(get,(err,data) =>{
            if(err){
                console.log('Error:', err)
                res.status(500).send({
                    message : err.message || `Terjadi Kesalahan saat Get data dengan params ${id_brg}`
                })
            }
            else
                res.send(data)
        })
    },
    postShop : (req,res) =>{
        const post_shop = req.body;
        conn.query('insert into shop set ?', post_shop,(err)=>{
            if (err) {
                console.log('error',err);
                res.status(500).send({
                    message : err.message || 'Terjadi Kesalahan Saat Insert data'
                })
            }
            else
                res.send(post_shop)
        })
    },
    putShop : (req,res)=>{
        const id_brg = req.params.id_brg
        const shop = req.body
        const get = `update shop set nama = '${shop.nama}', harga = '${shop.harga}', deskripsi = '${shop.deskripsi}' where id_brg = ${id_brg}`
        conn.query(get,(err,data) =>{
            if(err){
                res.status(500).send({
                    message : err.message || 'Terjadi Kesalahan saat Update data dengan id_brg shop' + id_brg
                })
            }
            else if (data.affectedRows == 0){
                res.status(404).send({
                    message : err.message || `Tidak dapat menemukan barang dengan ${id_brg}`
                })
            }
            else
                console.log ('update shop berhasil', {id_brg:id_brg, ... shop})
                res.send({id_brg:id_brg, ... shop})
        })
    },
    deleteShop : (req,res)=>{
        const id_brg = req.params.id_brg
        const shop = req.body
        const get = `delete from shop where id_brg = '${id_brg}'`
        conn.query(get,(err,data) =>{
            if(err){
                res.status(500).send({
                    message : err.message || 'Terjadi Kesalahan saat Delete data dengan id_brg' + id_brg
                })
            }
            else if (data.affectedRows == 0){
                res.status(404).send({
                    message : err.message || `Tidak dapat menemukan barang dengan nama ${shop.nama}`
                })
            }
            else
                res.send(`Barang dengan nama = ${shop.nama} telah dihapus`)
        })
    }
}