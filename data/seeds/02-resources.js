
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { name: 'tool1', description: "somedescription2 "},
        { name: 'tool2', description: "somedescription3 "},
        { name: 'tool3', description: "somedescription4 "},
      ]);
    });
};