require("dotenv").config();

const mysql = require('mysql2');
 
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password : process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  multipleStatements: true
});



pool.query("SELECT * FROM books", function(err, rows, fields) {
        // Connection is automatically released when query resolves

    console.log(rows)
})
