import React from "react";
import { Link } from "react-router-dom";

const ClientList = ({ clients }) => {
  return (
    <div id="client-list-container">
      <h2> Clients </h2>
      <div id="client-list">
        {clients.map((c) => (
          <Link to={`/clients/${c.id}`} key={c.id} className="client-item">
            {c.name} ({c.skills.length})
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ClientList;
