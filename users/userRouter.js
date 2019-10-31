const express = require('express');
const db = require('./userDb');

// import middleware
const middle = require('../middleware');

const router = express.Router();

// POST requests
router.post('/', middle.logger, middle.validateUser, (req, res) => {
  // const post = {text: req.body.text, user_id: req.params.id };
  const user = {name: req.body.name}
  db.insert(user)
  .then(data => {
    res.status(201).json(data);
  })
  .catch(error => {
    res.status(400).json({errorMessage: "Please provide a name for the post." + error.message})
  })
});

router.post('/:id/posts', middle.logger, middle.validatePost, (req, res) => {
   // const post = {text: req.body.text, user_id: req.params.id };
  const post = {text: req.body.text, user_id: req.params.id}
  db.insert(post)
  .then(data => {
    res.status(201).json(data);
  })
  .catch(error => {
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

router.get('/:id', middle.logger, middle.validateUserId, (req, res) => {
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
router.delete('/:id', middle.logger, (req, res) => {
  db.remove(req.params.id)
  .then(data => {
    res.status(200).json(data);
  })
  .catch(error => {
    res.status(500).json({ error: 'The post could not be removed ' + error.message});
  })
});


// PUT requests
router.put('/:id', middle.logger, (req, res) => {
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
