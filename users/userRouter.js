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
    res.status(400).json({errorMessage: "Please provide a name for the post." + error.message})
  })
});

router.post('/:id/posts', (req, res) => {
  const post = req.body;
  db.insert(req.body)
  // I CAN'T GET THIS ONE TO WORK AND I DON'T KNOW WHY.  TRIED LOTS OF THINGS IN POSTMAN
  .then(data => {
    console.log(data)
    res.status(201).json(post);
  })
  .catch(error => {
    console.log(error)
    res.status(400).json({errorMessage: "Please provide text for the post." + error.message})
  })
})

// GET requests
router.get('', middle.logger, (req, res) => {
  db.get(req.query)
  .then(data => {
    res.status(200).json(data);
  })
  .catch(error => {
    res.status(500).json({ error: 'The posts information could not be retrieved.' + error.message })
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

router.get('/:id/posts', middle.logger, (req, res) => {
  db.getUserPosts(req.params.id)
  .then(data => {
    res.status(200).json(data);
  })
  .catch(error => {
    res.status(500).json({ error: 'The posts information could not be retrieved. ' + error.message })
  })

});

// DELETE requests
router.delete('/:id', (req, res) => {
  db.remove(req.params.id)
  .then(data => {
    res.status(200).json(data);
  })
  .catch(error => {
    res.status(500).json({ error: 'The post could not be removed ' + error.message});
  })
});


// PUT requests
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



module.exports = router;
