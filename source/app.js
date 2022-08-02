require("dotenv").config();

const express = require('express');
const cors = require('cors');
const morgan = require("morgan");

const port = process.env.PORT
const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

const mysql = require('mysql2/promise');
const { start } = require("repl");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password : process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 30,
  queueLimit: 0,
  multipleStatements: true
});

app.get('/api/ping', async function (req, res, next) {
    res.json({message : 'pong'})
    });

app.get('/api/books', async(req, res) => {
  let Q = {
    boolean: false,
    massage: '',
    result: null
    }
    try {
        const SQL = 'SELECT * FROM books'
        const connection = await pool.getConnection(async conn => conn);
            try {
                const [ rows ] = await connection.query(SQL);
                connection.release();
                Q.result = rows;
              } catch(err) {
                  console.error('book query error');
                  console.error(err)
                  Q.result = err.message;
                  connection.release();
              }
          } catch(err) {
              console.error('book DB error');
              console.error(err)
              Q.result = err.message;
            }
          res.status(200).json(Q.result);
          });

app.post('/api/books', async(req, res) => {
  let Q = {
    boolean: false,
    massage: '',
    result: null
  }
  const {title, description, cover_image} = req.body

  try {
    const connection = await pool.getConnection(async conn => conn);
    let SQL = `INSERT INTO books (title, description, cover_image) VALUES (?, ?, ?)`
    await connection.execute(SQL, [title, description, cover_image]);
    Q.result = "SUCCESS";
    connection.release();

    } catch(err) {
      console.error('add book error');
      console.error(err)
      Q.result = err.message;
    }
  res.status(201).json({message : Q.result})
})

app.listen(port, 'node', function () {
    console.log(`server is listening at app.js:${process.env.PORT}`)
});

start();