
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {  description: "somedescription1 ", notes: "some additional notes here", project_id:1},
        {  description: "somedescription2 ", notes: "some additional notes here", project_id:2},
        {  description: "somedescription3 ", notes: "some adsdditional notes here", project_id:3}
      ]);
    });
};