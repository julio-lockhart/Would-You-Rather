import {
  ADD_USER_QUESTION,
  REMOVE_USER_QUESTION,
  RECEIVE_USERS,
  SAVE_USER_ANSWER,
  REMOVE_USER_ANSWER
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case ADD_USER_QUESTION:
      return {
        ...state,
        [action.user]: {
          ...state[action.user],
          questions: [...state[action.user].questions, action.questionID]
        }
      };
    case REMOVE_USER_QUESTION:
      return {
        ...state,
        [action.user]: {
          ...state[action.user],
          questions: state[action.user].questions.filter(question => {
            return question !== action.questionID;
          })
        }
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
    case REMOVE_USER_ANSWER:
      const { [action.questionID]: value, ...answers } = state[
        action.user
      ].answers;
      return {
        ...state,
        [action.user]: {
          ...state[action.user],
          answers
        }
      };
    default:
      return state;
  }
}
