const playlistService = require("../services/playlistService")
const playlistModel = require("../models/playlistModel")
const playlist = new playlistModel()

class PlaylistController {
    static getPlaylist(req, res) {
        const playlist =  playlistService.getPlaylist(false)

        res.status(200).json({songs: playlist})
    }

    static addSong(req, res) {
        const {title, artist, url} = req.body
        let addNewSong = playlistService.addSong({title, artist, url})

        res.status(200).json({message: "Song is successfully added to playlist"})
    }

    static playSong(req, res) {
        const songId = req.params.id
        const song = playlistService.playSong(songId)

        res.status(200).json(song)
    }
}

module.exports = PlaylistController