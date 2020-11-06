const express = require('express');
const router = express.Router();
const ResourceDb = require('./resources-model');


router.get('/', async (req, res) => {
    const resources = await ResourceDb.getAll()
    try {
       res.json(resources)
    } catch (error){
        res.status(500).json({errorMessage: error.message})
    }

});

router.post('/', async (req, res) => {
    const newResource = {
        name: req.body.name,
        description: req.body.description
    }
    try{
    if(!newResource.name ) {
        res.status(400).json({ message: "name is missing from the body"})
    } else { 
       const resource = await ResourceDb.create(newResource)
        res.json(resource)
    }
     }catch(err) {
         res.status(500).json({errorMessage: err.message})
     }
})

module.exports = router;
