import { handleActions } from '../../../utils';
import types from './beers.types.js';

const { NOTIFY_OUTSIDE_TEMPERATURE } = types;

const INITIAL_STATE = {
  outSideOfTemperature: []
};

const reducers = {
  [NOTIFY_OUTSIDE_TEMPERATURE]: state => {
    return { ...state, outSideOfTemperature: [state.beers] };
  }
};

export default handleActions(INITIAL_STATE, reducers);
