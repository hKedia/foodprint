// DO NOT EDIT. This file is just used for generating a migration file while developing.

module.exports = {

    client: 'mysql',
    connection: {
        host: 'mysql',
        port: '3306',
        database: 'bootstrap',
        user: 'bootstrap',
        password: 'bootstrap',
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    }

};

