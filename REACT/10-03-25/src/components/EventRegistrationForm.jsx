import React, { useState } from "react";

const EventRegistrationForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({ name: "", email: "", event: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formData);
    setFormData({ name: "", email: "", event: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="border p-3 rounded mt-3">
      <div className="mb-3">
        <label className="form-label">Name:</label>
        <input 
          type="text" 
          name="name" 
          className="form-control"
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input 
          type="email" 
          name="email" 
          className="form-control"
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Event Name:</label>
        <input 
          type="text" 
          name="event" 
          className="form-control"
          value={formData.event} 
          onChange={handleChange} 
          required 
        />
      </div>
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  );
};

export default EventRegistrationForm;
