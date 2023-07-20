const express = require('express')
const playlistController = require("../controllers/playlistController")

const router = express.Router()

router.get("/playlist", playlistController.getPlaylist)

router.post("/song", playlistController.addSong)

router.post("/song/:id", playlistController.playSong)

module.exports = router