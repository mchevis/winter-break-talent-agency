import React from "react";
import axios from "axios";
import ClientList from "./ClientList";
import SkillList from "./SkillList";

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
    console.log(this.state);
    const { clients, skills } = this.state;
    return (
      <div>
        <h1>ACME Talent Agency</h1>
        <div id="main">
          <ClientList clients={clients} />
          <SkillList skills={skills} />
        </div>
      </div>
    );
  }
}

export default App;
