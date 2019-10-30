const express = require('express');
const db = require('./userDb');

const router = express.Router();

// POST requests
router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

// GET requests
router.get('', logger, (req, res) => {
  db.get(req.query)
  .then(data => {
    res.status(200).json(data);
  })
  .catch(error => {
    res.status(500).json({ error: 'The posts information could not be retrieved.' })
  })

});

router.get('/:id', (req, res) => {

});

router.get('/:id/posts', (req, res) => {

});

// DELETE requests
router.delete('/:id', (req, res) => {

});


// PUT requests
router.put('/:id', (req, res) => {

});

// CUSTOM MIDDLEWARE

function logger(req, res, next) {
  console.log(
    `${req.method} ${req.url} [${new Date().toISOString()}]`);
    // REMEMBER TO INCLUDE NEXT!!!
    next();
}
function validateUserId(req, res, next) {

};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
