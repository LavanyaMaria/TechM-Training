import React from "react";

const ChildComponent = ({ users }) => {
  return (
    <div>
      <h3>Registered Participants</h3>
      <ul className="list-group">
        {users.map(user => (
          <li key={user.id} className="list-group-item">{user.name} - {user.email} - {user.event}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChildComponent;