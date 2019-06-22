exports.up = function (knex) {
    return knex.raw('ALTER TABLE batches MODIFY COLUMN owner_id string;')
};

exports.down = function (knex) {
    knex.schema.dropTable('batches')
};