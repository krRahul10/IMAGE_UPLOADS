const mysql = require("mysql2")

const conn = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"iamsrkfan@10",
    database:"userimgupload"
})

conn.connect((error) =>{
    if(error) throw error
    else console.log("Database is connected to mySQL")
})


module.exports = conn
