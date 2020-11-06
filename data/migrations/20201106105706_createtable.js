exports.up = function (knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments()
            tbl.string('name', 24).notNullable()
            tbl.string('description', 128).notNullable()
            tbl.boolean('completed').defaultTo(0)
        })
        .createTable('resources', tbl => {
            tbl.increments()
            tbl.string('name', 24).notNullable()
            tbl.string('description', 128).notNullable()
            tbl.unique('name')
        })
        .createTable("tasks", table => {
            table.increments();
            table.string('description', 256).notNullable()
            table.string('notes', 256)
            table.boolean('completed').defaultTo(0)
            
            table.integer("project_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("projects")
                .onUpdate("CASCADE")
                .onDelete("RESTRICT");
            
            table.integer("resources_id")
                .unsigned()
                .references("id")
                .inTable("resources")
                .onUpdate("CASCADE")
                .onDelete("RESTRICT")
        })
};

exports.down = function (knex, Promise) {
    // drop in the opposite order
    return knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};