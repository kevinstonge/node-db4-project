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
            .join('units', 'units.id', 'recipes-ingredients.unit_id')
            .where('recipe_id', id)
            .select('ingredients.name', 'recipes-ingredients.quantity', 'units.unit');
        const steps = await db('recipes')
            .join('recipes-steps', 'recipes-steps.recipe_id', 'recipes.id')
            .join('steps', 'steps.id', 'recipes-steps.step_id')
            .where('recipe_id', id)
            .orderBy('recipes-steps.step_number')
            .select('recipes-steps.step_number', 'steps.step');
        return { ...recipe, ingredients, steps }
    } catch (e) { throw e; }
}

module.exports = {find, findById};