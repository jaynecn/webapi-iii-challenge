const express = require('express');
const posts = require('./postDb');

const router = express.Router();

// GET requests
router.get('/', (req, res) => {

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