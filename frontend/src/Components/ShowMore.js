import React from 'react';

function ShowMore({game}) {
    return (
        <div>
            <p>{new Date(game.release).toLocaleDateString('en-us', {year:"numeric", month:"long", day:"numeric"})}</p>
            <p>{game.platforms}</p>
            <p>{game.genre}</p>
            <p>{game.developers}</p>
            <p>{game.rating}</p>
        </div>
    );
}

export default ShowMore;