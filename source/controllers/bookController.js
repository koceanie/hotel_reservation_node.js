const bookService = require("../services/bookService");

const queryBook = async (req, res) => {
  let data = {
    boolean: false,
    message: '',
    code: Number(''),
    result: null,
  };

  try {
    const rows = await bookService.queryBook();
    data.result = rows;
    data.code = 200;
    
  } catch (err) {
    console.log(err);
    data.code = err.statusCode
    data.result = err.message;
  }
  return res.status(data.code).json(data.result);
}

const createNewBook = async (req, res) => {
  try {
    const {title, description, cover_image} = req.body;

    if (!title || !description || !cover_image) {
      return res.status(400).json({ message: "KEY_ERROR"});
    }

    await bookService.createNewBook(title, description, cover_image);
    return res.status(201).json({
      message : "SUCCESS : CREATE_NEW_BOOK"
    });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({
      message : err.message
    });
  }
};


const updateBook = async (req, res) => {
  try {
    const {id, title, description, cover_image} = req.body;

    await bookService.updateBook(id, title, description, cover_image);
    return res.status(201).json({
      message : "SUCCESS : UPDATE_BOOK"
    });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({
      message : err.message
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const {id} = req.body;

    if (!id) {
      return res.status(400).json({ message: "KEY_ERROR"});
    }

    await bookService.deleteBook(id);
    return res.status(201).json({
      message : "SUCCESS : DELETE_BOOK"
    });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({
      message : err.message
    });
  }
};

module.exports = {
  queryBook,
  createNewBook,
  updateBook,
  deleteBook
};