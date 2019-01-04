import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  REMOVE_QUESTION,
  SAVE_QUESTION_ANSWER,
  REMOVE_QUESTION_ANSWER
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      };
    case REMOVE_QUESTION: {
      const { [action.question.id]: value, ...newState } = state;
      return newState;
    }
    case SAVE_QUESTION_ANSWER: {
      // Get the votes for the object at the 'questionID', at the particular
      // answer (optionOne, optionTwo)
      const votesArray = state[action.questionID][action.answer].votes;

      return {
        ...state,
        [action.questionID]: {
          ...state[action.questionID],
          [action.answer]: {
            ...state[action.questionID][action.answer],
            votes: votesArray.concat([action.authUser])
          }
        }
      };
    }
    case REMOVE_QUESTION_ANSWER:
      return {
        ...state,
        [action.questionID]: {
          ...state[action.questionID],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.filter(
              vote => vote !== action.authUser
            )
          }
        }
      };
    default:
      return state;
  }
}
