const config = {};

config.web = {};
config.web.port = process.env.WEB_PORT || 3000;

config.app = {};
config.app.containerInformationProviderBaseUrl =
  process.env.CONTAINER_BASE_URL || 'http://localhost:8088/api/v1/';
config.socket = {
  url: process.env.SOCKET_URL || 'http://localhost:8088/',
  eventName: process.env.SOCKET_EVENT_NAME || 'outside-temperature-beers'
};
export default { get: () => Object.freeze(config) };
