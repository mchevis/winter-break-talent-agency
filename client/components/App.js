import React from "react";
import axios from "axios";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import SingleClient from "./SingleClient";
import SingleSkill from "./SingleSkill";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clients: [],
      skills: [],
    };
  }
  async componentDidMount() {
    try {
      const [{ data: clients }, { data: skills }] = await Promise.all([
        axios.get("/api/clients"),
        axios.get("/api/skills"),
      ]);
      this.setState({ clients, skills });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <Router>
        <div id="page">
          <h1>ACME Talent Agency</h1>
          <Switch>
            <Route
              exact
              path="/"
              render={(routeProps) => (
                <Home
                  {...routeProps}
                  clients={this.state.clients}
                  skills={this.state.skills}
                />
              )}
            ></Route>
            <Route
              path="/clients/:id"
              render={(routeProps) => (
                <SingleClient {...routeProps} skills={this.state.skills} />
              )}
            ></Route>
            <Route
              path="/skills/:id"
              render={(routeProps) => <SingleSkill {...routeProps} />}
            ></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
