import { useState, useEffect } from "react";
import Game from "./Game";
import axios from "axios";

const API = process.env.REACT_APP_API_URL

function Games() {
    const [games, setGames] = useState([])

    useEffect(() => {
        axios
        .get(`${API}/games`)
        .then((res) =>{
            setGames(res.data)
        })
        .catch(err => console.error())
    }, [])
 console.log(games)
    return (
        <div className="Games">
            <aside className="fliter">
                <h3>Filter</h3>
                <h3>Genres</h3>
            </aside>
            <main className="cards">
            {games.map((game) => {
        return (
        <Game key={game.id} game={game}/>
            )
        })}
            </main>
            <aside className="Autism">Autism's Play</aside>
        </div>
    );
}

export default Games;