import React from "react";
import { Link } from "react-router-dom";

const ClientList = ({ clients }) => {
  return (
    <div className="list-container">
      <h2> Clients </h2>
      <div className="list">
        {clients.map((c) => (
          <Link to={`/clients/${c.id}`} key={c.id} className="item">
            {c.name} ({c.skills.length})
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ClientList;
