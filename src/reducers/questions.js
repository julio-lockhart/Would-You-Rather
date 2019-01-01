import {
  ADD_QUESTION,
  RECEIVE_QUESTIONS,
  SAVE_QUESTION_ANSWER
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      };
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
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
    default:
      return state;
  }
}
