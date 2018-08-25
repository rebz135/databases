CREATE DATABASE chat;

USE chat;



/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  /* Describe your table here.*/
  userId int NOT NULL AUTO_INCREMENT,
  username text,
  PRIMARY KEY (userId)
);

CREATE TABLE rooms (
  /* Describe your table here.*/
  roomId int NOT NULL AUTO_INCREMENT,
  roomname text,
  PRIMARY KEY (roomId)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id int NOT NULL AUTO_INCREMENT,
  -- room_id int,
  roomname text,
  -- user_id int,
  username text,
  message text,
  PRIMARY KEY (id)
  -- FOREIGN KEY (room_id) REFERENCES rooms(roomId),
  -- FOREIGN KEY (user_id) REFERENCES users(userId)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

