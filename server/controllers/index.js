var models = require('../models');
var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get()
        .then(function(results) {
          let newObj = {results};
          res.write(JSON.stringify(newObj));
          res.end();
        }).catch((err) => { throw err; });
    }, // a function which handles a get request for all messages
    
    post: function (req, res) {
      console.log(req);
      models.messages.post(req.body.username, req.body.message, req.body.roomname)
        .then(function() {
          res.end();
        });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get()
        .then(function(results) {
          let newObj = {results};
          res.write(JSON.stringify(newObj));
          res.end();
        }).catch((err) => { throw err; });
    },
    
    post: function (req, res) {
      console.log(req);
      models.users.post(req.body.username)
        .then(function() {
          res.end();
        });
    }
  }
};

