import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// React-Bootstrap Components
import Col from "react-bootstrap/lib/Col";
import Card from "react-bootstrap/lib/Card";
import Button from "react-bootstrap/lib/Button";
import Form from "react-bootstrap/lib/Form";

// Actions
import { setAuthUser } from "../../actions/authUser";

class Login extends Component {
  state = {
    avatarURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/425px-Missing_avatar.svg.png",
    userID: null,
    signInButtonDisabled: true,
    redirectToHome: false
  };

  handleUserSelectionChange = e => {
    const value = e.target.value;
    const user = this.props.users[value];

    if (user != null) {
      this.setState({
        avatarURL: user.avatarURL,
        userID: user.id,
        signInButtonDisabled: false
      });
    }
  };

  handleSignIn = e => {
    e.preventDefault();

    const { dispatch } = this.props;
    dispatch(setAuthUser(this.state.userID));

    this.setState({
      redirectToHome: true
    });
  };

  render() {
    const { avatarURL, signInButtonDisabled, redirectToHome } = this.state;

    if (redirectToHome) {
      return <Redirect to="/" />;
    }

    return (
      <Card>
        <Card.Header>
          <div className="h1 text-center">
            Welcome to the Would You Rather App!
          </div>

          <div className="h3 text-center text-muted">
            <small>Please sign in to continue</small>
          </div>
        </Card.Header>

        <Card.Body>
          <div style={{ margin: "0 auto", width: "120px" }}>
            <img
              src={avatarURL}
              alt="avatar"
              className="rounded-circle"
              width="120"
              height="120"
            />
          </div>

          <div className="mt-5">
            <Form>
              <Form.Group as={Col}>
                <Form.Control
                  as="select"
                  size="lg"
                  onChange={this.handleUserSelectionChange}
                >
                  <option hidden value="default">
                    Select a User ID
                  </option>

                  {Object.values(this.props.users).map(user => (
                    <option key={user.id} value={user.id}>
                      {user.id}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Button
                variant="outline-primary"
                type="submit"
                size="lg"
                block
                onClick={this.handleSignIn}
                disabled={signInButtonDisabled}
              >
                Submit
              </Button>
            </Form>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

const mapStateToProps = ({ authUser, users }) => {
  return {
    authUser,
    users
  };
};

export default connect(mapStateToProps)(Login);
