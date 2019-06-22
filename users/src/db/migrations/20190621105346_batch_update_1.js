exports.up = function (knex) {
    return knex.raw('ALTER TABLE batches MODIFY COLUMN weight double;')
};

exports.down = function (knex) {
    knex.schema.dropTable('batches')
};