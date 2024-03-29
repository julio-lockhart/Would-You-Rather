export const ADD_USER_QUESTION = "ADD_USER_QUESTION";
export const REMOVE_USER_QUESTION = "REMOVE_USER_QUESTION";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const SAVE_USER_ANSWER = "SAVE_USER_ANSWER";
export const REMOVE_USER_ANSWER = "REMOVE_USER_ANSWER";

export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

// When a question was added
export const addUserQuestion = (user, questionID) => {
  return {
    type: ADD_USER_QUESTION,
    user,
    questionID
  };
};

export function removeUserQuestion(user, questionID) {
  return {
    type: REMOVE_USER_QUESTION,
    user,
    questionID
  };
}

// When user answers a question
export function saveUserAnswer(user, questionID, answer) {
  return {
    type: SAVE_USER_ANSWER,
    user,
    questionID,
    answer
  };
}

export function removeUserAnswer(user, questionID, answer) {
  return {
    type: REMOVE_USER_ANSWER,
    user,
    questionID,
    answer
  };
}
