import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS
} from '../actions/session_actions'

const _emptyErrors = {
  sessions: []
}

const sessionErrorsReducer = (state = _emptyErrors, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return _emptyErrors;
    case RECEIVE_SESSION_ERRORS:
      newState.sessions.concat(action.errors.fullmessages);
      return newState;
    default:
      return state;
  }
};

export default sessionErrorsReducer;