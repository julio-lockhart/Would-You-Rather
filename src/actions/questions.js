export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

export const addQuestion = question => {
  return {
    type: ADD_QUESTION,
    question
  };
};

export const receiveQuestions = questions => {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
};

export function saveQuestionAnswer(authUser, questionID, answer) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authUser,
    questionID,
    answer
  };
}
