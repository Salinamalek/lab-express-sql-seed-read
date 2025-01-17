DROP DATABASE IF EXISTS tuner;
CREATE DATABASE tuner;

\c tuner;

DROP TABLE IF EXISTS playlists;
CREATE TABLE playlists (
    id SERIAL PRIMARY KEY,
    title TEXT
);

CREATE TABLE songs (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 artist TEXT NOT NULL,
 album TEXT,
 time TEXT,
 is_favorite BOOLEAN,
 playlist_id INTEGER REFERENCES songs (id)
 ON DELETE CASCADE
);

DROP TABLE IF EXISTS comments;

CREATE TABLE comments (
 id SERIAL PRIMARY KEY,
 commenter TEXT,
 title TEXT,
 content TEXT,
 songs_id INTEGER REFERENCES songs (id)
 ON DELETE CASCADE
);