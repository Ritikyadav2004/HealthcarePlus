import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import HeartHealth from './components/HeartHealth';
import DietPlan from './components/DietPlan';

function App() {
  const [showWarning, setShowWarning] = useState(true);

  return (
    <Router>
      {showWarning && (
        <div className="backend-warning-popup">
          <div className="backend-warning-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
              <line x1="12" y1="9" x2="12" y2="13"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </div>
          <div className="backend-warning-content">
            <div className="backend-warning-title">Service Interruption</div>
            <div className="backend-warning-desc">Backend Service goes off due to Limited Credential</div>
          </div>
          <button className="backend-warning-close" onClick={() => setShowWarning(false)} aria-label="Dismiss warning">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/heart-health" element={<HeartHealth />} />
        <Route path="/diet-plan" element={<DietPlan />} />
        {/* Default redirect to login for now */}
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
