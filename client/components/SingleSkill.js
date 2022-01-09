import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateSkill } from "../store";

class SingleSkill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      buttonDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const selectedSkill = this.props.skills.filter(
      (s) => s.id === this.props.match.params.id * 1
    )[0];
    selectedSkill
      ? this.setState({ name: selectedSkill.name })
      : this.setState({ name: "" });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value, buttonDisabled: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateSkill(this.props.match.params.id, this.state.name);
  }

  render() {
    return (
      <form id="skill-form" onSubmit={this.handleSubmit}>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <div id="skill-form-buttons">
          <button
            type="submit"
            className="form-button"
            disabled={this.state.buttonDisabled}
          >
            Update
          </button>
          <button
            type="cancel"
            className="form-button"
            id="cancel-button"
            onSubmit={(e) => e.preventDefault()}
          >
            <Link to="/">Cancel</Link>
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    skills: state.skills,
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    updateSkill: (skillId, newName) =>
      dispatch(updateSkill(skillId, newName, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleSkill);
