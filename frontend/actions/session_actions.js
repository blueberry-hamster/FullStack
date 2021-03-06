import { signup, login, logout, getIp } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_IP_SESSION ='RECEIVE_IP_SESSION';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveIpSession = ip => ({
  type: RECEIVE_IP_SESSION,
  ip
});

const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: errors
});

export const createNewUser = user => dispatch => signup(user)
  .then(user => dispatch(receiveCurrentUser(user)))
  .fail(err => dispatch(receiveSessionErrors(err)));

export const loginUser = user => dispatch => login(user)
  .then(user => dispatch(receiveCurrentUser(user)))
  .fail(err => dispatch(receiveSessionErrors(err)));

export const logoutUser = () => dispatch => logout()
  .then(() => dispatch(logoutCurrentUser()))
  .fail(err => dispatch(receiveSessionErrors(err)));

export const getIpAddress = () => dispatch => getIp()
  .then(res => dispatch(receiveIpSession(res.ip_address)));
