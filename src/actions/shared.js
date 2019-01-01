import { showLoading, hideLoading } from "react-redux-loading";

// API
import { getInitialData } from "../utils/api";
import { _saveQuestion } from "../utils/_DATA";

// Authed Actions
import { setAuthUser } from "../actions/authUser";

// Question Actions
import {
  addQuestion,
  saveQuestionAnswer,
  receiveQuestions
} from "../actions/questions";

// User Actions
import {
  addUserQuestion,
  saveUserAnswer,
  receiveUsers
} from "../actions/users";

const AUTH_ID = "tylermcginnis";

/* Grab the initial data */
export const handleInitialData = () => {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthUser(AUTH_ID));
      dispatch(hideLoading());
    });
  };
};

export const handleAddNewQuestion = (author, optionOne, optionTwo) => {
  const newQuestion = {
    author,
    optionOneText: optionOne,
    optionTwoText: optionTwo
  };

  return dispatch => {
    dispatch(showLoading());

    return _saveQuestion(newQuestion)
      .then(question => {
        dispatch(addQuestion(question));
        dispatch(addUserQuestion(question.author, question.id));
      })
      .then(() => dispatch(hideLoading()))
      .catch(e => {
        alert(e);
        console.log(e);
      });
  };
};

export const handleAnswerQuestion = (authUser, questionID, answer) => {
  return dispatch => {
    dispatch(saveQuestionAnswer(authUser, questionID, answer));
    dispatch(saveUserAnswer(authUser, questionID, answer));
  };
};
