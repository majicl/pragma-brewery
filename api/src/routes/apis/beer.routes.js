import express from 'express';
import BeerController from '../../controllers/beerController.js';

export const beersRouter = express.Router();

beersRouter.get('/:id(\\d+)/', BeerController.getBeer);
beersRouter.get('/', BeerController.getBeers);
