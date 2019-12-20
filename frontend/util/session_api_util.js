import { ipFindKey } from "../util/keys";

export const signup = user => (
  $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user }
  })
);

export const login = user => {
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user }
  });
};

export const logout = () => (
  $.ajax({
    url: '/api/session',
    method: 'DELETE'
  })
);


export const getIp = () => (
  $.getJSON(`https://ipfind.co/?ip=12.23.56.98&auth=${ipFindKey}`)
);

