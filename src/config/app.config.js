const config = {};

config.web = {};
config.monitor = {};
config.services = {
    beers: {
        temperatureSensorServiceBaseURL:
            process.env.SERVICES_BEERS_BASEURL ||
            'https://temperature-sensor-service.herokuapp.com/sensor/',
        types: [
            {
                id: 1,
                name: 'IPA',
                temperature: {
                    min: 4,
                    max: 6,
                },
            },
            {
                id: 2,
                name: 'Pilsner',
                temperature: {
                    min: 5,
                    max: 6,
                },
            },
            {
                id: 3,
                name: 'Lager',
                temperature: {
                    min: 4,
                    max: 7,
                },
            },
            {
                id: 4,
                name: 'Stout',
                temperature: {
                    min: 6,
                    max: 8,
                },
            },
            {
                id: 5,
                name: 'Wheat Beer',
                temperature: {
                    min: 3,
                    max: 5,
                },
            },
            {
                id: 6,
                name: 'Pale Ale',
                temperature: {
                    min: 4,
                    max: 6,
                },
            },
        ],
    },
};

config.monitor.cron = process.env.MONITOR_CRON || '*/1 * * * *';

export default Object.freeze(config);
