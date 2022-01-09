import React from "react";
import ClientList from "./ClientList";
import SkillList from "./SkillList";
import { connect } from "react-redux";
import { fetchClientSkills } from "../store";

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchClientSkills();
  }

  render() {
    return (
      <div id="main">
        <ClientList />
        <SkillList />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchClientSkills: () => dispatch(fetchClientSkills()),
  };
};

export default connect(null, mapDispatchToProps)(Home);
