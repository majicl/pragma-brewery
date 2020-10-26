import types from './beers.types.js';

const { NOTIFY_OUTSIDE_TEMPERATURE } = types;

export const notifyBeersWithOutsideTemperature = beers => {
  return {
    type: NOTIFY_OUTSIDE_TEMPERATURE,
    beers
  };
};
