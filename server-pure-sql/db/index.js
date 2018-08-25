var mysql = require('mysql');
var Promise = require('bluebird');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var db = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'chat'
});

db.connect(function(err) {
  console.log(err);
});

var queryPromise = Promise.promisify(db.query.bind(db));

exports.queryPromise = queryPromise;
exports.connection = db;