var mysql = require('mysql');

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
})

exports.query = function (string, callback) {
  db.query(string, (err, data) => {
    if (err) throw err;
    callback(data);
  })
}
