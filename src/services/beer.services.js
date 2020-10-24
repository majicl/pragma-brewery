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
}

export default BeerServices;
