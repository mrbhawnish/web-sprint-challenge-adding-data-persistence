const express = require('express');
const router = express.Router();
const TasksDb = require('./tasks-model.js');


router.get('/', async (req, res) => {
    const resources = await TasksDb.getAll()
    try {
       res.json(resources)
    } catch (error){
        res.status(500).json({errorMessage: error.message})
    }

});

router.post('/', async (req, res) => {
    const newTask = {
        description: req.body.description,
        project_id: req.body.project_id
    }
    try{
    if(!newTask.description || !newTask.project_id) {
        res.status(400).json(
            { message: "Description or id of an existing project(project_id) is missing"}
            )
    } else { 
       const task = await TasksDb.create(newTask)
        res.json(task)
    }
     }catch(err) {
         res.status(500).json({errorMessage: err.message})
     }
})

module.exports = router;
