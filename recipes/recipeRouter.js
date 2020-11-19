const express = require('express');
const router = express.Router();
const recipeModel = require('./recipeModel.js');
router.get('/', async (req, res) => {
    try {
        const recipes = await recipeModel.find();
        res.status(200).json({ recipes })
    } catch (error) {
        res.status(500).json({ error })
    }
});
router.get('/:id', async (req, res) => {
    try {
        const recipe = await recipeModel.findById(req.params.id);
        res.status(200).json({ recipe });
    } catch (error) {
        res.status(500).json({ error })
    }
})

router.get('/:id/shoppingList', async (req, res) => {
    try {
        const shoppingList = await recipeModel.getShopppingList(req.params.id);
        res.status(200).json({shoppingList})
    } catch (error) {
        res.status(500).json({ error })
    }
})

router.get('/:id/instructions', async (req, res) => {
    try {
        const instructions = await recipeModel.getInstructions(req.params.id);
        res.status(200).json({ instructions });
    } catch (error) {
        res.status(500).json({ error })
    }
})
module.exports = router;
