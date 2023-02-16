const db = require("../db/dbConfig");

const getAllGames = async () => {
  try {
    const allGames = await db.any("SELECT * FROM games");
    return allGames;
  } catch (error) {
    return error;
  }
};

const getAusticFriendlyGames = async (autisic) => {
  try {
    const getAusticGames = await db.any("SELECT * FROM games WHERE id=$1", autisic );
    return getAusticGames;  
  } catch (error) {
    return error;
  }
}

const getGame = async (id) => {
  try {
    const oneGame = await db.one("SELECT * FROM games WHERE id=$1", id);
    return oneGame;
  } catch (error) {
    return error;
  }
};

// CREATE
const createGame = async (game) => {
  try {
    const newGame = await db.one(
      "INSERT INTO games (title, price, description, release, platforms, developers,genres, image, rating) VALUES($1, $2, $3, $4,$5,$6,$7,$8,$9) RETURNING *",
      [game.title, game.price, game.description, game.release, game.platforms, game.developers,game.genres, game.image, game.rating]
    );
    return newGame;
  } catch (error) {
    return error;
  }
};


// DELETE
const deleteGame = async (id) => {
  try {
    const deletedGame = await db.one('DELETE FROM games WHERE id=$1 RETURNING *', id)
    return deletedGame
  } catch (error) {
    return error
  }
}


// UPDATE
const updateGame = async (id, game) => {
  try {
    const updatedGame = await db.one("UPDATE Games SET title=$1, price=$2,description=$3, release=$4, platforms=$5, developers=$6,genres=$7, image=$8, rating=$9 WHERE id=$10 RETURNING *", [game.title, game.price, game.description, game.release, game.platforms, game.developers,game.genres, game.image, game.rating, id])
    return updatedGame
  } catch (error) {
    return error
  }
}


module.exports = { getAllGames, getGame, createGame, deleteGame, updateGame, getAusticFriendlyGames };