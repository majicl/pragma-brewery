import config from '../config/app.config.js';
import JobService from './job.service.js';
import socket from '../socket.js';
import BeerServices from './../services/beer.services.js';
import { Alarm } from '../utils/index.js';

export default () => {
    JobService.run(monitorTemeratureHealth, config.get().monitor.cron);
};

const monitorTemeratureHealth = async () => {
    try {
        const io = socket.getActiveSocket();
        const outsideTemperatureBeerids = await BeerServices.getBeersOutsideTemperatureIds();
        io.emit('outside-temperature-beers', outsideTemperatureBeerids);
    } catch (error) {
        // needs to be alerted
        new Alarm(error);
    }
};
