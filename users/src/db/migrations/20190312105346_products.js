exports.up = function (knex) {
    return knex.schema.createTable('products', function (table) {
        table.integer('id').primary();
        table.integer('prod_id').notNull();
        table.string('name',255).notNull();
        table.dateTime('created_at').notNull();
        table.dateTime('updated_at').notNull();
        table.dateTime('deleted_at');
    })
};

exports.down = function (knex) {
    knex.schema.dropTable('products')
};
