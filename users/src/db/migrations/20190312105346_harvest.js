exports.up = function (knex) {
    return knex.schema.createTable('harvests', function (table) {
        table.integer('id').primary();
        table.date('date').notNull();
        table.string('prod_id',255).notNull();
        table.boolean('waste');
        table.dateTime('created_at').notNull();
        table.dateTime('updated_at').notNull();
        table.dateTime('deleted_at');
    })
};

exports.down = function (knex) {
    knex.schema.dropTable('harvests')
};
