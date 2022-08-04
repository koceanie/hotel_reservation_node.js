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

const updateBook = async (id, title, description, cover_image) => {
	let update = {
	  boolean: false,
	  message: '',
	  code: Number(''),
	  result: null
	};
  
	try {
	  const connection = await pool.getConnection(async conn => conn);
		
	  const array = [];

	  if (title) {
		array.push(`title = "${title}"`)
	  }

	  if (description) {
		array.push(`description = "${description}"`)
	  }

	  if (cover_image) {
		array.push(`cover_image = "${cover_image}"`)
	  }

	  const [rows] = await connection.query(
		`UPDATE books 
			SET ${array}
		  WHERE id = ${id}`
	  )
	  console.log(`UPDATE books SET ${array} WHERE id = ${id}`)
	  connection.release();
	  update.result = rows;
  
	} catch (err) {
	  console.log(err);
	  update.result = err.message
	}
	return update.result;
  };

const deleteBook = async (id) => {
	let deletedata = {
		boolean: false,
		message: '',
		code: Number(''),
		result: null
	};
	try {
		const connection1 = await pool.getConnection(async conn => conn);
		const [rows] = await connection1.query(
		`DELETE 
		FROM books 
		WHERE id = ${id}`)

		connection1.release();
		deletedata.result = rows;

	} catch (err) {
		console.log(err);
		deletedata.result = err.message
	}
	return deletedata.result;
	};

module.exports = {
  queryBook,
  createNewBook,
  updateBook,
  deleteBook
};