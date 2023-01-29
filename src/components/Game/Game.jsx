import './game.css'

const Game = ({game}) =>{
    //image = game.img
    //name = game.name
    //completed game.completed
    //genre = game.genre
    //rating? = game.rating?
    
    return(
        <div href={''/*`${GameInfo}`*/} className="game_container">
            <div className="game_body">
                <div className="game_top">
                    <img className="game_pic" src="https://m.media-amazon.com/images/M/MV5BYzFhYWNjYjctOGQ5Yi00MDU5LWFjMGQtY2IyOWZkYjJjYTRmXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg" alt=""></img>
                    <div className='top_text_box'>
                        <span className="game_title_text">Test Game</span>
                        <span className="game_info_text">Genres:{}</span>
                        <span className="game_info_text">Platforms: {}</span>
                    </div>
                </div>
                <div className='game_bottom'>
                    <div>
                        {/* Add rating and icons?*/}
                        <img className='more_icon' src="https://cdn-icons-png.flaticon.com/512/152/152529.png" alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Game