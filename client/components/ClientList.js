import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ClientList = ({ clients, clientSkills }) => {
  return (
    <div className="list-container">
      <h2> Clients </h2>
      <div className="list">
        {clients.map((c) => (
          <Link to={`/clients/${c.id}`} key={c.id} className="item">
            {c.name} ({clientSkills.filter((cs) => cs.clientId === c.id).length}
            )
          </Link>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    clients: state.clients,
    clientSkills: state.clientSkills,
  };
};

export default connect(mapStateToProps)(ClientList);
