const mysql = require("mysql2/promise");

const pool = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	database: process.env.DB_DATABASE,
	password: process.env.DB_PASSWORD,
	waitForConnections: true,
	connectionLimit: 300,
	queueLimit: 0,
	multipleStatements: true,
});

const queryBook = async () => {
  let data = {
	boolean: false,
	message: '',
	code: Number(''),
	result: null
  };

  try {
	const connection = await pool.getConnection(async conn => conn);
    const [rows] = await connection.query(
      `SELECT * FROM books
		`);

	connection.release();
	data.result = rows;

  } catch (err) {
	console.log(err);
	data.result = err.message
  }
  return data.result;
};

const createNewBook = async (title, description, cover_image) => {
	try {
		return await pool.execute(
			`INSERT INTO books (
				title,
				description,
				cover_image
				) VALUES (?, ?, ?);
				`, [title, description, cover_image]
		);
	
	} catch (err) {
		const error = new Error('INVALID_DATA_INPUT');
		error.statusCode = 500;
		throw error;
	}
};

const updateBook = async (name, data, id) => {
	let data = {
	  boolean: false,
	  message: '',
	  code: Number(''),
	  result: null
	};
  
	try {
	  const connection = await pool.getConnection(async conn => conn);
	  const [rows] = await connection.query(
		`UPDATE books 
			SET ?=?
			WHERE id = ? 
		  `,[name, data, id]);
  
	  connection.release();
	  data.result = rows;
  
	} catch (err) {
	  console.log(err);
	  data.result = err.message
	}
	return data.result;
  };


module.exports = {
  queryBook,
  createNewBook
};