import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoadingBar from "react-redux-loading";

// API
import { handleInitialData } from "../../actions/shared";

// Components
import NavBar from "../NavBar";
import DashBoard from "../DashBoard";
import NewQuestion from "../NewQuestion";
import LeaderBoard from "../LeaderBoard";
import QuestionResults from "../QuestionResults";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { loading } = this.props;

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          {loading ? (
            <div>Loading</div>
          ) : (
            <div>
              <NavBar />
              <div className="container mt-4 mb-4">
                <Route path="/" exact component={DashBoard} />
                <Route path="/new" component={NewQuestion} />
                <Route path="/leaderboard" component={LeaderBoard} />
                <Route path="/question/:id" component={QuestionResults} />
              </div>
            </div>
          )}
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ authUser }) => {
  return {
    loading: authUser === null
  };
};

export default connect(mapStateToProps)(App);
