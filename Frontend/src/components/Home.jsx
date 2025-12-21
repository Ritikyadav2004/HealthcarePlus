import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // # API Call for Logout (if applicable)
    console.log('Logging out...');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        {/* Left Side: Logo */}
        <div className="navbar-left">
          <div className="logo-container">
            {/* Dummy Logo Symbol */}
            <svg className="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="logo-text">HealthCare+</span>
          </div>
        </div>

        {/* Right Side: Controls */}
        <div className="navbar-right">
          
          {/* Language Changer */}
          <div className="nav-item-container">
             <select className="language-select" defaultValue="en">
                <option value="en">🇺🇸 EN</option>
                <option value="hi">🇮🇳 HI</option>
             </select>
          </div>

          {/* Dark/Light Mode Toggle */}
          <button className="nav-icon-btn" title="Toggle Theme">
            {/* Sun Icon (placeholder for light mode active) */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          </button>

          {/* Global Symbol */}
          <button className="nav-icon-btn" title="Global">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
             </svg>
          </button>

          {/* Logout Button */}
          <button onClick={handleLogout} className="btn-logout">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
               <polyline points="16 17 21 12 16 7"></polyline>
               <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            <span>Logout</span>
          </button>
        </div>
      </nav>
      
      <main>
        <section className="hero-section">
          <div className="hero-content">
             <h2>Welcome back, Patient.</h2>
             <p>Track your health, manage appointments, and access your medical records all in one secure place.</p>
          </div>
        </section>

        <section className="dashboard-grid">
            <div className="card" onClick={() => navigate('/heart-health')} style={{ cursor: 'pointer' }}>
                <div className="card-icon">💓</div>
                <h3>Check Heart Health</h3>
                <p>Assess your heart condition with our AI-powered symptom checker.</p>
            </div>
            
            <div className="card">
                <div className="card-icon">📄</div>
                <h3>Medical Records</h3>
                <p>Access your lab results, prescriptions, and history securely.</p>
                <p>This Functionlity to be Added Soon.....</p>
            </div>

            <div className="card" onClick={() => navigate('/diet-plan')} style={{ cursor: 'pointer' }}>
                <div className="card-icon">🥗</div>
                <h3>Diet Planner</h3>
                <p>Get personalized meal plans and nutrition advice to stay healthy.</p>
            </div>


        </section>
      </main>
      
      <footer style={{ textAlign: 'center', padding: '20px', color: '#888', marginTop: 'auto', width: '100%' }}>
        <p>This is Prototype Version &copy; 2025</p>
      </footer>
    </div>
  );
};

export default Home;