require("dotenv").config();

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password : process.env.DB_PASSWORD,
    waitForConnections: true,
    connectionLimit: 4,
    queueLimit: 0,
    multipleStatements: true
  });

const test1 = (async function() {
    const pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_DATABASE,
        password : process.env.DB_PASSWORD,
        waitForConnections: true,
        connectionLimit: 4,
        queueLimit: 0,
        multipleStatements: true
      });
  // 커넥션 가져오기
  let connection1 = await pool.getConnection(async conn => conn)
  let connection2 = await pool.getConnection(async conn => conn)
  let connection3 = await pool.getConnection(async conn => conn)
  let connection4 = await pool.getConnection(async conn => conn)
  


  let sql = 'SELECT * FROM test'

  let [ rows1 ] = await connection1.query(sql)
  let [ rows2 ] = await connection2.query(sql)
  let [ rows3 ] = await connection3.query(sql)
  let [ rows4 ] = await connection4.query(sql)


  console.log(rows1)
  console.log(rows2)
  console.log(rows3)
  console.log(rows4)
 })();

const test2 = (async function() {
    const pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_DATABASE,
        password : process.env.DB_PASSWORD,
        waitForConnections: true,
        connectionLimit: 40,
        queueLimit: 0,
        multipleStatements: true
      });    
    console.log("before", pool)

    let connection1 = await pool.getConnection(async conn => conn)
    let connection2 = await pool.getConnection(async conn => conn)
    let connection3 = await pool.getConnection(async conn => conn)
    let connection4 = await pool.getConnection(async conn => conn)
    let connection5 = await pool.getConnection(async conn => conn)
    let connection6 = await pool.getConnection(async conn => conn)

    let sql = 'SELECT * FROM test2'
  
    let [ rows1 ] = await connection1.query(sql)
    let [ rows2 ] = await connection2.query(sql)
    let [ rows3 ] = await connection3.query(sql)
    let [ rows4 ] = await connection4.query(sql)
    let [ rows5 ] = await connection5.query(sql)
    let [ rows6 ] = await connection6.query(sql)
      
    console.log("after", pool)
  
    console.log(rows1)
    console.log(rows2)
    console.log(rows3)
    console.log(rows4)
    console.log(rows5)
    console.log(rows6)
  
  })();
