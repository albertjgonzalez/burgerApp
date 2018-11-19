CREATE DATABASE burgersDB;
USE burgersDB;

CREATE TABLE burgers(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(10) NOT NULL,
devoured BOOLEAN NOT NULL,
PRIMARY KEY(id)
);
