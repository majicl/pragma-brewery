import config from '../config/app.config.js';
import HttpClient from '../commons/http.client.js';
import BeerMapper from './mappers/beer.mapper.js';

const { beers } = config.get().services;

class BeerServices {
    static async getBeer(id) {
        const response = await HttpClient.get(
            `${beers.temperatureSensorServiceBaseURL}${id}`
        );
        if (!response) {
            return null;
        }

        return BeerMapper.map(response.data);
    }

    static async getBeers() {
        const beerInTypes = beers.types.map((type) =>
            BeerServices.getBeer(`${type.id}`)
        );
        return await Promise.all(beerInTypes);
    }

    static async getBeersOutsideTemperatureIds() {
        const beerInTypes = beers.types.map((type) =>
            BeerServices.getBeer(`${type.id}`)
        );
        const allBeers = await Promise.all(beerInTypes);
        const inDangerBeers = allBeers.filter((beer) => {
            return BeerServices.isOutsideTemperature(beer);
        });

        return inDangerBeers.map((_) => _.id);
    }

    static isOutsideTemperature = (beer) =>
        beer.currentTemperature < beer.temperature.min ||
        beer.currentTemperature > beer.temperature.max;
}

export default BeerServices;
