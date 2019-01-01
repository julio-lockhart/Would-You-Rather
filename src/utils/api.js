import { _getUsers, _getQuestions } from "../utils/_DATA";

const timeago = require("timeago.js");

export const getInitialData = () => {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions
    })
  );
};

// Converts a timestamp to "Time Ago"
export const getTimeAgo = timestamp => {
  return timeago.format(timestamp);
};

// Combine the question and author into a single object
export const formatQuestionData = (question, users, didUserAnswer) => {
  const author = users[question.author];
  const timeAgo = getTimeAgo(question.timestamp);

  return {
    question,
    author,
    timeAgo,
    didUserAnswer
  };
};
