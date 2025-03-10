import React, { useState, useEffect } from "react";
import axios from "axios";
import ChildComponent from "./ChildComponent";
import EventRegistrationForm from "./EventRegistrationForm";
import "bootstrap/dist/css/bootstrap.min.css";

const ParentComponent = () => {
  const [users, setUsers] = useState([]);
  const eventNames = ["Tech Conference", "Music Festival", "Art Workshop", "Sports Meet", "Coding Bootcamp"];

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => setUsers(response.data.map((user, index) => ({ ...user, event: eventNames[index % eventNames.length] }))))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const handleRegister = (newUser) => {
    setUsers([...users, { id: users.length + 1, ...newUser }]);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Event Registration</h2>
      <EventRegistrationForm onRegister={handleRegister} />
      <ChildComponent users={users} />
    </div>
  );
};

export default ParentComponent;