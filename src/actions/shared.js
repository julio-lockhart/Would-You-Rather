import { showLoading, hideLoading } from "react-redux-loading";

// API
import { getInitialData } from "../utils/api";

// Auth Actions
import { setAuthUser } from "../actions/authUser";

// Question Actions
import { receiveQuestions } from "../actions/questions";

// User Actions
import { receiveUsers } from "../actions/users";

const AUTHED_ID = "tylermcginnis";

/* Grab the initial data */
export const handleInitialData = () => {
  console.log("Calling Handle Initial data");
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
};
