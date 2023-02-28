const express = require("express");
const playlists = express.Router();
const { getAllPlaylists, getPlaylist, createPlaylist } = require("../queries/playlists");


playlists.get("/", async (req, res) => {
    const allPlaylists = await getAllPlaylists();
    console.log(allPlaylists);
    if(allPlaylists[0]){
        res.status(200).json(allPlaylists);
    }
    else {
        res.status(500).json({error: "server error"});
    }
});

playlists.get("/:id", async (req, res) => {
    const { id } = req.params;
    const playlist = await getPlaylist(id);
    if (playlist) {
      res.json(playlist);
    } else {
      res.status(404).json({ error: "not found" });
    }
});

playlists.post("/", async (req, res) => {
    try{
        console.log(req.body);
        const playlist = await createPlaylist(req.body);
        res.json(playlist)
    }
    catch (error) {
        res.status(400).json({ error: error });
    }
  });

  
  

module.exports = playlists;