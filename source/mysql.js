require("dotenv").config();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_DATABASE
});

connection.connect();

connection.query('select title, content from posts where user_id = 1;', function(err, results, fields) {
  if (err) {
    console.log(err);
  }
  console.log(results);
});

connection.end();

