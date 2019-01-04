import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import QuestionNotFound from "./QuestionNotFound";
import AnswerQuestion from "./AnswerQuestion";
import QuestionResults from "./QuestionResults";

class QuestionContainer extends Component {
  render() {
    const { author, didUserAnswerQuestion, question } = this.props;

    if (question === undefined) {
      return <QuestionNotFound />;
    }

    if (didUserAnswerQuestion) {
      return <QuestionResults author={author} question={question} />;
    } else {
      return <AnswerQuestion author={author} question={question} />;
    }
  }
}

const mapStateToProps = ({ authUser, users, questions }, props) => {
  const { id } = props.match.params;
  const question = questions[id];

  const authUserData = users[authUser];
  let author = {};
  let didUserAnswerQuestion = false;

  if (question) {
    author = users[question.author];
    didUserAnswerQuestion = Object.keys(authUserData.answers).includes(id);
  }

  return {
    author,
    didUserAnswerQuestion,
    question
  };
};

export default connect(mapStateToProps)(QuestionContainer);
