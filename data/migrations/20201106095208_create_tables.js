
exports.up = function(knex) {
    return knex.schema
         .createTable('projects', tbl => {
        tbl.increments()
        tbl.text('name', 255).notNullable()
        tbl.text('description')
        tbl.boolean('is_completed').notNullable().defaultTo(false)
       })
        .createTable('resources', tbl => {
            tbl.increments()
            tbl.text('name').notNullable()
            tbl.text('description')
        })
        .createTable('tasks', tbl => {
            tbl.increments()
            tbl.text('description').notNullable()
            tbl.text('notes')
            tbl.boolean('is_completed').defaultTo(false)
            tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        })
        .createTable('projects_resources', tbl => {
            tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
            tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
            // the combination of the two keys becomes our primary key
            // will enforce unique combinations of ids
            tbl.primary(['project_id', 'resource_id'])
        })
       
};

exports.down = function(knex) {
  
};
