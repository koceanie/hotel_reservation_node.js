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

module.exports = {
  queryBook,
  createNewBook
};