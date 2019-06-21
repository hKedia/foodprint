import envs from './envs';
import winston from 'winston';

const logger = winston.createLogger({
    level: envs.LOG_LEVEL,
    format: winston.format.combine(
        winston.format((info) => {
            if (info.level === 'warn') {
                info.severity = 'warning';
            } else {
                info.severity = info.level;
            }
            delete info.level;

            return info;
        })(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console
    ]
});

module.exports = logger;
