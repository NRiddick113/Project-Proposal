import React from 'react';
import { Link } from 'react-router-dom';

function Game({game}) {
    return (
        <div>
            <div className='card'>
        <Link to={`/games/${game.id}`}>
            <img src={game.image} alt={game.title}></img>
        </Link>
            <button>Add to cart</button>
            <p>${game.price}</p>
            <h2>{game.title}</h2>
            </div>
            <div>
      </div>
        </div>
    );
}

export default Game;