DROP DATABASE IF EXISTS music_dev;
CREATE DATABASE music_dev;

\c music_dev;

CREATE TABLE songs(
    id SERIAL PRIMARY KEY,
    playlist_id INT,
    name TEXT NOT NULL,
    artist TEXT,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN
);

CREATE TABLE playlists(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

-- CREATE TABLE albums(
--     id SERIAL PRIMARY KEY,
--     name TEXT NOT NULL
-- );

-- CREATE TABLE artists(
--     id SERIAL PRIMARY KEY,
--     name TEXT NOT NULL
-- );