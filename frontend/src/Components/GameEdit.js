import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function GameEdit() {
    let { id } = useParams();
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

const updateGame = (updateGame) => {
    axios
      .put(`${API}/games/${id}`, updateGame)
      .then(
        () => {
          navigate(`/games/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setGame({ ...game, [event.target.id]: event.target.value });
  };

  
  useEffect(() => {
      axios
      .get(`${API}/games/${id}`)
      .then(
          (response) => setGame(response.data),
          (error) => navigate(`/not-found`)
          );
        }, [id, navigate]);
        
        const handleSubmit = (event) => {
          event.preventDefault();
          updateGame(game);
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
                required
                />
                <label htmlFor="price">Price:</label>
                <input
                id="price"
                value={game.price}
                type="number"
                onChange={handleTextChange}
                placeholder="price"
                />
                 <label htmlFor="description">Description:</label>
                <textarea
                id="description"
                cols={'50'}
                rows='20'
                value={game.description}
                type="text"
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
                 <label htmlFor="platform">Platform:</label>
                <input
                id="platform"
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
                placeholder="image"
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
        <Link to={`/games/${id}`}>
        <button>Back</button>
      </Link>
        </div>
    );
}

export default GameEdit;