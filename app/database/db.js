const mysql = require("mysql");

// connect expres to mysql
// open mysql connection
const conn = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'rasta1998',
    database: 'Project_UmegaStudio'
});
conn.connect(error =>{
    if(error) throw error;
    console.log('Succes Connect')
})

module.exports = conn