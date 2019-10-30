
// CUSTOM MIDDLEWARE
function logger(req, res, next) {
  console.log(
    `${req.method} ${req.url} ${req.baseUrl} [${new Date().toISOString()}]`);
    // REMEMBER TO INCLUDE NEXT!!!
    next();
}

function validateUserId(req, res, next) {

};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = {logger}