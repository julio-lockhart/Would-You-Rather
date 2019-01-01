import React, { Component } from "react";
import { connect } from "react-redux";

import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

// React-Bootstrap Components
import Container from "react-bootstrap/lib/Container";
import Col from "react-bootstrap/lib/Col";
import Row from "react-bootstrap/lib/Row";
import Card from "react-bootstrap/lib/Card";
import ListGroup from "react-bootstrap/lib/ListGroup";
import ListGroupItem from "react-bootstrap/lib/ListGroupItem";

class QuestionResults extends Component {
  render() {
    const { author, question } = this.props;

    const optionOneVotesCount = question.optionOne.votes.length;
    const optionTwoVotesCount = question.optionTwo.votes.length;
    const totalVotesCount = optionOneVotesCount + optionTwoVotesCount;

    const optionOnePercentage = (optionOneVotesCount / totalVotesCount) * 100;
    const optionTwoPercentage = (optionTwoVotesCount / totalVotesCount) * 100;

    return (
      <Card>
        <Card.Header>{`${author.name} asked:`}</Card.Header>

        <Card.Body>
          <Container>
            <Row>
              <Col xs={"auto"}>
                <img
                  src={author.avatarURL}
                  alt="avatar"
                  className="rounded-circle"
                  width="120"
                  height="120"
                />
              </Col>

              <Col>
                <ListGroup>
                  <ListGroupItem>
                    <Row>Would you rather {question.optionOne.text}</Row>

                    <Container className="mt-2">
                      <Row>
                        <Progress percent={optionOnePercentage} />
                      </Row>

                      <Row className="mt-2">
                        <strong>
                          {optionOneVotesCount} out of {totalVotesCount} votes
                        </strong>
                      </Row>
                    </Container>
                  </ListGroupItem>

                  <ListGroupItem className="mt-4">
                    <Row>Would you rather {question.optionTwo.text}</Row>

                    <Container className="mt-2">
                      <Row>
                        <Progress percent={optionTwoPercentage} />
                      </Row>

                      <Row className="mt-2">
                        <strong>
                          {optionTwoVotesCount} out of {totalVotesCount} votes
                        </strong>
                      </Row>
                    </Container>
                  </ListGroupItem>
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    );
  }
}

const mapStateToProps = ({ users, questions }, props) => {
  const { id } = props.match.params;
  const question = questions[id];
  let author = {};

  if (question) {
    author = users[question.author];
  }

  return {
    author,
    question
  };
};

export default connect(mapStateToProps)(QuestionResults);
