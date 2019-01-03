import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Container from "react-bootstrap/lib/Container";
import Nav from "react-bootstrap/lib/Nav";
import Navbar from "react-bootstrap/lib/Navbar";
import NavDropdown from "react-bootstrap/lib/NavDropdown";

// Actions
import { logUserOut } from "../../actions/authUser";

import logo from "../../utils/logo.svg";

class NavBar extends Component {
  state = {
    redirectToLogin: false
  };

  handleLogout = e => {
    const { dispatch } = this.props;
    dispatch(logUserOut());

    this.setState({
      redirectToLogin: true
    });
  };

  render() {
    const { user, redirectToLogin } = this.props;

    if (redirectToLogin) {
      return <Redirect to="/login" />;
    }

    return (
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt={'Icons made by https://www.freepik.com/"'}
            />
            {" Would You Rather"}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <NavLink to="/" exact className="nav-link">
                Home
              </NavLink>

              <NavLink to="/new" className="nav-link">
                New Question
              </NavLink>

              <NavLink to="/leaderboard" className="nav-link">
                Leaderboard
              </NavLink>

              <NavDropdown title={user.name}>
                <NavDropdown.Item onSelect={this.handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapStateToProps = ({ authUser, users }) => {
  const user = users[authUser];

  return {
    user
  };
};

export default connect(mapStateToProps)(NavBar);
