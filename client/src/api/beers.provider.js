import config from '../config.js';

const appConfig = config.get().app;

export const getBeers = async () => {
  const response = await fetch(
    `${appConfig.containerInformationProviderBaseUrl}beers`
  );
  return response.json();
};
