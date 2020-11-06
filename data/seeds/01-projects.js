
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'rpoject1', description: "somasdDedescriptionsdss"},
        { name: 'rpoject2', description: "somdsdaedescriptionsdss"},
         { name: 'rpoject3', description: "somedescriptsdaionsdss"},
      ]);
    });
};
