const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config({path: './.env'});

const db = mysql.createConnection({
    host     : process.env.SQLHOST,
    user     : process.env.SQLUSER,
    password : process.env.SQLPASSWORD,
    database : process.env.SQLDATABASE,
    socketPath : "/Applications/MAMP/tmp/mysql/mysql.sock"
});

db.connect( (error) => {
    if(error) {
        console.log(error)
    } else {
        console.log('Database Connected...')
    }
})

module.exports = db
