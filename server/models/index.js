var db = require('../db');

// console.log(db.query);

// (function (username, message, roomname) {
//       let string = `INSERT INTO messages (id, roomname, username, message) values (null, '${roomname}', '${username}', '${message}');`;
//       console.log(string);
//       db.query(string, (err, [], data) => {
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
        db.connection.query(string, [], (err, data) => {
          if (err) {
            return reject(err);
          } else {
            resolve(data);
          }
        });
      });
    }, // a function which produces all the messages
    
    post: function (username, message, roomname) {
      message = JSON.stringify(message);
      // let queryString = 'INSERT INTO messages (id, roomname) values id = ;'
      let string = `INSERT INTO messages (id, roomname, username, message) values (null, '${roomname}', '${username}', ''${message}'')`;
      db.connection.query(string, [], (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      });
      
      let userString = `INSERT INTO users (userId, username) values (null, '${username}')`;
      db.connection.query(userString, [], (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      let string = `select * from users;`;
      return new Promise(function(resolve, reject) {
        db.connection.query(string, [], (err, data) => {
          if (err) {
            return reject(err);
          } else {
            console.log(data);
            resolve(data);
          }
        });
      });
    },
    
    post: function (username) {
      let userString = `INSERT INTO users (userId, username) values (null, '${username}')`;
      db.connection.query(userString, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
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

