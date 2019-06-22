exports.up = function (knex) {
    return knex.schema.createTable('refs', function (table) {
        table.integer('id').primary();
        table.integer('batch_id').notNull();
        table.integer('ref_id').notNull();
        table.dateTime('created_at').notNull();
        table.dateTime('updated_at').notNull();
        table.dateTime('deleted_at');
    })
};

exports.down = function (knex) {
    knex.schema.dropTable('refs')
};
