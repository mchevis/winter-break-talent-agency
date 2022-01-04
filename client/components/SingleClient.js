import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class SingleClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client: { clientSkills: [] },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const { data: client } = await axios.get(
      `/api/clients/${this.props.match.params.id}`
    );
    this.setState({ client });
  }

  async handleSubmit(e) {
    console.log(e.target.children[0].value);
    e.preventDefault();
    await axios.post("/api/clientSkills/", {
      skillId: e.target.children[0].value,
      clientId: this.state.client.id,
    });
  }

  render() {
    const { client } = this.state;
    const { skills } = this.props;
    return (
      <div id="single-client-page">
        <h3 id="client-name">{client.name}</h3>
        <div id="client-info">
          {client.name}&nbsp;
          {client.clientSkills.length > 0 ? (
            <div>
              <span>has the following skills:</span>
              <ul>
                {client.clientSkills.map((s) => (
                  <li key={s.skillId}>{s.skill.name}</li>
                ))}
              </ul>
            </div>
          ) : (
            <span>has no logged skills.</span>
          )}
        </div>
        <form onSubmit={this.handleSubmit}>
          <select name="selectSkill">
            {skills
              .filter((s) => !client.clientSkills.includes(s.id))
              .map((s) => (
                <option value={s.id} key={s.id}>
                  {s.name}
                </option>
              ))}
          </select>
          <button type="submit" className="form-button">
            Add Skill
          </button>
        </form>
        <button className="form-button" id="cancel-button">
          <Link to="/">Cancel</Link>
        </button>
      </div>
    );
  }
}

export default SingleClient;
