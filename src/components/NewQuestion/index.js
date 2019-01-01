import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// React-Bootstrap Components
import Container from "react-bootstrap/lib/Container";
import Card from "react-bootstrap/lib/Card";
import Button from "react-bootstrap/lib/Button";
import Form from "react-bootstrap/lib/Form";

// Actions
import { handleAddNewQuestion } from "../../actions/shared";

const defaultState = {
  optionOne: "",
  optionTwo: "",
  submitButtonDisabled: true,
  redirectToHome: false
};

class NewQuestion extends Component {
  state = defaultState;

  handleTextChange = e => {
    const optionTextID = e.target.id;
    const text = e.target.value;

    this.setState(
      {
        [optionTextID]: text
      },
      () => {
        // Callback to update submit button state
        // Check if both options have been populated
        this.state.optionOne && this.state.optionTwo
          ? this.setState({ submitButtonDisabled: false })
          : this.setState({ submitButtonDisabled: true });
      }
    );
  };

  handleButtonSubmit = e => {
    e.preventDefault();

    const { optionOne, optionTwo } = this.state;
    const { authUser, dispatch } = this.props;

    dispatch(handleAddNewQuestion(authUser, optionOne, optionTwo));

    this.setState({
      ...defaultState,
      redirectToHome: true
    });
  };

  render() {
    const { redirectToHome, submitButtonDisabled } = this.state;

    if (redirectToHome) {
      return <Redirect to="/" />;
    }

    return (
      <Card>
        <Card.Header>Ask a New Question</Card.Header>

        <Card.Body>
          <Container>
            <Card.Title>Would you rather...</Card.Title>

            <Form>
              <Form.Row>
                <Form.Group className="w-100">
                  <Form.Control
                    id="optionOne"
                    type="text"
                    size="lg"
                    placeholder="Enter option 1"
                    onChange={this.handleTextChange}
                  />
                </Form.Group>
              </Form.Row>

              <p>OR</p>

              <Form.Row>
                <Form.Group className="w-100">
                  <Form.Control
                    id="optionTwo"
                    type="text"
                    size="lg"
                    placeholder="Enter option 2"
                    onChange={this.handleTextChange}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={this.handleButtonSubmit}
                  disabled={submitButtonDisabled}
                >
                  Submit Question
                </Button>
              </Form.Row>
            </Form>
          </Container>
        </Card.Body>
      </Card>
    );
  }
}

const mapStateToProps = ({ authUser }) => {
  return { authUser };
};

export default connect(mapStateToProps)(NewQuestion);
