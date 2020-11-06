const db = require('../data/db-config.js');


module.exports = {
    getAll,
    getById,
    create,

};


function getAll() {
   return db('projects')
}

function getById(id) {
    return db('projects').where({id})
 }

function create(project){
    return db('projects').insert(project)
    .then(ids => {
        return getById(ids[0])
    })
}





