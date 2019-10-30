const user = require('./users/userDb');

const post = require('./posts/postDb');

// CUSTOM MIDDLEWARE
function logger(req, res, next) {
  console.log(
    `${req.method} ${req.url} ${req.baseUrl} [${new Date().toISOString()}]`);
    // REMEMBER TO INCLUDE NEXT!!!
    next();
}

function validateUserId(req, res, next) {
  user.getById(req.params.id)
  .then(data => {
    if (data) {
      req.user = data;
      next()
    } else {
      res.status(400).json({ message: 'invalid user id' });
    }
  })
  .catch(error => {
    res.status(500).json({
      message: 'There has been an error' + error.message,
    });
  });
}

function validateUser(req, res, next) {
  user.insert(req.body)
    .then(data => {
      // made with help from Mike Attara
      if(!req.body) {
        res.status(400).json({ message: "missing user data"})
      } else if (!req.body.name) {
        res.status(400).json({ message: "missing required name field"})
      } else {
        next();
      }
    })
    .catch(error => {
      res.status(500).json({
        message: 'There has been an error' + error.message,
      })
    })
}

function validatePost(req, res, next) {
  post.insert(req.body)
    .then(data => {
      // made with help from Mike Attara
      if(!req.body) {
        res.status(400).json({ message: "missing post data"})
      } else if (!req.body.text) {
        res.status(400).json({ message: "missing required text field"})
      } else {
        next();
      }
    })
    .catch(error => {
      res.status(500).json({
        message: 'There has been an error' + error.message,
      })
    })

};

module.exports = {logger, validateUserId, validateUser, validatePost}