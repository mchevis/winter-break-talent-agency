import React from "react";
import { Link } from "react-router-dom";

const SkillList = ({ skills }) => {
  return (
    <div className="list-container">
      <h2> Skills </h2>
      <div className="list">
        {skills.map((c) => (
          <Link to={`/skills/${c.id}`} key={c.id} className="item">
            {c.name} ({c.clients.length})
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SkillList;
