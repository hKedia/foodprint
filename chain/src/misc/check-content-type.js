import logger from '../misc/logger';

module.exports = function (req, res, next) {
    let contentType = req.get('content-type');

    // Check Content-Type for /web POST requests
    if ((req.method === 'POST' || req.method === 'UPDATE')
        && req.path.startsWith('/web')
        && contentType && !contentType.startsWith('application/json')) {

        let error = `Content-Type has to be 'application/json' but is: ${contentType}`;
        logger.info(error);

        return res.status(415).json({
            message: error
        });
    }

    // Simply pass it on if no /web route
    next();
};
