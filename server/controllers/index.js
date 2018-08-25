var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(res);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req.body);
      models.messages.post(req.body.username, req.body.message, req.body.roomname, res);
       
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(res);
    },
    post: function (req, res) {
      models.users.post(req.body.username, res);
    }
  }
};

