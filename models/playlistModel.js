const { v4: uuidv4 } = require('uuid');

// Song url example
// https://open.spotify.com/track/035aFnfIrO25Hy4PRP6GC7?si=4f89f3f5ca214bf7

const playlist = []

class PlaylistModel {
    static addSong(song) {
        const {title, artist, url} = song
        const id = uuidv4()
        playlist.push({      
            id,
            title,
            artist,
            url,
            playCount: 0
        })
    }

    static getPlaylist(isSort) {
        if(isSort) {
            playlist.sort((a, b) => {
                return b.playCount - a.playCount
            })
        }
        return playlist
    }

    static playSong(id) {
        let theSong = null
        for(let i=0; i<playlist.length; i++) {
            if(playlist[i].id == id) {
                return playlist[i]
            }
        }
    }
}


module.exports = PlaylistModel