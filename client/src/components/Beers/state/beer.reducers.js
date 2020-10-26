import { handleActions } from '../../../utils';
import types from './beers.types.js';

const { NOTIFY_OUTSIDE_TEMPERATURE } = types;

const INITIAL_STATE = {
  outsideOfTemperature: [],
};

const reducers = {
  [NOTIFY_OUTSIDE_TEMPERATURE]: (state, data) => {
    return { ...state, outsideOfTemperature: [...data.beers] };
  },
};

export default handleActions(INITIAL_STATE, reducers);
