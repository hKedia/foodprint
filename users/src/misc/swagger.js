import logger from './logger';
import SwaggerUi from 'swagger-ui-express';
import SwaggerJsdoc from 'swagger-jsdoc';
import SwaggerValidator from 'swagger-model-validator';

const router = require('express').Router();

const options = {
    swaggerDefinition: {
        info: {
            title: 'backend-stack API',
            version: '1.0.0',
            description: 'The API of the backend-stack',
        },
        host: 'staging-03.coozzy.ch',
        basePath: '/web/backend',
        schemes: [
            'https'
        ]
    },
    apis: ['./src/routes/*.js'],
};
const specs = SwaggerJsdoc(options);
SwaggerValidator(specs);

// === Routes ===
router.get('/json', function (req, res) {
    return res.status(200).json(specs);
});
router.use('/', SwaggerUi.serve);
router.get('/web', SwaggerUi.setup(specs));

function validateRequest(name, model) {
    const validation = specs.validateModel(name, model, false, true);
    if (!validation.valid) {
        let err = validation.GetErrorMessages().join();
        logger.info(err);
        throw new Error(err);
    }
}

function validateResponse(name, model) {
    const validation = specs.validateModel(name, model, false, true);
    if (!validation.valid) {
        let err = validation.GetErrorMessages().join();
        logger.error(err);
        logger.error(model);
        throw new Error('No valid response could be constructed.');
    }
}

module.exports = {
    router,
    validateRequest,
    validateResponse
};
