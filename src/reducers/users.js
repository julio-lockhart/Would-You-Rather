import {
  ADD_USER_QUESTION,
  RECEIVE_USERS,
  SAVE_USER_ANSWER
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case ADD_USER_QUESTION:
      return {
        ...state,
        [action.user]: {
          ...state[action.user],
          questions: [...state[action.user].questions, action.questionID]
        }
      };
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case SAVE_USER_ANSWER:
      return {
        ...state,
        [action.user]: {
          ...state[action.user],
          answers: {
            ...state[action.user].answers,
            [action.questionID]: action.answer
          }
        }
      };
    default:
      return state;
  }
}
