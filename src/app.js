import bodyParser from 'body-parser';
import express from 'express';
import { rootRouter } from './routes/index.js';
import MonitorContainers from './hostedServices/temperature.health.checker.job.js';

export const createApp = () => {
    // Create Express App
    const app = express();

    // Add middleware to parse the POST data of the body
    app.use(bodyParser.urlencoded({ extended: true }));

    // Add middleware to parse application/json
    app.use(bodyParser.json());

    // Add routes
    app.use(rootRouter);

    // Add application error handler
    app.use(appErrorHandler);

    // Run Monitor Schedule
    MonitorContainers();

    return app;
};

const appErrorHandler = (err, _, res, next) => {
};
