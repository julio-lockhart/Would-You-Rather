import React from "react";
import DisplayQuestion from "../../DisplayQuestion";

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
          <DisplayQuestion data={entry} />
        </ListGroupItem>
      ))}
    </ListGroup>
  ) : (
    <div className="text-center mt-3 display-4">No Questions to Display</div>
  );
};

export default QuestionsList;
