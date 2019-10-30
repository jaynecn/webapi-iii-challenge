const express = require('express');
const db = require('./postDb');

// import middleware
const middle = require('../middleware');

const router = express.Router();

// GET requests
router.get('', middle.logger, (req, res) => {
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

// DELETE request

router.delete('/:id', (req, res) => {

});


// PUT request
router.put('/:id', (req, res) => {

});

// custom middleware

function validatePostId(req, res, next) {

};

module.exports = router;