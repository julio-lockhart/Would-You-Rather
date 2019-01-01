import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import Container from "react-bootstrap/lib/Container";
import Nav from "react-bootstrap/lib/Nav";
import Navbar from "react-bootstrap/lib/Navbar";
import NavDropdown from "react-bootstrap/lib/NavDropdown";

import logo from "../../utils/logo.svg";

const NavBar = ({ user }) => {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#home">
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
              <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = ({ authUser, users }) => {
  const user = users[authUser];

  return {
    user
  };
};

export default connect(mapStateToProps)(NavBar);
