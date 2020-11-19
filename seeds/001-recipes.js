
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Peanut Butter and Jelly Sandwich', description: 'The classic PB&J - just a few affordable ingredients and a few seconds of effort!'}
      ]);
    });
};
