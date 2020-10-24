import config from '../config/app.config.js';
import HttpClient from '../commons/http.client.js';

const { beers } = config.services;

class BeerServices {
    static async getBeer(id) {
        const response = await HttpClient.get(
            `${beers.temperatureSensorServiceBaseURL}${id}`
        );
        if (!response) {
            return null;
        }

        return response.data;
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
            const type = beers.types.find((_) => _.id == beer.id);
            return BeerServices.isOutsideTemperature(beer, type);
        });

        return inDangerBeers.map((_) => _.id);
    }

    static isOutsideTemperature = (beer, type) =>
        beer.temperature < type.temperature.min ||
        beer.temperature > type.temperature.max;
}

export default BeerServices;
