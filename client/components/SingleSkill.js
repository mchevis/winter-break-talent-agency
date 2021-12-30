import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class SingleSkill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const { data: skill } = await axios.get(
      `/api/skills/${this.props.match.params.id}`
    );
    this.setState({ id: skill.id, name: skill.name });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault();
    await axios.put(`/api/skills/${this.props.match.params.id}`, {
      newName: this.state.name,
    });
    this.props.history.push("/");
  }

  render() {
    console.log(this.state);

    return (
      <form id="skill-form" onSubmit={this.handleSubmit}>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <div id="skill-form-buttons">
          <button type="submit" className="form-button">
            Update
          </button>
          <button className="form-button" id="cancel-button">
            <Link to="/">Cancel</Link>
          </button>
        </div>
      </form>
    );
  }
}

export default SingleSkill;
