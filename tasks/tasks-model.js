const db = require("../data/db-config.js");

module.exports = {
  getAll,

  getById,

  create,
};

function getAll() {
  return db("tasks as t")
    .join("projects as p", "t.project_id", "p.id")
    .select(
      "t.id",
      "t.project_id",
      "p.name",
      "p.description as project_description",
      "t.description as task_description",
      "t.is_completed"
    );
}

function getById(id) {
  return db("tasks").where({ id });
}

function create(task) {
  return db("tasks")
    .insert(task)
    .then((ids) => {
      return getById([ids]);
    });
}
