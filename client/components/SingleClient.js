import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addClientSkill, deleteClientSkill } from "../store";

class SingleClient extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    const clientId = this.props.clients.filter(
      (c) => c.id === this.props.match.params.id * 1
    )[0].id;
    const skillId = e.target.children[0].value * 1;
    this.props.addClientSkill(clientId, skillId);
  }

  handleDelete(clientId, skillId) {
    const csId = this.props.clientSkills.filter(
      (cs) => cs.clientId === clientId && cs.skillId === skillId
    )[0].id;
    this.props.deleteClientSkill(csId);
  }

  render() {
    const client =
      this.props.clients.filter(
        (c) => c.id === this.props.match.params.id * 1
      )[0] || {};
    const clientSkills = this.props.clientSkills.filter(
      (cs) => cs.clientId === this.props.match.params.id * 1
    );
    return (
      <div id="single-client-page">
        <h3 id="client-name">{client.name}</h3>
        <div id="client-info">
          {clientSkills.length > 0 ? (
            <ul>
              {clientSkills.map((s) => (
                <li key={s.skillId}>
                  {s.skill.name}{" "}
                  <button
                    onClick={() => this.handleDelete(client.id, s.skillId)}
                  >
                    X
                  </button>{" "}
                </li>
              ))}
            </ul>
          ) : (
            <span>has no logged skills.</span>
          )}
        </div>
        <form onSubmit={this.handleSubmit}>
          <select name="selectSkill" defaultValue={"DEFAULT"}>
            <option value="DEFAULT" disabled hidden>
              Select a skill
            </option>
            {this.props.skills
              .filter(
                (s) => !clientSkills.map((cs) => cs.skillId).includes(s.id)
              )
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
        <button type="cancel" className="form-button" id="cancel-button">
          <Link to="/">Back to Home</Link>
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    clients: state.clients,
    clientSkills: state.clientSkills,
    skills: state.skills,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addClientSkill: (clientId, skillId) =>
      dispatch(addClientSkill(clientId, skillId)),
    deleteClientSkill: (csId) => dispatch(deleteClientSkill(csId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleClient);
