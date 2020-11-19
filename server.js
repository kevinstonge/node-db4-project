const express = require("express");
const cors = require("cors");
const server = express();
const recipesRouter = require('./recipes/recipeRouter.js');
server.use(express.json());
server.use(cors());
server.use('/api/recipes', recipesRouter);
server.get("/", (req, res) => { res.status(200).json({ message: "server online!" }) });

module.exports = server;