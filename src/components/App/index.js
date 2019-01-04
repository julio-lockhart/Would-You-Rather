import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoadingBar from "react-redux-loading";

// API
import { handleInitialData } from "../../actions/shared";

// Components
import Login from "../Login";
import NavBar from "../NavBar";
import DashBoard from "../DashBoard";
import NewQuestion from "../NewQuestion";
import LeaderBoard from "../LeaderBoard";
import QuestionContainer from "../QuestionContainer";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authUser, isLoading } = this.props;

    return (
      <Router>
        <Fragment>
          {authUser === null ? (
            <div className="container mt-5">
              {isLoading ? <LoadingBar /> : <Login />}
            </div>
          ) : (
            <div>
              <NavBar />
              <div className="container mt-4 mb-4">
                <Switch>
                  <Route path="/" exact component={DashBoard} />
                  <Route path="/add" component={NewQuestion} />
                  <Route path="/login" component={Login} />
                  <Route path="/leaderboard" component={LeaderBoard} />
                  <Route path="/question/:id" component={QuestionContainer} />
                </Switch>
              </div>
            </div>
          )}
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ authUser, loadingBar }) => {
  return {
    isLoading: loadingBar.default === 0 ? false : true,
    authUser
  };
};

export default connect(mapStateToProps)(App);
