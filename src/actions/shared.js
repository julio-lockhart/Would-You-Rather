import { showLoading, hideLoading } from "react-redux-loading";

// API
import { getInitialData } from "../utils/api";
import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";

// Question Actions
import {
  addQuestion,
  removeQuestion,
  saveQuestionAnswer,
  removeQuestionAnswer,
  receiveQuestions
} from "../actions/questions";

// User Actions
import {
  addUserQuestion,
  removeUserQuestion,
  saveUserAnswer,
  removeUserAnswer,
  receiveUsers
} from "../actions/users";

/* Grab the initial data */
export const handleInitialData = () => {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
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
      .then(() => {
        dispatch(hideLoading());
      })
      .catch(e => {
        dispatch(removeUserQuestion(newQuestion.author, newQuestion.id));
        dispatch(removeQuestion(newQuestion.author, newQuestion.id));
        alert("There was an issue saving your question. Please try again.");
      });
  };
};

export const handleAnswerQuestion = (authUser, questionID, answer) => {
  return dispatch => {
    dispatch(showLoading());
    return _saveQuestionAnswer({
      authedUser: authUser,
      qid: questionID,
      answer
    })
      .then(() => {
        dispatch(saveQuestionAnswer(authUser, questionID, answer));
        dispatch(saveUserAnswer(authUser, questionID, answer));
      })
      .catch(() => {
        dispatch(removeQuestionAnswer(authUser, questionID, answer));
        dispatch(removeUserAnswer(authUser, questionID, answer));
        alert("Oops! There was an error saving your answer. Please try again.");
      });
  };
};
