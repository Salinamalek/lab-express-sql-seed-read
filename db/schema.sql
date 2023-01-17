DROP DATABASE IF EXISTS tuner;
CREATE DATABASE tuner;

\c tuner;

CREATE TABLE songs (
 name TEXT NOT NULL,
 artist TEXT NOT NULL,
 album TEXT,
 time TEXT,
 is_favorite BOOLEAN
);