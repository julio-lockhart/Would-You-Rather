import React, { Component } from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

// Components
import QuestionNotFound from "../QuestionNotFound";

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

    if (question === undefined) {
      return <QuestionNotFound />;
    }

    const optionOneVotesCount = question.optionOne.votes.length;
    const optionTwoVotesCount = question.optionTwo.votes.length;
    const totalVotesCount = optionOneVotesCount + optionTwoVotesCount;

    const optionOnePercentage = roundNumber(
      (optionOneVotesCount / totalVotesCount) * 100
    );
    const optionTwoPercentage = roundNumber(
      (optionTwoVotesCount / totalVotesCount) * 100
    );

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

// Round a number to 1 decimal place
const roundNumber = num => {
  let strNum = num.toFixed(1);
  return parseInt(strNum, 10);
};

export default QuestionResults;
