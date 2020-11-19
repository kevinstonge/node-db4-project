
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'bread'},
        {id: 2, name: 'peanut butter'},
        {id: 3, name: 'jelly'}
      ]);
    });
};
