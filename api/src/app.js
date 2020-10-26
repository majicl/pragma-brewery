import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import { rootRouter } from './routes/index.js';
import MonitorContainers from './hostedServices/temperature.health.checker.job.js';
import GenerateDocuments from './swagger.js';
import { AppError } from './utils/index.js';

export const createApp = () => {
    // Create Express App
    const app = express();

    // Add middleware to parse the POST data of the body
    app.use(bodyParser.urlencoded({ extended: true }));

    // Add middleware to parse application/json
    app.use(bodyParser.json());
    
    // Add Cors
    app.use(cors());

    // Add routes
    app.use(rootRouter);


    // Add application error handler
    app.use(appErrorHandler);

    // Run Monitor Schedule
    MonitorContainers();
    GenerateDocuments(app);
    return app;
};

const appErrorHandler = (err, _, res, next) => {
    if (err instanceof AppError) {
        res.status(err.status).send({ error: err.message });
    } else if (err.detail) {
        // check another property of err
        res.status(500).send({ error: err.detail });
    } else {
        next(err);
    }
};
