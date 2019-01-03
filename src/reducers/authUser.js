import { SET_AUTH_USER, LOG_USER_OUT } from "../actions/authUser";

export default function authUser(state = null, action) {
  switch (action.type) {
    case SET_AUTH_USER:
    case LOG_USER_OUT:
      return action.id;
    default:
      return state;
  }
}
