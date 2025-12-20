import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // # API Call for Signup
    console.log('Signup logic here', formData);

    // Simulate successful signup and redirect to login
    navigate('/login');
  };

  return (
    <div className="auth-container auth-container-wide">
      <div className="auth-header">
        <h1>Join HealthCare+</h1>
        <p>Create your new account to access premium health features.</p>
      </div>
      <form onSubmit={handleSubmit} className="form-grid">
        <div className="form-group full-width">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="fullName"
            className="form-input"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="John Doe"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            name="phone"
            className="form-input"
            // Adding a mock phone field to balance the grid if needed, or just standard fields
            placeholder="+1 (555) 000-0000"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-input"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Create a password"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="form-input"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            placeholder="Confirm your password"
          />
        </div>
        <div className="full-width" style={{ marginTop: '1rem' }}>
            <button type="submit" className="btn-primary">
            Sign Up
            </button>
        </div>
      </form>
      <div className="auth-footer">
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
