const db = require("../db/dbConfig.js");

const getAllPlaylists = async () => {
    try{
      const allPlaylists = await db.any("SELECT * FROM playlists");
      console.log(allPlaylists);
      return allPlaylists
    }
    catch (error){
      return error;
    }
  }

  const getPlaylist = async (id) => {
    try {
      const onePlaylist = await db.oneOrNone("SELECT * FROM playlists WHERE songs.id=$1", id); //$1 = think of string interperlation
      return onePlaylist;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const createPlaylist = async (playlist) => {
    const { name } = playlist;
    try{
      const newSong = await db.oneOrNone(
        "INSERT INTO playlists ( name ) VALUES( $1 ) RETURNING *",
        [ name ]
        );
        return newSong;
    }
    catch (error){
      return error;
    }
  }

  module.exports = { getAllPlaylists, getPlaylist, createPlaylist};