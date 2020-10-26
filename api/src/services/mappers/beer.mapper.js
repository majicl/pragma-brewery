import config from '../../config/app.config.js';

const { types } = config.get().services.beers;

class BeerMapper {
    static map(beer) {
        if (!beer) {
            return beer;
        }

        return {
            ...types.find((_) => _.id == beer.id),
            currentTemperature: beer.temperature,
        };
    }
}

export default BeerMapper;
