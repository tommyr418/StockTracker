import { RECEIVE_BLOCK_QUOTES } from '../actions/stock_actions';

const EntitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BLOCK_QUOTES: {
      return Object.assign({}, state, action.data);
    }
    default:
      return state;
  }
};

export default EntitiesReducer;
