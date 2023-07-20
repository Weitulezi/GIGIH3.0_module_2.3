const express = require('express')
const app = express()
const port = 3000

const bodyParser = require("body-parser")

app.use(bodyParser.json())

app.listen(port, ()=> console.log(`Spotify app listening on port ${port}!`))


const playlistRoutes = require('./routes/playlistRoute')

app.use("/api", playlistRoutes)


// app.post("/song",(req, res) => {
//     const data = req.body

//     let song = {
//         id: uuidv4(),
//         title: data.title,
//         artist: [...data.artist],
//         url: data.url,
//     }

//     songs.push(song)

//     console.log(songs);

//     res.status(200).json({message: "Song is succesfully added"})
// })

// // Get a list of songs
// app.get("/songs",(req, res) => {
//     const listOfSongs = songs
//     res.status(200).json({songs: listOfSongs})
// })

// // Play song
// app.post("/song/:id", (req, res) => {
//     const songId = Number(req.params.id)

//     songs.forEach(song => {
//         if(song.id === songId) {
//             res.status(200).json(song)
//         }
//     })

//     res.status(404).json({message: "Song doesnt exist"})
// })

// app.get("/song/:id", (req, res) => {
//     const songId = req.params.id
//     console.log(songs);
//     res.status(200).json({messaeg: "Test"})
// })