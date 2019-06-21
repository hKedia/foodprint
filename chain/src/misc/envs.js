/* eslint-disable no-process-env */

module.exports = {
    NODE_ENV: process.env.NODE_ENV,
    LOG_LEVEL: (process.env.LOG_LEVEL || 'debug').toLowerCase(),
    HTTP_PORT: parseInt(process.env.HTTP_PORT) || 3000,
    
    
    DATABASE_URL: process.env.DATABASE_URL || 'mysql://chain:chain@mysql:3306/chain',
    
    
    
    
    
    
};
