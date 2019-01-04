import React from "react";
import { connect } from "react-redux";

// Components
import LeaderBoardItem from "./LeaderBoardItem";

// React-Bootstrap Components
import ListGroup from "react-bootstrap/lib/ListGroup";
import ListGroupItem from "react-bootstrap/lib/ListGroupItem";

const LeaderBoard = ({ leaders }) => {
  return leaders.length > 0 ? (
    <ListGroup>
      {leaders.map((leader, index) => (
        <ListGroupItem key={leader.id} style={{ border: "0px" }}>
          <LeaderBoardItem rank={index + 1} leader={leader} />
        </ListGroupItem>
      ))}
    </ListGroup>
  ) : (
    <div>Empty</div>
  );
};

const mapStateToProps = ({ users }) => {
  // Sort leaders based on the: "sum of the number of questions
  // they’ve asked and the number of questions they’ve answered"
  let sortedLeaders = Object.values(users).sort((a, b) => {
    const entry1 = Object.keys(a.answers).length + a.questions.length;
    const entry2 = Object.keys(b.answers).length + b.questions.length;
    return entry2 - entry1;
  });

  return {
    leaders: sortedLeaders
  };
};

export default connect(mapStateToProps)(LeaderBoard);
