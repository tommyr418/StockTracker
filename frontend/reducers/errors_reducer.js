import { RECEIVE_QUOTE_ERRORS } from '../actions/stock_actions';

const ErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUOTE_ERRORS: {
      return Object.assign({}, state, action.errors);
    }
    default:
      return state;
  }
};

export default ErrorsReducer;
