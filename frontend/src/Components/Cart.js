import { useState, useEffect } from "react";

function Cart() {
    const [games, setGames] = useState([])
    const [cart, setCart]= useState([])

    function updateCart(games) {
        if(cart.includes(games)){
          alert('You have already added this games to the cart') 
          return;
        }
        setCart([...cart, games ])
      }
      
      function removeGames(gamesID) {
        const filteredgamesArray = cart.filter((games) => games.id !== gamesID);
        setCart(filteredgamesArray);
      }
      
      function resetCart() {
        setCart([]);
      }

    // useEffect(() => {
    //     axios
    //     .get(`${API}/games`)
    //     .then((res) =>{
    //         setGames(res.data)
    //     })
    //     .catch(err => console.error())
    // }, [])
    return (
        <div className="Cart">
            {
             
            }
        </div>
    );
}

export default Cart;