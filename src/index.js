const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const password = "swamphacks23"
//app.use(require("./routes/record"));

// get driver connection
//const dbo = require("./db/conn");
 
basUrl = "https://api.igdb.com/v4/games";
//---------------------------Requests from frontend
app.get('/', async (request, response)  => {
  console.log('in backend \'/\' endpoint')
  
  response.json( await getPopular(response))
})
//------------------------------------
//-------------------------Requests to Web API
//GET GAMES
const getGames = async () => {
  axios({
    url: "https://api.igdb.com/v4/games",
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Client-ID': '0wu4wiwkgznot7oygxyd8nvh3elns4',
        'Authorization': 'Bearer kyzwwkmmpj5mprckfnrp8x1qle4os2',
    },
    data: "fields name, cover, platforms, rating, genres;" //add summary
  })
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.error(err);
    });
} 

//GET POPULAR
const getPopular = async () => {
  const data = await axios({
    url: "https://api.igdb.com/v4/games",
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Client-ID': '0wu4wiwkgznot7oygxyd8nvh3elns4',
        'Authorization': 'Bearer kyzwwkmmpj5mprckfnrp8x1qle4os2',
    },
    data: "fields name, cover.url, platforms.name, rating, genres.name; where rating > 95 & cover != null & platforms != null & genres != null; limit 10;" //add summary
  })
    .then(response => { //popular
      //console.log(response.data)
        return (response.data)

    })
    .catch(err => {
        console.error(err);
    });
    return(data)
} 
//-----------------------------------
//-----------------------------------------------MONGO DB CONNECTION
const mongoose = require('mongoose')

const url =
    `mongodb+srv://gamelibrary:${password}@cluster0.dzvi9lj.mongodb.net/gamelibraryDB?retryWrites=true&w=majority`
mongoose.set('strictQuery',false)
mongoose.connect(url)

const ownedGameSchema = new mongoose.Schema({
  game_id: String,
  completed: Boolean
})

const wishGameSchema = new mongoose.Schema({
    game_id: String,
})

const OwnedGame = mongoose.model('OwnedGame', ownedGameSchema)
const WishGame = mongoose.model('WishGame', wishGameSchema)
//----------------------------------------------------------------

app.listen(port, () => {
  // perform a database connection when server starts
 // dbo.connectToServer(function (err) {
 //   if (err) console.error(err);
 
//  });
  console.log(`Server is running on port: ${port}`);
});