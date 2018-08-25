var db = require('../db');

// console.log(db.query);

// (function (username, message, roomname) {
//       let string = `INSERT INTO messages (id, roomname, username, message) values (null, '${roomname}', '${username}', '${message}');`;
//       console.log(string);
//       db.query(string, (data) => {
//         console.log(data)
//       })
//       })('user', 'text', 'lobby');

// (function () {
//       let string = `select * from messages;`;
//       db.query(string, (data) => {
//         console.log(JSON.stringify(data))
//       })
//     })();
module.exports = {
  messages: {
    get: function () {
      let string = `select * from messages;`;
      return new Promise(function(resolve, reject) {
        db.query(string, (data) => {
        resolve(data)
      })
    })
    }, // a function which produces all the messages
    post: function (username, message, roomname) {
      console.log('args', message);
      message = JSON.stringify(message);
      let string = `INSERT INTO messages (id, roomname, username, message) values (null, '${roomname}', '${username}', ''${message}'')`;
      console.log('STRING', string);
      db.query(string, (data) => {
        console.log(data)
      })
      
      let userString = `INSERT INTO users (userId, username) values (null, '${username}')`;
      db.query(userString, (data) => {
        console.log(data)
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      let string = `select * from users;`;
      return new Promise(function(resolve, reject) {
        db.query(string, (data) => {
        console.log(data);
        resolve(data)
      })
    })
    },
    
    post: function (username) {
      let userString = `INSERT INTO users (userId, username) values (null, '${username}')`;
      db.query(userString, (data) => {
        console.log(data)
      });
    }
  }
};


// exports.queryFunc = function (string, callback) {
//   db.query(string, (err, data) => {
//     if (err) throw err;
//     callback(data);
//   })
// }

