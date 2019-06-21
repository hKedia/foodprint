exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
        table.integer('id').primary();
        table.boolean('bio');
        table.string('name',255).notNull();
        table.string('blockchain_id',255).notNull();
        table.string('digital_cert',255);
        table.dateTime('created_at').notNull();
        table.dateTime('updated_at').notNull();
        table.dateTime('deleted_at');
    })
};

exports.down = function (knex) {
    knex.schema.dropTable('users')
};
