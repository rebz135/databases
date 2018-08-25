var db = require('../db');

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

// (function (username, message, roomname) {
//       let string = `INSERT INTO messages (id, roomname, username, message) values (null, '${roomname}', '${username}', '${message}');`;
//       db.queryPromise(string)
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
      return db.queryPromise(string);
      // .then(function(results) {
      //   return results;
      //   let newObj = {results};
      //   res.writeHead(200, defaultCorsHeaders);
      //   // res.send(JSON.stringify(newObj));
      //   res.end(JSON.stringify(newObj));
      // }).catch((err) => { throw err; });
    }, // a function which produces all the messages
    
    post: function (username, message, roomname) {
      message = JSON.stringify(message);
      // let queryString = 'INSERT INTO messages (id, roomname) values id = ;'
      let string = `INSERT INTO messages (id, roomname, username, message) values (null, '${roomname}', '${username}', ''${message}'')`;
      return db.queryPromise(string);
      // db.connection.query(string, [], (err, data) => {
      //   // if (err) {
      //   //   console.log(err);
      //   // } else {
      //     console.log(data);
      //   // }
      // });
      
      
      let userString = `INSERT INTO users (userId, username) values (null, '${username}')`;
      
      db.queryPromise(userString)
        .then(function(results) { console.log(results); });
      // db.connection.query(userString, [], (err, data) => {
      //   // if (err) {
      //   //   console.log(err);
      //   // } else {
      //     console.log(data);
      //   // }
      // });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      let string = `select * from users;`;
      return db.queryPromise(string);
      
      // let string = `select * from users;`;
      // db.queryPromise(string).then(function(results) {
      //   console.log(results);
      //   let newObj = {results};
      //   res.writeHead(200, defaultCorsHeaders);
      //   res.write(JSON.stringify(newObj));
      //   res.end();
      // }).catch((err) => { throw err; });
    },
    
    post: function (username, res) {
      let userString = `INSERT INTO users (userId, username) values (null, '${username}')`;
      return db.queryPromise(userString);
    }
  }
};


// exports.queryFunc = function (string, callback) {
//   db.query(string, (err, data) => {
//     if (err) throw err;
//     callback(data);
//   })
// }

