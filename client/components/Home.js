import React from "react";
import ClientList from "./ClientList";
import SkillList from "./SkillList";
import { connect } from "react-redux";
import { fetchClientSkills } from "../store";

const Home = () => {
  return (
    <div id="main">
      <ClientList />
      <SkillList />
    </div>
  );
};

export default Home;
