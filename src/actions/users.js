export const ADD_USER_QUESTION = "ADD_USER_QUESTION";
export const RECEIVE_USERS = "RECEIVE_USERS";

export const addUserQuestion = (user, questionID) => {
  return {
    type: ADD_USER_QUESTION,
    user,
    questionID
  };
};

export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  };
};
