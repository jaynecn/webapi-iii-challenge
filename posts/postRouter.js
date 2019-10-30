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

router.get('/:id', middle.logger, (req, res) => {
  db.getById(req.params.id)
  .then(data => {
    res.status(200).json(data);
  })
  .catch(error => {
    res.status(500).json({ error: 'The post information could not be retrieved. ' + error.message})
  })

});

// DELETE request

router.delete('/:id', middle.logger, (req, res) => {
  db.remove(req.params.id)
  .then(data => {
    res.status(200).json(data);
  })
  .catch(error => {
    res.status(404).json({ error: 'The post could not be found ' + error.message});
  })
});


// PUT request
router.put('/:id', (req, res) => {
  const changes = req.body;
  db.update(req.params.id, changes)
    .then(data => {
      res.status(200).json(changes);
    })
    .catch(error => {
      res.status(500).json({ error: 'The pos information could not be modified ' + error.message})
    })
});

// // custom middleware

// function validatePostId(req, res, next) {

// };

module.exports = router;