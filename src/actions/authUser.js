export const SET_AUTH_USER = "SET_AUTH_USER";
export const LOG_USER_OUT = "LOG_USER_OUT";

export function setAuthUser(id) {
  return {
    type: SET_AUTH_USER,
    id
  };
}

export function logUserOut() {
  return {
    type: LOG_USER_OUT,
    id: null
  };
}
