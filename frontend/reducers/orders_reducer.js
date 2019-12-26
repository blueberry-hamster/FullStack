import { RECEIVE_ORDER, RECEIVE_ORDERS } from "../actions/order_actions";
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const cartReducer = (state = {  }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ORDER:
      return action.order;

    case RECEIVE_ORDERS:
      return action.orders;

    case LOGOUT_CURRENT_USER: // clear orders on logout
      return newState;

    default:
      return state;
  }
};

export default cartReducer;