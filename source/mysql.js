const mysql = require('mysql2/promise');

export const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password : process.env.DB_PASSWORD,
    waitForConnections: true,
    connectionLimit: 30,
    queueLimit: 0,
    multipleStatements: true
});