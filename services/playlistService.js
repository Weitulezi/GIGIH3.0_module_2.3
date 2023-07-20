const playlistModel = require("../models/playlistModel")

class PlaylistService {
    static getPlaylist() {
        return playlistModel.getPlaylist(true)
    }

    static addSong(song) {
        return playlistModel.addSong(song)
    }

    static playSong(id) {
        return playlistModel.playSong(id)
    }
}

module.exports = PlaylistService