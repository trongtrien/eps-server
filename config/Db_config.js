const mysql = require('mysql')
const dotenv = require('dotenv')

dotenv.config()

const db_connect = mysql.createConnection({
    host: process.env.HOST_NAME,
    port: 25060,
    user: process.env.USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})
db_connect.connect((err)=>{
    if(err){
        console.log(err)
    } else {
        console.log("Access database connection")
    }
})

module.exports = db_connect

