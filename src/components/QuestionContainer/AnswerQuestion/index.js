import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// Actions
import { handleAnswerQuestion } from "../../../actions/shared";

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
import { cardHeaderStyle } from "../../CommonStyles";

class AnswerQuestion extends Component {
  state = {
    selection: null,
    buttonDisabled: true
  };

  renderAnswerButton = () => {
    const { buttonDisabled } = this.state;

    return (
      <Button
        className="mt-3 mb-3"
        variant="primary"
        onClick={this.handleSubmit}
        disabled={buttonDisabled}
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

  handleSelectionChange = e => {
    this.setState({
      selection: e.target.value,
      buttonDisabled: false
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { dispatch, authUser, question } = this.props;
    const answer = this.state.selection;

    if (answer) {
      dispatch(handleAnswerQuestion(authUser, question.id, answer));
    }
  };

  handleViewPolls = e => {
    e.preventDefault();

    const { question } = this.props.data;
    this.props.history.push(`/question/${question.id}`);
  };

  render() {
    const { author, question } = this.props;
    const { name, avatarURL } = author;
    const { optionOne, optionTwo } = question;

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
                      variant="outline-secondary"
                      onChange={this.handleSelectionChange}
                      value="optionOne"
                    >
                      {optionOne.text}
                    </ToggleButton>

                    <ToggleButton
                      variant="outline-secondary"
                      onChange={this.handleSelectionChange}
                      value="optionTwo"
                    >
                      {optionTwo.text}
                    </ToggleButton>
                  </ToggleButtonGroup>

                  {this.renderAnswerButton()}
                </ButtonToolbar>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    );
  }
}

const mapStateToProps = ({ authUser }) => {
  return { authUser };
};

export default withRouter(connect(mapStateToProps)(AnswerQuestion));
