import logger from './logger';

/* eslint-disable no-unused-vars */
module.exports.httpErrorHandler = (err, req, res, next) => {
    logger.error(err.message || err.details, err);

    res.setHeader('Content-Type', 'application/json');

    if (err.response) {
        return res.status(err.response.status).json({
            message: err.message
        });
    }

    // Handle gRPC client errors
    if (err.code && err.details) {
        switch (err.code) {
            case 3:
                err.code = 400;
                break;
            case 4:
                err.code = 504;
                break;
            case 5:
                err.code = 404;
                break;
            case 6:
                err.code = 409;
                break;
            case 7:
                err.code = 403;
                break;
        }
        if (err.code <= 16) {
            err.code = 500;
        }

        return res.status(err.code).json({
            message: err.details
        });
    }

    return res.status(500).json({
        message: err.message
    });
};


