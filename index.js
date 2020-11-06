const express = require('express');
const projectsRouter = require('./projects/projects-router.js');
const resourcesRouter = require('./resources/resources-router.js');
const tasksRouter = require('./tasks/tasks-router.js');

const PORT = process.env.PORT || 5000;
const server = express();

server.use(express.json());
server.use("/api/projects", projectsRouter)
server.use("/api/resources", resourcesRouter)
server.use("/api/tasks", tasksRouter)



server.listen(PORT, () => {
    console.log('API IS UP AND RUNNING AT ' + PORT)
})


