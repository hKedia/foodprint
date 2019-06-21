import express from 'express';

import {expressMiddleware as prometheusRouter} from './misc/prometheus';
import compression from 'compression';
import bodyParser from 'body-parser';
import contentTypeChecker from './misc/check-content-type';
import swagger from './misc/swagger';
import {httpErrorHandler} from './misc/error-utils';

import router from './routes/router';

const app = express();

// === Prometheus ===
app.use(prometheusRouter);

// === Misc
app.use(compression());
app.use(contentTypeChecker);
app.use(bodyParser.json());

// === Routes ===
app.use('/api-docs', swagger.router);
app.use('/', router);
app.use(httpErrorHandler);

module.exports = app;
