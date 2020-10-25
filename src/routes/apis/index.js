import express from 'express';
import { beersRouter } from './beer.routes.js';

export const beerRouter = express.Router();
beerRouter.use('/beers', beersRouter);
