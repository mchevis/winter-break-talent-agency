import React from "react";
import ClientList from "./ClientList";
import SkillList from "./SkillList";

const Home = ({ clients, skills }) => {
  return (
    <div id="main">
      <ClientList clients={clients} />
      <SkillList skills={skills} />
    </div>
  );
};

export default Home;
