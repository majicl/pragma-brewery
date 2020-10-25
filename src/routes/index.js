import express from 'express';
import { beerRouter } from './apis/index.js';

export const rootRouter = express.Router();
rootRouter.use('/api/v1', beerRouter);
