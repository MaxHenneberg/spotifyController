import express from "express";
import {SpotifyService} from "./boundary/SpotifyService";

const app = express()
const port = 3000
const spotifyService = new SpotifyService();

app.get('/listen', (req, res) => {
    res.send(spotifyService.getBPM())
})

app.get('/checkbpm', (req, res) => {
    res.send('Bouncing')

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
