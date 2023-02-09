import { Link } from "react-router-dom";
import React from "react";

function NavBar() {
    return (
        <div className="NavBar">
            <h1>
                <Link to='/'>Gaming Store</Link>
            </h1>
            <h1>
                <Link to='/games'>Browse Store</Link>
            </h1>
            <h1>
                <Link to='/games/new'>Add New Game</Link>
            </h1>
            <h1>
                <Link to={<Cart />}>Cart</Link>
            </h1>
        </div>
    );
}

export default NavBar;
