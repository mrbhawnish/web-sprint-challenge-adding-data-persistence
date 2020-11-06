const express = require("express");
const router = express.Router();
const Projects = require("./projects-model");

router.get("/", async (req, res) => {
  const projects = await Projects.getAll();
  try {
    res.json(projects);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});

router.post("/", async (req, res) => {
  const newProject = {
    name: req.body.name,
    description: req.body.description,
    is_completed: req.body.is_completed,
  };
  try {
    if (!newProject.name) {
      res.status(400).json({ message: "name is missing from the body" });
    } else {
      const project = await Projects.create(newProject);
      res.json(project);
    }
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});

module.exports = router;
