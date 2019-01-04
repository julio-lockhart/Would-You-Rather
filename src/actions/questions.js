export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const REMOVE_QUESTION = "REMOVE_QUESTION";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";
export const REMOVE_QUESTION_ANSWER = "REMOVE_QUESTION_ANSWER";

export const receiveQuestions = questions => {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
};

export const addQuestion = question => {
  return {
    type: ADD_QUESTION,
    question
  };
};

export function removeQuestion(question) {
  return {
    type: REMOVE_QUESTION,
    question
  };
}

export function saveQuestionAnswer(authUser, questionID, answer) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authUser,
    questionID,
    answer
  };
}

export function removeQuestionAnswer(authUser, questionID, answer) {
  return {
    type: REMOVE_QUESTION_ANSWER,
    authUser,
    questionID,
    answer
  };
}
