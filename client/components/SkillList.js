import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const SkillList = ({ skills, clientSkills }) => {
  return (
    <div className="list-container">
      <h2> Skills </h2>
      <div className="list">
        {skills.map((s) => (
          <Link to={`/skills/${s.id}`} key={s.id} className="item">
            {s.name} ({clientSkills.filter((cs) => cs.skillId === s.id).length})
          </Link>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    skills: state.skills,
    clientSkills: state.clientSkills,
  };
};

export default connect(mapStateToProps)(SkillList);
