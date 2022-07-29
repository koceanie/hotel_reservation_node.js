require("dotenv").config();

const express = require('express');
const cors = require('cors');
const morgan = require("morgan");

const port = process.env.PORT
const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

app.get('/api/ping', function (req, res, next) {
    res.json({message : 'pong'})
    });

app.post('api/books', async (req, res) => {
    const {title, description, coverImage} = req.body

    await myDataSource.query(
        `INSERT INTO books(
            title,
            description,
            cover_image
        ) VALUES (?, ?, ?);`,
        [title, description, coverImage]
    );
        res.status(201).json({message : "SUCCESSFULLY CREATED"});
})

app.get('api/books', async(req, res) => {
    await myDataSource.query(
        `SELECT
            books.id,
            books.title,
            books.description,
            books.cover_image,
            authors.first_name,
            authors.last_name,
            authors.age
        FROM book, users, books_authors
        INNER JOIN authors ON books_authors.authors_id = authors.id
        INNER JOIN book ON authors_books.book_id = book.id`
    ,(err, rows) => {
        res.status(200).json(rows);
    });
});
   
app.listen(port, 'node', function () {
    console.log(`server is listening at localhost:${process.env.PORT}`)
});
    

// const http = require('http');

// const server = http.createServer();

// const users = [
//   {
//     id: 1,
//     name: "Rebekah Johnson",
//     email: "Glover12345@gmail.com",
//     password: "123qwe",
//   },
//   {
//     id: 2,
//     name: "Fabian Predovic",
//     email: "Connell29@gmail.com",
//     password: "password",
//   },
// ]

// const httpRequestListener = function(request, response) {
//     console.log(`request object : ${request}`)
//     const { url, method } = request
//     if (method === 'GET') {
//         if (url === '/api/ping') {
//             response.writeHead(200, {"Content-Type": "application/json"});
//             response.end(JSON.stringify({message: "pong pong"}));
//         }
//     } 
    
//     else if (method === 'POST') {
//         if (url === '/api/users') {
//             let body = '';
//             console.log("body1", body)
//             request.on('data', (data) => {body += data});

//             request.on('end', () => {
//                 console.log("body2", body)
//                 const user = JSON.parse(body);

//                 users.push({
//                     id : user.id,
//                     name : user.name,
//                     email : user.email,
//                     password : user.password
//                 })
//                 console.log(users)
//             response.end(JSON.stringify({message : 'ADDED'}));
//             })
//         }
//     }
// };

// server.on("request", httpRequestListener);

// server.listen(3000, 'node', function() {
//     console.log('Listening to request on port 3000');
// });
