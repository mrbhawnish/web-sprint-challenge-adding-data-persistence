
exports.up = async function(knex) {
    await knex.schema
        .createTable('projects', tbl => {
        tbl.increments()
        tbl.string('name').notNullable()
        tbl.string('description')
        tbl.boolean('is_completed').defaultTo(false).notNullable()
       })
        .createTable('resources', tbl => {
            tbl.increments()
            tbl.string('name').notNullable()
            tbl.string('description')
        })
        .createTable('tasks', tbl => {
            tbl.increments()
            tbl.string('description').notNullable()
            tbl.string('notes')
            tbl.boolean('is_completed').defaultTo(false)
            tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('RESTRICT')
        })
        .createTable('projects_resources', tbl => {
            tbl.increments()
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
            .inTable('resources')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
            // the combination of the two keys becomes our primary key
            // will enforce unique combinations of ids
            // tbl.primary(['project_id', 'resource_id'])
        })
       
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('projects_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
