var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      return db.Messages.sync()
        .then(function() {
          return db.Messages.findAll();
        });
    }, // a function which produces all the messages
    
    post: function (username, message, roomname) {
      return db.Messages.sync()
        .then(function() {
          return db.Messages.create({username: username, roomname: roomname, message: message});
        });
    } 
  },
  
  users: {
    get: function () {
      return db.Users.sync()
        .then(function() {
          return db.Users.findAll();
        });
    }, // a function which produces all the messages
    
    post: function (username) {
      return db.Users.sync()
        .then(function() {
          return db.Users.create({username: username});
        });
    } 
  }
};
    