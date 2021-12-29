import React from "react";

const ClientList = ({ clients }) => {
  return (
    <div id="client-list">
      <h2> Clients </h2>
      <ul>
        {clients.map((c) => (
          <li key={c.id} className="client-item">
            {c.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientList;
