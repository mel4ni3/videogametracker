const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

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

const ownedGame = new OwnedGame({
  game_id: 'owned game test',
  completed: true,
})

const wishGame = new WishGame({
    content: 'test',
    important: true,
  })

ownedGame.save().then(result => {
  console.log('game saved!')
  mongoose.connection.close()
})