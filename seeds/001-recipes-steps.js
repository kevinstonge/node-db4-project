
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes-steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes-steps').insert([
        {id: 1, step_id: 1, recipe_id: 1, step_number: 1},
        { id: 2, step_id: 2, recipe_id: 1, step_number: 2 },
        { id: 3, step_id: 3, recipe_id: 1, step_number: 3 },
        {id: 4, step_id: 4, recipe_id: 1, step_number: 4},
      ]);
    });
};
