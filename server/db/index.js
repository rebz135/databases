var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'student', 'student', {
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

var Users = db.define('Users', {
  id: {type: Sequelize.INTEGER, allowNull:false, primaryKey: true, autoIncrement: true},
  username: Sequelize.STRING
});

var Messages = db.define('Messages', {
  id: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
  roomname: Sequelize.STRING,
  username: Sequelize.STRING,
  message: Sequelize.STRING,
});

module.exports = {
  Users: Users,
  Messages: Messages
};


