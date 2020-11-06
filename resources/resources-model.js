const db = require('../data/db-config.js');


module.exports = {
    getAll,
    getById,
    create,

};


function getAll() {
   return db('resources')
}

function getById(id) {
    return db('resources').where({id})
 }

function create(resource){
    return db('resources').insert(resource)
    .then(ids => {
        return getById(ids[0])
    })
}





