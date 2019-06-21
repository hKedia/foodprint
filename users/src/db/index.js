import Sequelize from 'sequelize';
import Knex from 'knex';
import path from 'path';

import envs from '../misc/envs';
import logger from '../misc/logger';

const connection = new Sequelize(envs.DATABASE_URL, {
    operatorsAliases: Sequelize.Op,
    logging: (msg) => logger.debug(msg)
});

connection.authenticate()
    .then(() => {
        logger.info('Successfully connected to database');
    }).catch(err => {
        logger.error('Failed to connect to database', err);
        process.exit(-1);
    });
module.exports = connection;

// Execute migrations
const knex = Knex({
    client: 'mysql2',
    connection: envs.DATABASE_URL,
    migrations: {
        directory: path.join(__dirname + '/migrations'),
        tableName: 'knex_migrations'
    },
    log: {
        error(message) {
            logger.error(message);
        },
        warn(message) {
            logger.warn(message);
        },
        deprecate(message) {
            logger.info(message);
        },
        debug(message) {
            logger.debug(message);
        },
    }
});
knex.migrate.latest();

const requestModel = require('./model/users');

module.exports.Request = requestModel;
