
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('units').del()
    .then(function () {
      // Inserts seed entries
      return knex('units').insert([
        { id: 1, unit: 'tbsp' },
        { id: 2, unit: 'slices' }
      ]);
    });
};
