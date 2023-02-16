import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function GameNew() {
    let navigate = useNavigate();

    const [game, setGame] = useState({
        title: '', 
        price: 0, 
        description: '', 
        release: '', 
        platforms: '', 
        developers: '',
        genres: '', 
        image: '', 
        rating: 0,
    });

    const addGame = (newGame) => {
        axios
          .post(`${API}/games`, newGame)
          .then(
            () => {
              navigate(`/games`);
            },
            (error) => console.error(error)
          )
          .catch((c) => console.warn("catch", c));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        addGame(game);
      };
    
      const handleTextChange = (event) => {
        setGame({ ...game, [event.target.id]: event.target.value });
      };

    return (
        <div id="form-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                id="title"
                value={game.title}
                type="text"
                onChange={handleTextChange}
                placeholder="Title"
                // required
                />
                <label htmlFor="price">Price:</label>
                <input
                id="price"
                value={game.price}
                type="text"
                onChange={handleTextChange}
                placeholder="price"
                />
                 <label htmlFor="description">Description:</label>
                <input
                id="description"
                value={game.description}
                type="textarea"
                onChange={handleTextChange}
                placeholder="description"
                />
                 <label htmlFor="release">Release:</label>
                <input
                id="release"
                value={game.release}
                type="text"
                onChange={handleTextChange}
                placeholder="June 08,2019"
                />
                 <label htmlFor="platforms">Platform:</label>
                <input
                id="platforms"
                name="platforms"
                value={game.platforms}
                type="text"
                onChange={handleTextChange}
                placeholder="Playstation,xbox, nintendo"
                />
                 <label htmlFor="developers">Developers:</label>
                <input
                id="developers"
                value={game.developers}
                type="text"
                onChange={handleTextChange}
                placeholder="developers"
                />
                 <label htmlFor="genres">Genres:</label>
                <input
                id="genres"
                value={game.genres}
                type="text"
                onChange={handleTextChange}
                placeholder="genres"
                required
                />
                 <label htmlFor="image">Image:</label>
                <input
                id="image"
                value={game.image}
                type="text"
                onChange={handleTextChange}
                pattern="http[s]*://.+"
                placeholder="http://"
                />
                 <label htmlFor="rating">Rating:</label>
                 <input
                 id="rating"
                 name="rating"
                 type="number"
                 min="1"
                 max="5"
                 step="1"
                value={game.rating}
                onChange={handleTextChange}
                />
                 <br />
        <input type="submit" />    
        </form>
        </div>
    );
}

export default GameNew;