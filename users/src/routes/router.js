const router = require('express').Router();

import logger from '../misc/logger';

import asyncHandler from 'express-async-handler';
import Harvest from '../db/model/harvest'

/**
 * @swagger
 * /:
 *  get:
 *      description: Swagger example description
 *      tags:
 *          - backend
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: Status response
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/definitions/Status'
 *          415:
 *              description: If wrong content type
 *              schema:
 *                  $ref: '#/definitions/ErrorResponse'
 *          500:
 *              description: If something failed
 *              schema:
 *                  $ref: '#/definitions/ErrorResponse'
 */
router.get('/', asyncHandler(async (req, res) => {
    logger.debug('Received GET on /');
    return res.status(200).json(harvests);
    }))

router.get('/users/getHarvest', asyncHandler(async (req, res) => {
    logger.debug('Received GET on /getHarvest');
    Harvest.findAll({ where: { did: req.query.did } }).then(harvests => {
        return res.status(200).json(harvests);
    })
    console.log(req)
    
}));

module.exports = router;

