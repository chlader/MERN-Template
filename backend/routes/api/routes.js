const express = require('express');
const router = express.Router();

// @route: GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('book route testing!'));

// @route: GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
    Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(404).json({ noBooksFound: 'No books found' }));
});

export default router;