const mysql = require('mysql2/promise');

(async function() {
  let pool = mysql.createPool({
    host: 'mysql8',
    user: 'root',
    password: 'YpLssv=+%0eE6U)de3}[',
    database: 'crud',
    connectionLimit: 4
  });



  {
    try{
      let connection = await pool.getConnection(async conn => conn)
      let [row] = await connection.query(selectSql)
      console.log(row)
      connection.release()
    } catch(err){
      console.log(err)
    }
  }
  
})()
