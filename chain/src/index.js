import '@babel/polyfill';

import envs from './misc/envs'; 
import logger from './misc/logger';
import {metricsInterval, unhandledRejectionCount} from './misc/prometheus';

import httpApp from './http-app';




process.on('unhandledRejection', e => {
    logger.error('Unhandled rejection!', e);
    unhandledRejectionCount.inc();
});



// Start HTTP server
const httpServer = httpApp.listen(envs.HTTP_PORT, (err) => {
    if (err) {
        logger.error(err);
        return;
    }

    logger.info(`HTTP server is listening on ${envs.HTTP_PORT}`);
});


require('./db/index');

// Shutdown handling
const shutdown = () => {
    logger.info('SIGTERM/SIGINT received');

    // Stop polling default metrics
    clearInterval(metricsInterval);

    // Shutting down HTTP server
    httpServer.close((err) => {
        if (err) {
            logger.error('Graceful shutdown', err);
            process.exit(1);
        }

        logger.info('Server stopped');
    });
    
    
};
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
