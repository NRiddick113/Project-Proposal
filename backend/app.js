// IMPORTS
const cors = require("cors");
const express = require("express");
const gamesController = require("./controllers/gameController.js");


// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
// Games ROUTES
app.use("/games", gamesController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Game Store App");
});



// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;