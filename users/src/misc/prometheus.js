const Prometheus = require('prom-client');


// Collect default metrics
const metricsInterval = Prometheus.collectDefaultMetrics();
module.exports.metricsInterval = metricsInterval;

const unhandledRejectionCount = new Prometheus.Counter({
    name: 'unhandled_rejections',
    help: 'For each unhandled promise rejection the counter is increased'
});
module.exports.unhandledRejectionCount = unhandledRejectionCount;





// Create HTTP histogram for request duration
const httpRequestDurationMilliseconds = new Prometheus.Histogram({
    name: 'http_request_duration_ms',
    help: 'Duration of HTTP requests in ms',
    labelNames: ['method', 'path', 'status_code'],
    buckets: [50, 100, 250, 500, 1000]
});
const router = require('express').Router();

// Add express middleware to capture request duration
router.use(async function (req, res, next) {
    res.locals.startEpoch = Date.now();
    res.once('finish', () => {
        const responseTime = Date.now() - res.locals.startEpoch;

        httpRequestDurationMilliseconds
            .labels(req.method, req?.route?.path || req.path, res.statusCode)
            .observe(responseTime);
    });

    return next();
});

// Expose /metrics endpoint
router.get('/metrics', async function (req, res) {
    res.set('Content-Type', Prometheus.register.contentType);
    res.end(Prometheus.register.metrics());
});

module.exports.expressMiddleware = router;

