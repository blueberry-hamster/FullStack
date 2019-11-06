import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS
} from '../actions/session_actions'

const _emptyErrors = []

const sessionErrorsReducer = (state = _emptyErrors, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return _emptyErrors;
    case RECEIVE_SESSION_ERRORS:
      let newState = state.concat(action.errors.responseJSON);
      return newState;
    default:
      return state;
  }
};

export default sessionErrorsReducer;