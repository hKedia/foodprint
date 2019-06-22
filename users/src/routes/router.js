const router = require('express').Router();

import logger from '../misc/logger';

import asyncHandler from 'express-async-handler';
import Harvest from '../db/model/harvest'

// rec_get = function(batch){
//     batch.filter(batch => batch.product_id > 1000);
// };

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
router.get('/getHarvest', asyncHandler(async (req, res) => {
    logger.debug('Received GET on /getHarvest');
    Harvest.findAll({ where: { did: req.body.did } }).then(harvests => {
        return res.status(200).json(harvests);
    })
    console.log(req)
    
}));
// router.get('/getBatch', asyncHandler(async (req, res) => {
//     logger.debug('Received GET on /getBatch');
//     Batches.findAll({ where: { product_id: req.body.pid } }).then(batches => {
//         return res.status(200).json(batches);
//     })
//     console.log(req)
    
// }));

module.exports = router;

