import { useState, useEffect } from "react";
import Game from "./Game";
import axios from "axios";

const API = process.env.REACT_APP_API_URL

function Games() {
    const [games, setGames] = useState([])
    const [neurodiversity, setNeurodiversity] = useState('all')
    const [genre, setGenre] = useState([])
  
useEffect(() => {
    axios
    .get(`${API}/games`)
    .then((res) =>{
        setGames(res.data)
    })
    .catch(err => console.error())
}, [])

const filterGameList = neurodiversity !== 'all' ? games.filter(game => game.autisic.toString() === neurodiversity) : games

function filterByGenre() {
    
}


return (
        <div className="Games">
            <aside className="fliter">
                <h2>Filter by Genres</h2>
                <button>RPG</button>
                <button>Shooter</button>
                <button>Adventure</button>

            </aside>
            <main className="cards">
            {filterGameList.map((game) => {
        return (
        <Game key={game.id} game={game}/>
            )
        })}
            </main>
            <aside className="Autism">Autism's Play
            <select name='autism' id='autism' 
            onChange={(e)=> setNeurodiversity(e.target.value)}
            >
            <option value='all' default>All Games</option>
            <option value='false'>Neurotypical</option>
            <option value='true'>Neurodivergent</option>
            </select>
            </aside>
        </div>
    );
}

export default Games;