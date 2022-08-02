//controller/userController.js

const bookService = require('../services/bookService');

const add = async (req, res) => {
  try {
    const { title, description, cover_image } = req.body;

    if ( !title || !description) {
      return res.status(400).json({ message: 'KEY_ERROR' });
    }

    await bookService.add( name, email, password, profileImage );
    return res.status(201).json({
      message: 'SIGNUP_SUCCESS',
    });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
	search
}