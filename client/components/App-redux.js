import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchClients, fetchSkills, fetchClientSkills } from "../store";
import Home from "./Home";
import SingleClient from "./SingleClient";
import SingleSkill from "./SingleSkill";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchSkills();
    this.props.fetchClients();
    this.props.fetchClientSkills();
  }
  render() {
    return (
      <Router>
        <div id="page">
          <h1>ACME Talent Agency</h1>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/clients/:id"
              render={(routeProps) => <SingleClient {...routeProps} />}
            />
            <Route
              path="/skills/:id"
              render={(routeProps) => <SingleSkill {...routeProps} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSkills: () => dispatch(fetchSkills()),
    fetchClients: () => dispatch(fetchClients()),
    fetchClientSkills: () => dispatch(fetchClientSkills()),
  };
};

export default connect(null, mapDispatchToProps)(App);
