import React from "react";
import Question from "../../Question";

// React-Bootstrap Components
import ListGroup from "react-bootstrap/lib/ListGroup";
import ListGroupItem from "react-bootstrap/lib/ListGroupItem";

const QuestionsList = ({ questions }) => {
  const orderedQuestions = questions.sort((a, b) => {
    return b.question.timestamp - a.question.timestamp;
  });

  return orderedQuestions.length > 0 ? (
    <ListGroup>
      {orderedQuestions.map(entry => (
        <ListGroupItem key={entry.question.id}>
          <Question data={entry} />
        </ListGroupItem>
      ))}
    </ListGroup>
  ) : (
    <div>Empty</div>
  );
};

export default QuestionsList;
