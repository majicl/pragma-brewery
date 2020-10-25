import config from '../config/app.config.js';
import BeerServices from '../services/beer.services.js';

const { beers } = config.get().services;

class BeerController {
    static async getBeer(req, res, next) {
        try {
            const { id } = req.params;
            const beer = await BeerServices.getBeer(id);
            if (!beer) {
                const err = { msg: 'the beer not found', status: 404 };
                return next(err);
            }
            return res.send(beer);
        } catch (err) {
            err.msg = 'failed to fetch beer info';
            err.status = 400;
            next(err);
        }
    }

    static async getBeers(_, res, next) {
        try {
            let beers = await BeerServices.getBeers();
            beers = beers.filter((beer) => !!beer);
            if (!beers || beers.length === 0) {
                const err = { msg: 'the beer not found', status: 404 };
                return next(err);
            }
            res.send(beers);
        } catch (err) {
            console.log(4, err);
            err.msg = 'failed to fetch beers info';
            err.status = 400;
            next(err);
        }
    }
}

export default BeerController;
