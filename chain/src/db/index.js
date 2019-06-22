import Sequelize from 'sequelize';

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

const batchModel = require('./model/batch');
const refModel = require('./model/batch');
const productModel = require('./model/product');

module.exports.Batch = batchModel;
module.exports.Ref = refModel;
module.exports.Product = productModel;


