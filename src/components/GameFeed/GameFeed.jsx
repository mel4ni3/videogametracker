import Game from '../Game/Game'
import axios from 'axios'
import { useState, useEffect } from 'react';
import './gamefeed.css'

const GameFeed = () =>{
    
    const [newGame, setNewGame] = useState([]);

    const fetchPopular = async () =>{
        const res = await axios.get("http://localhost:5000/")
        setNewGame(res.data)
        //console.log(newGame)
    }
    useEffect(()=>{fetchPopular()}, [])
    console.log(newGame[0])
    return(
        <div className='game_feed_container'>
            {newGame.map(game=><div key={game.id}><Game gameData={game}/></div>)}
        </div>
    )
}

export default GameFeed  