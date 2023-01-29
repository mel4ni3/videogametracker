import './game.css'

const Game = ({gameData}) =>{
    //image = game.img
    //name = game.name
    //completed game.completed
    //genre = game.genre
    //rating? = game.rating?

    return(
        <div href={''/*`${GameInfo}`*/} className="game_container">
            <div onClick={()=>console.log(`clicked ${gameData.name}`)} className="game_body">
                <div className="game_top">
                    <img className="game_pic" src={gameData.cover.url} alt=""></img>
                    <div className='top_text_box'>
                        <span className="game_title_text">{gameData.name}</span>
                        <span className="game_info_text">Genres:{gameData.genres.map((gr, index)  =>{return(<span key={gr.id}> {(index ? ', ': '') + gr.name}</span>)})}</span>
                        <span className="game_info_text">Platforms:{gameData.platforms.map((gr, index)  =>{return(<span key={gr.id}> {(index ? ', ': '')+gr.name} </span>)})}</span>
                        <span className="game_rating_text">Rating: {Math.floor(gameData.rating)}%</span>
                    </div>
                </div>
                <div className='game_bottom'>
                    <div>
                        {/* Add rating and icons?*/}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Game