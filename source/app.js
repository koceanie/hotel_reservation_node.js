require("dotenv").config();

const http = require("http");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const dotenv = require("dotenv");
dotenv.config()

const routes = require("./routes")

const app = express();

app.use(cors());
app.use(morgan("combined"));
app.use(express.json());
app.use(routes);

app.get("/api/ping", async function (req, res, next) {
  res.json({ message: "pong" });
});

const server = http.createServer(app);
const PORT = process.env.PORT;

const start = async () => {
  try{
    server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
  } catch (err) {
    console.error(err);
  }
};

start();

// app.get("/api/books", async (req, res) => {
//   let Q = {
//     boolean: false,
//     massage: "",
//     result: null,
//   };
//   try {
//     const SQL = "SELECT * FROM books";
//     const connection = await pool.getConnection(async (conn) => conn);
//     try {
//       const [rows] = await connection.query(SQL);
//       connection.release();
//       Q.result = rows;
//     } catch (err) {
//       console.error("book query error");
//       console.error(err);
//       Q.result = err.message;
//       connection.release()
//     }
//   } catch (err) {
//     console.error("book DB error");
//     console.error(err);
//     Q.result = err.message;
//   }
//   res.status(200).json(Q.result);
// });

// app.post("/api/books", async (req, res) => {
//   let Q = {
//     boolean: false,
//     massage: "",
//     result: null,
//   };
//   const { title, description, cover_image } = req.body;

//   try {
//     const connection = await pool.getConnection(async (conn) => conn);
//     let SQL = `INSERT INTO books (title, description, cover_image) VALUES (?, ?, ?)`;
//     await connection.execute(SQL, [title, description, cover_image]);
//     Q.result = "SUCCESS";
//     connection.release();
//   } catch (err) {
//     console.error("add book error");
//     console.error(err);
//     Q.result = err.message;
//   }
//   res.status(201).json({ message: Q.result });
// });

// app.listen(port, "node", function () {
//   console.log(`server is listening at app.js:${process.env.PORT}`);
// });

