
exports.up = function(knex) {
    return knex.schema
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('name', 128).notNullable();
        })
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('name', 256).notNullable();
            tbl.string('description', 2048);
        })
        .createTable('steps', tbl => {
            tbl.increments();
            tbl.string('step', 256).notNullable();
        })
        .createTable('units', tbl => {
            tbl.increments();
            tbl.string('unit').notNullable();
        })
        .createTable('recipes-ingredients', tbl => {
            tbl.increments();
            tbl.integer('recipe_id').references('id').inTable('recipes').notNullable().onDelete('cascade');
            tbl.integer('ingredient_id').references('id').inTable('ingredients').notNullable().onDelete('cascade');
            tbl.float('quantity').notNullable();
            tbl.integer('unit_id').references('id').inTable('units').onDelete('cascade');
        })
        .createTable('recipes-steps', tbl => {
            tbl.increments();
            tbl.integer('step_id').references('id').inTable('steps').notNullable().onDelete('cascade');
            tbl.integer('recipe_id').references('id').inTable('recipes').notNullable().onDelete('cascade');
            tbl.integer('step_number').notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipes-steps')
        .dropTableIfExists('recipes-ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
        .dropTableIfExists('steps')
        .dropTableIfExists('units');
};
