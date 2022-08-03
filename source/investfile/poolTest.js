require("dotenv").config();

const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 7,
  queueLimit: 0,
  multipleStatements: true,
});

// const test1 = (async function () {
//   // 커넥션 가져오기
//   // let connection1 = await pool.getConnection(async conn => conn)
//   // let connection2 = await pool.getConnection(async conn => conn)
//   // let connection3 = await pool.getConnection(async conn => conn)
//   // let connection4 = await pool.getConnection(async conn => conn)

//   let sql = "SELECT * FROM test";

//   let [rows1] = await pool.query(sql);
//   let [rows2] = await pool.query(sql);
//   let [rows3] = await pool.query(sql);
//   let [rows4] = await pool.query(sql);

//   console.log(rows1);
//   console.log(rows2);
//   console.log(rows3);
//   console.log(rows4);
// })();


const test3 = (async function() {
  let connection = await pool.getConnection(async conn => conn);

  let [row1] = await connection.execute(`SELECT * from test3`);
  
  console.log('test3', row1)

})();

const test4 = async () => {

    //let connection = await pool.getConnection(async conn => conn);
    let [row1] = await pool.execute(`select * from test3`);
    console.log('test4',row1);
};

const test1 = (async function () {
  // 커넥션 가져오기
  // let connection1 = await pool.getConnection(async conn => conn)
  // let connection2 = await pool.getConnection(async conn => conn)
  // let connection3 = await pool.getConnection(async conn => conn)
  // let connection4 = await pool.getConnection(async conn => conn)

  let sql = "SELECT * FROM test";

  let [rows1] = await pool.query(sql);
  let [rows2] = await pool.query(sql);
  let [rows3] = await pool.query(sql);
  let [rows4] = await pool.query(sql);

  console.log(rows1);
  console.log(rows2);
  console.log(rows3);
  console.log(rows4);
})();

const test5 = async () => {
  //let connection = await pool.getConnection(async conn => conn);
  let [row1] = await pool.execute(`select * from test3`);
  console.log('test5',row1);
};


const test2 = (async function () {
  let connection1 = await pool.getConnection(async (conn) => conn);
  let connection2 = await pool.getConnection(async (conn) => conn);
  let connection3 = await pool.getConnection(async (conn) => conn);


  let sql = "SELECT * FROM test2";

  let [rows1] = await connection1.query(sql);
  let [rows2] = await connection2.query(sql);
  let [rows3] = await connection3.query(sql);


  console.log(rows1);
  console.log(rows2);
  console.log(rows3);
})();


console.log('test3', test3);
console.log('test4', test4(`test3`));
console.log('test5', test5());

console.log('test1', test1);
console.log('test2', test2);
