import { RECEIVE_BLOCK_QUOTES, RECEIVE_DAILY_PRICES } from '../actions/stock_actions';

const EntitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BLOCK_QUOTES: {
      return Object.assign({}, state, action.data);
    }
    case RECEIVE_DAILY_PRICES: {
      return Object.assign({}, state, action.data);
    }
    default:
      return state;
  }
};

export default EntitiesReducer;
