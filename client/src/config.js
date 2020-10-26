const config = {};

config.web = {};
config.web.port = 3000;

config.app = {};
config.app.containerInformationProviderBaseUrl =
  'http://localhost:8088/api/v1/';
config.socket = {
  url: 'http://localhost:8088/',
  eventName: 'outside-temperature-beers',
};
export default { get: () => Object.freeze(config) };
