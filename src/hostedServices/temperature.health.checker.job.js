import config from '../config/app.config.js';
import JobService from './job.service.js';

export default () => {
    JobService.run(monitorTemeratureHealth, config.monitor.cron);
};

const monitorTemeratureHealth = async () => {
    try {
    } catch (error) {
        // needs to be alerted
        
    }
};
