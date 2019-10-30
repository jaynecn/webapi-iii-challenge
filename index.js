// 4. import express
const express = require('express');

// 5. instantiate express app
const server = express();

// 6.plug express middleware
server.use(express.json());

// 7. create 'catch-all' endpoint
server.get('*', handleDefault);
function handleDefault(req, res) {
  res.json('hello this is web-api challenge number 3')
}

// 8. listen on process.env.PORT || 7500
server.listen(process.env.PORT || 7500, () => {
  console.log('listening on jaynes server ' + (process.env.PORT || 7500));
})
