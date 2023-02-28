const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
    try {
      const allSongs = await db.any("SELECT * , songs.id AS id, songs.name AS name FROM songs JOIN playlists ON playlist_id=playlists.id");
      return allSongs;
    } catch (error) {
      return error;
    }
  };

  const getSong = async (id) => {
    try {
      const oneSong = await db.oneOrNone("SELECT * , songs.id AS id, songs.name AS name FROM songs JOIN playlists ON playlist_id=playlists.id WHERE songs.id=$1", id); //$1 = think of string interperlation
      return oneSong;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const createSong = async (song) => {
    const { name, playlist_id, artist, album, time, is_favorite } = song;
    try{
      const newSong = await db.oneOrNone(
        "INSERT INTO songs (name, playlist_id, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5, $6 ) RETURNING *",
        [ name, playlist_id, artist, album, time, is_favorite ]
        );
        return newSong;
    }
    catch (error){
      return error;
    }
  }

  const deleteSong = async (id) => {
    try{
      const deletedSong = await db.one("DELETE FROM songs WHERE id = $1 RETURNING *",
      id);
      return deletedSong;
    }
    catch (error){
      return error;
    }
  };

  const updateSong = async (id, song) => {
    const {  name, playlist_id, artist, album, time, is_favorite} = song;
    try{
      const updatedSong = await db.one(
        "UPDATE songs SET name=$1, playlist_id=$2, artist=$3, album=$4, time=$5, is_favorite=$6 WHERE id=$7 RETURNING *",
        [ name, playlist_id, artist, album, time, is_favorite, id ]
      );
      return updatedSong;
    }
    catch(error){
      return error;
    }
  }

  

  module.exports = { getAllSongs, getSong, createSong, deleteSong, updateSong};