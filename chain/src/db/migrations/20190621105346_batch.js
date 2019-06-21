exports.up = function (knex) {
    return knex.schema.createTable('logs', function (table) {
        table.integer('id').primary();
        table.integer('product_id').notNull();
        table.boolean('organic').notNull();
        table.integer('price').notNull();
        table.integer('weight').notNull();
        table.text('transaction_id','medium');
        table.integer('owner_id').notNull();
        table.text('type','medium');
        table.dateTime('created_at').notNull();
        table.dateTime('updated_at').notNull();
        table.dateTime('deleted_at');
    })
};

exports.down = function (knex) {
    knex.schema.dropTable('logs')
};