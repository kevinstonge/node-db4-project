const knex = require("knex");
const config = require("../knexfile.js");
const db = knex(config.development);

const find = async () => {
    try {
        return await db('recipes');
    } catch (e) { throw e; }
}

module.exports = {find};