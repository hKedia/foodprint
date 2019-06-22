const router = require('express').Router();

import logger from '../misc/logger';

import asyncHandler from 'express-async-handler';

import Ref from '../db/model/ref'
import Batch from '../db/model/batch'

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
router.get('/getChain', asyncHandler(async (req, res) => {
    Ref.findAll({ where: { batch_id: req.body.id } }).then(refs => {
        return res.status(200).json(search(refs,req.body.id));
    })
    logger.debug('Received GET on /');

}));

function search(refs,id) {
    if (refs.length == 0) {
        Batch.findOne({ where: { id: id } }).then(batch => {
            return batch;
        })
    } else {
        Batch.findOne({ where: { id: id } }).then(batch => {
            console.log(batch)
            var subBatches = [];
            for (i=0; i<refs.length; i++){
                Ref.findAll({ where: { batch_id: refs[i].id } }).then(refs2 => {
                    subBatches.push(search(refs2,refs[i].id))
                })
            }
            return {
                "batch":batch,
                "subBatches":subBatches
            };
        })
    }
}

module.exports = router;

