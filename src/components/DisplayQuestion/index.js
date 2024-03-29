import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// React-Bootstrap Components
import Container from "react-bootstrap/lib/Container";
import Col from "react-bootstrap/lib/Col";
import Row from "react-bootstrap/lib/Row";
import Card from "react-bootstrap/lib/Card";
import Button from "react-bootstrap/lib/Button";
import ToggleButton from "react-bootstrap/lib/ToggleButton";
import ButtonToolbar from "react-bootstrap/lib/ButtonToolbar";
import ToggleButtonGroup from "react-bootstrap/lib/ToggleButtonGroup";

// Inline styles
import {
  cardHeaderStyle,
  unAnsweredQuestionStyle,
  answeredQuestionStyle
} from "../CommonStyles";

class DisplayQuestion extends Component {
  state = {
    selection: null
  };

  renderAnswerButton = () => {
    return (
      <Button
        className="mt-3 mb-3"
        variant="primary"
        onClick={this.handleAnswerQuestion}
      >
        Answer This Question
      </Button>
    );
  };

  renderViewResultsButton = () => {
    return (
      <Button
        className="mt-3 mb-3"
        onClick={this.handleViewPolls}
        variant="success"
      >
        View Polls
      </Button>
    );
  };

  handleAnswerQuestion = e => {
    e.preventDefault();

    const { question } = this.props.data;
    this.props.history.push(`/question/${question.id}`);
  };

  handleViewPolls = e => {
    e.preventDefault();

    const { question } = this.props.data;
    this.props.history.push(`/question/${question.id}`);
  };

  render() {
    const { authUser } = this.props;
    const { author, question, timeAgo, didUserAnswer } = this.props.data;
    const { name, avatarURL } = author;
    const { optionOne, optionTwo } = question;

    // If the user answered this question, determine which answer they selected
    // so that it can be highlighted
    let wasOptionOneSelected = false;
    let wasOptionTwoSelected = false;

    if (didUserAnswer) {
      wasOptionOneSelected = question.optionOne.votes.includes(authUser);
      wasOptionTwoSelected = question.optionTwo.votes.includes(authUser);
    }

    return (
      <Card>
        <Card.Header style={cardHeaderStyle}>{`${name} asks:`}</Card.Header>

        <Card.Body>
          <Container>
            <Row>
              <Col xs={"auto"}>
                <img
                  src={avatarURL}
                  alt="avatar"
                  className="rounded-circle"
                  width="120"
                  height="120"
                />
              </Col>

              <Col>
                <Card.Title>Would you rather...</Card.Title>

                <ButtonToolbar>
                  <ToggleButtonGroup
                    className="w-100"
                    type="radio"
                    name="options"
                    vertical
                  >
                    <ToggleButton
                      style={
                        wasOptionOneSelected
                          ? answeredQuestionStyle
                          : unAnsweredQuestionStyle
                      }
                      variant="outline-secondary"
                      disabled
                    >
                      {optionOne.text}
                    </ToggleButton>

                    <ToggleButton
                      style={
                        wasOptionTwoSelected
                          ? answeredQuestionStyle
                          : unAnsweredQuestionStyle
                      }
                      variant="outline-secondary"
                      disabled
                    >
                      {optionTwo.text}
                    </ToggleButton>
                  </ToggleButtonGroup>

                  {didUserAnswer
                    ? this.renderViewResultsButton()
                    : this.renderAnswerButton()}
                </ButtonToolbar>
              </Col>
            </Row>
          </Container>
        </Card.Body>

        <Card.Footer className="text-muted">{timeAgo}</Card.Footer>
      </Card>
    );
  }
}

const mapStateToProps = ({ authUser }) => {
  return { authUser };
};

export default withRouter(connect(mapStateToProps)(DisplayQuestion));
