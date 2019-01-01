import React from "react";
import { connect } from "react-redux";

// Components
import QuestionsList from "./QuestionsList";

// API
import { formatQuestionData } from "../../utils/api";

// React-Bootstrap Components
import Tab from "react-bootstrap/lib/Tab";
import Tabs from "react-bootstrap/lib/Tabs";

const HomePage = ({ unansweredQuestions, answeredQuestions }) => {
  return (
    <Tabs defaultActiveKey="unansweredQuestions">
      <Tab eventKey="unansweredQuestions" title="Unanswered Questions">
        <QuestionsList questions={unansweredQuestions} />
      </Tab>

      <Tab eventKey="answeredQuestions" title="Answered Questions">
        <QuestionsList questions={answeredQuestions} />
      </Tab>
    </Tabs>
  );
};

const mapStateToProps = ({ authUser, users, questions }) => {
  const questionsArray = Object.values(questions);
  const user = users[authUser];

  // Get the answered questions from the user object
  const userAnsweredQuestions = user !== null ? Object.keys(user.answers) : [];

  const answeredQuestions = [];
  const unansweredQuestions = [];

  for (let question of questionsArray) {
    if (userAnsweredQuestions.includes(question.id)) {
      answeredQuestions.push(formatQuestionData(question, users));
    } else {
      unansweredQuestions.push(formatQuestionData(question, users));
    }
  }

  return {
    unansweredQuestions,
    answeredQuestions
  };
};

export default connect(mapStateToProps)(HomePage);
