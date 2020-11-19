exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('name',128).notNullable();
        tbl.string('description',1024);
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('recipes');
};
