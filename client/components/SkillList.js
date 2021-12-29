import React from "react";

const SkillList = ({ skills }) => {
  return (
    <div id="skill-list">
      <h2> Skills </h2>
      <ul>
        {skills.map((c) => (
          <li key={c.id} className="skill-item">
            {c.name} ({c.clients.length})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;
