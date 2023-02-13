import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ShowMore from './ShowMore';

const API = process.env.REACT_APP_API_URL;

function GameDetail() {
    const [game, setGame] = useState([]);
    const [showDetail, setShowDetail] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  function toggleStudentDetail() {
    setShowDetail(!showDetail);
  }
  
  useEffect(() => {
    axios
    .get(`${API}/games/${id}`)
    .then((res) =>{
      console.log(id)
      setGame(res.data)
    })
    .catch( (error) => {
     console.error(error); 
    })
  },[id])
  
  const handleDelete = () => {
    axios
      .delete(`${API}/games/${id}`)
      .then(() => {
        navigate(`/games`);
      })
      .catch((e) => console.error(e));
  };
 console.log(game)
    return (
        <div className="GameDetail">
          <Link to={`/games`}>
            <button>Back</button>
          </Link>
            <h1>{game.title}</h1>
            <h6>About</h6>
            <p>{game.description}</p>
            <img src={game.image} alt={game.title}></img>
            <div className="extraDetails">
            <button onClick={()=>{toggleStudentDetail()}}>{!showDetail ? "Show More..." : "Show Less..."}</button>
            {showDetail ? (<ShowMore game={game}/> ): null}
            </div>
            <p>{game.price}</p>
            <button>Add to Cart</button>
            <button>Add to favorite</button>
        <br></br>
            <div className="game">
        </div>
        <div>
          <Link to={`/games/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
        </div>
    );
}

export default GameDetail;