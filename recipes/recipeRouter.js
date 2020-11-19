const express = require('express');
const router = express.Router();
const recipeModel = require('./recipeModel.js');
router.get('/', async (req, res) => {
    try {
        const recipes = await recipeModel.find();
        res.status(200).json({recipes})
    } catch (error) { 
        res.status(500).json({error})
    }
    res.status(200).json({message: "get recipes!"})
})
module.exports = router;
