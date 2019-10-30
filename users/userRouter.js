const express = require('express');
const db = require('./userDb');

// import middleware
const middle = require('../middleware');

const router = express.Router();

// POST requests
router.post('/', middle.logger, (req, res) => {
  db.insert(req.body)
  .then(data => {
    res.status(201).json(data);
  })
  .catch(error => {
    res.status(400).json({errorMessage: "Please provide a name for the post."})
  })
});

router.post('/:id/posts', (req, res) => {
  db.update(req.body)
  .then(data => {
    res.status(201).json(data);
  })
  .catch(error => {
    res.status(400).json({errorMessage: "Please provide text for the post."})
  })

});

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
    res.status(500).json({ error: 'The post information could not be retrieved.'})
  })

});

router.get('/:id/posts', middle.logger, (req, res) => {
  db.getUserPosts(req.params.id)
  .then(data => {
    res.status(200).json(data);
  })
  .catch(error => {
    res.status(500).json({ error: 'The posts information could not be retrieved.'})
  })

});

// DELETE requests
router.delete('/:id', (req, res) => {

});


// PUT requests
router.put('/:id', (req, res) => {

});



module.exports = router;
