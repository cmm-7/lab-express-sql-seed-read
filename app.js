//DEPENDENCIES
const express = require("express");
const cors = require("cors");

//CONFIGURATIONS
const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to Tuner")
});

const songController = require("./controllers/songController");
app.use("/songs", songController);

const playlistController = require("./controllers/playlistController");
app.use("/playlists", playlistController);

app.get("*", ( req, res) => {
    res.status(404).send("Page not found");
});

//EXPORT
module.exports = app;