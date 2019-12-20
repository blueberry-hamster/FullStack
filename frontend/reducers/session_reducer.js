import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_IP_SESSION } from '../actions/session_actions';

const _nullSession = {
  id: null
};

const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    
    case RECEIVE_CURRENT_USER:
      nextState.id = action.currentUser.id;
      return nextState;

    case LOGOUT_CURRENT_USER:
      return _nullSession;

    case RECEIVE_IP_SESSION:
      nextState.id = action.ip;
      return nextState;

    default:
      return state;
  }
};

export default sessionReducer;