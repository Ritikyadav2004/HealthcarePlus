import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // # API Call for Login
    console.log('Login logic here', formData);
    
    // Simulate successful login
    navigate('/home');
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <h1>HealthCare Portal</h1>
        <p>Welcome back! Please login to your account.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
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
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="btn-primary">
          Login
        </button>
      </form>
      <div className="auth-footer">
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
