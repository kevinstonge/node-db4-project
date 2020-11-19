const knex = require("knex");
const config = require("../knexfile.js");
const db = knex(config.development);

const find = async () => {
    try {
        return await db('recipes');
    } catch (e) { throw e; }
}

const findById = async (id) => {
    try {
        const [recipe] = await db('recipes').where({ id }).select('name','description');
        const ingredients = await db('recipes')
            .join('recipes-ingredients', 'recipes-ingredients.recipe_id', 'recipes.id')
            .join('ingredients', 'recipes-ingredients.ingredient_id', 'ingredients.id')
            .join('units','units.id','recipes-ingredients.unit_id')
            .where('recipe_id', id)
            .select('ingredients.name', 'recipes-ingredients.quantity', 'units.unit')
        return { ...recipe, ingredients }
    } catch (e) { throw e; }
}

module.exports = {find, findById};