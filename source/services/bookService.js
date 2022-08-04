const bookDao = require("../models/bookDao");

const queryBook = async () => {
  const queryBook = await bookDao.queryBook();
  return queryBook;
}

const createNewBook = async (title, description, cover_image) => {
  const createBook  = await bookDao.createNewBook(
    title,
    description,
    cover_image
  );
  return createBook;
};

const updateBook = async (id, title, description, cover_image) => {
  const updateBook  = await bookDao.updateBook(
    id,
    title, 
    description, 
    cover_image
  );
  return updateBook;
};

const deleteBook = async (id) => {
  const deleteBook  = await bookDao.deleteBook(
    id
  );
  return deleteBook;
};

module.exports = {
  queryBook,
  createNewBook,
  updateBook,
  deleteBook
};