const router = require('express').Router();

import logger from '../misc/logger';

import asyncHandler from 'express-async-handler';

import Ref from '../db/model/ref'
import Batch from '../db/model/batch'
import Product from '../db/model/product'

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
    Ref.findAll({ where: { batch_id: req.body.id } }).then(async (refs) => {
        return res.status(200).json(await search(refs,req.body.id));
    })
    logger.debug('Received GET on /');
}));

 async function search(refs,id) {
    if (refs.length == 0) {
        const batch = await Batch.findOne({ where: { id: id }});
        const product = await Product.findOne({ where: { id: batch.dataValues.productId }});
        return {"batch":batch.dataValues, "product":product.dataValues.name}
    } else {
        const fullBatch = await Batch.findOne({ where: { id: id }}).then(async (batch) => {
            var subBatches = [];
            var subBatch = {}
            var i = 0;
            for (i=0; i<refs.length; i++){
                await Ref.findAll({ where: { batch_id: refs[i].dataValues.refId } }).then(async (refs2) => {
                    subBatch = await search(refs2,refs[i].dataValues.refId)
                    subBatches.push(subBatch);
                })
            }
            const product = await Product.findOne({ where: { id: batch.dataValues.productId }});
            return {
                "batch":batch.dataValues,
                "product":product.dataValues.name,
                "subBatches":subBatches
            };
        });
        return fullBatch;
    }
}

module.exports = router;

