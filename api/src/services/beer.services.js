import config from '../config/app.config.js';
import HttpClient from '../commons/http.client.js';
import BeerMapper from './mappers/beer.mapper.js';

const { beers } = config.get().services;

class BeerServices {
    static async getRawBeer(id) {
        const response = await HttpClient.get(
            `${beers.temperatureSensorServiceBaseURL}${id}`
        );
        if (!response) {
            return null;
        }

        return response.data;
    }
    static async getBeer(id) {
        const data = await BeerServices.getRawBeer(id);
        if (!data) {
            return null;
        }

        return BeerMapper.map(data);
    }

    static async getBeers() {
        const beerInTypes = beers.types.map((type) =>
            BeerServices.getBeer(`${type.id}`)
        );
        return await Promise.all(beerInTypes);
    }

    static async getRawBeers() {
        const beerInTypes = beers.types.map((type) =>
            BeerServices.getRawBeer(`${type.id}`)
        );
        const allRawBeers = await Promise.all(beerInTypes);
        return new Map(allRawBeers);
    }

    // static isOutsideTemperature = (beer) =>
    //     beer.currentTemperature < beer.temperature.min ||
    //     beer.currentTemperature > beer.temperature.max;
}

export default BeerServices;
