
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { id: 1, step: 'spread peanut butter on bread' },
        { id: 2, step: 'spread jelly on bread' },
        { id: 3, step: 'put bread together' },
        { id: 4, step: 'enjoy!' }
      ]);
    });
};
