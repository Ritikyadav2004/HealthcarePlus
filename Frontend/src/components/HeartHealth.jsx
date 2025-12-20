import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const medicalInfo = {
  age: {
    term: "Age",
    meaning: "How old you are.",
    example: "The risk of heart disease increases as you get older.",
    symptoms: "N/A"
  },
  sex: {
    term: "Sex",
    meaning: "Biological gender (Male/Female).",
    example: "Men generally have a higher risk of heart disease at an earlier age compared to women.",
    symptoms: "N/A"
  },
  cp: {
    term: "Chest Pain Type",
    meaning: "The type of chest pain you are experiencing.",
    example: "0: Typical Angina (classic heart pain), 1: Atypical Angina, 2: Non-anginal pain, 3: Asymptomatic.",
    symptoms: "Pressure, squeezing, fullness or pain in the center of your chest."
  },
  trestbps: {
    term: "Resting Blood Pressure",
    meaning: "Your blood pressure when you are at rest.",
    example: "90-120 mmHg is normal. High blood pressure (Hypertension) strains the heart.",
    symptoms: "Usually no symptoms, but severe cases can cause headaches or nosebleeds."
  },
  chol: {
    term: "Cholesterol",
    meaning: "A waxy substance found in your blood.",
    example: "High levels can build up in arteries. Below 200 mg/dL is desirable.",
    symptoms: "No direct symptoms, but leads to blocked arteries."
  },
  fbs: {
    term: "Fasting Blood Sugar",
    meaning: "Blood sugar level after not eating for at least 8 hours.",
    example: "Levels > 120 mg/dL may indicate diabetes, which is a risk factor for heart disease.",
    symptoms: "Increased thirst, frequent urination."
  },
  restecg: {
    term: "Resting ECG Results",
    meaning: "Electrical activity of the heart while at rest.",
    example: "0: Normal, 1: ST-T wave abnormality, 2: Left ventricular hypertrophy.",
    symptoms: "Palpitations or irregular heartbeats."
  },
  thalach: {
    term: "Max Heart Rate",
    meaning: "The highest heart rate achieved during maximum exercise.",
    example: "It generally decreases with age. Lower max heart rate can be a sign of heart issues.",
    symptoms: "Dizziness or shortness of breath during exercise."
  },
  exang: {
    term: "Exercise Induced Angina",
    meaning: "Chest pain caused by exercise.",
    example: "Pain occurs when the heart needs more oxygen but can't get it due to narrowed arteries.",
    symptoms: "Chest pain that stops when you rest."
  },
  oldpeak: {
    term: "ST Depression (Oldpeak)",
    meaning: "A finding on an ECG trace relative to rest.",
    example: "Indicates how much the heart is stressed during exercise.",
    symptoms: "Abnormal ECG readings."
  },
  slope: {
    term: "Slope of Peak Exercise ST",
    meaning: "The slope of the peak exercise ST segment.",
    example: "0: Upsloping (normal), 1: Flat (abnormal), 2: Downsloping (indicates ischemia).",
    symptoms: "N/A - seen on ECG."
  },
  ca: {
    term: "Major Vessels Colored by Fluoroscopy",
    meaning: "Number of major blood vessels (0-3) colored by dye.",
    example: "More colored vessels usually means better blood flow. 0 could mean blockage.",
    symptoms: "Chest pain, fatigue."
  },
  thal: {
    term: "Thalassemia",
    meaning: "A blood disorder involved in heart disease diagnosis.",
    example: "0-2: Normal to fixed defect, 3: Reversable defect.",
    symptoms: "Fatigue, weakness."
  }
};

const HeartHealth = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
   // HEALTHY DATA 
    age: 37,
    sex: 0,
    cp: 1,
    trestbps: 118,
    chol: 185,
    fbs: 0,
    restecg: 1,
    thalach: 176,
    exang: 0,
    oldpeak: 0.1,
    slope: 1,
    ca: 0,
    thal: 2


    // UNHEALTHY DATA
//     age: 59,
// sex: 1,
// cp: 3,
// trestbps: 154,
// chol: 295,
// fbs: 1,
// restecg: 2,
// thalach: 124,
// exang: 1,
// oldpeak: 3.8,
// slope: 2,
// ca: 2,
// thal: 3
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const medicalKeys = Object.keys(medicalInfo);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % medicalKeys.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + medicalKeys.length) % medicalKeys.length);
  };

const inputConstraints = {
    age: { min: 29, max: 77 },
    sex: { min: 0, max: 1 },
    cp: { min: 0, max: 3 },
    trestbps: { min: 94, max: 200 },
    chol: { min: 126, max: 564 },
    fbs: { min: 0, max: 1 },
    restecg: { min: 0, max: 2 },
    thalach: { min: 71, max: 202 },
    exang: { min: 0, max: 1 },
    oldpeak: { min: 0.0, max: 6.2 },
    slope: { min: 0, max: 2 },
    ca: { min: 0, max: 3 },
    thal: { min: 0, max: 3 }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // For number inputs, validate against constraints
    if (e.target.type === 'number') {
      const numValue = parseFloat(value);
      const constraint = inputConstraints[name];
      
      // Prevent negative values
      if (numValue < 0) return;

      // If we have constraints for this field
      if (constraint) {
        // Don't prevent typing if user is backspacing or typing a partial number
        // but do prevent if the complete number is definitely out of bounds (only max check for typing)
        if (numValue > constraint.max) return;
      }
    }

    setFormData(prev => ({
      ...prev,
      [name]: parseFloat(value) || value // Handle numbers
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {  //https://healthcareplus-1-u02e.onrender.com
      //http://127.0.0.1:5000/predict
      //healthcareplus-production.up.railway.app
      //http://127.0.0.1:8000/predict
      const response = await fetch('https://healthcareplus-production.up.railway.app/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      setResult(data.prediction);
    } catch (err) {
      console.error(err);
      setError('Failed to get prediction ');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="navbar-left">
           <button onClick={() => navigate('/home')} className="nav-icon-btn" style={{ marginRight: '1rem' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
           </button>
           <div className="logo-text">Heart Health Check</div>
        </div>
        <div className="navbar-right">
          <button onClick={() => setShowSidebar(true)} className="btn-secondary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            Medical Guide
          </button>
        </div>
      </nav>

      <main className="auth-container auth-container-wide" style={{ margin: '0 auto', background: 'white' }}>
        <div className="auth-header">
          <h1>Cardiac Risk Assessment</h1>
          <p>Enter your physiological data below to analyze your heart health risk.</p>
        </div>

        <form onSubmit={handleSubmit} className="form-grid">
          <div className="form-group">
            <label className="form-label">Age ({inputConstraints.age.min}-{inputConstraints.age.max})</label>
            <input 
              type="number" 
              name="age" 
              min={inputConstraints.age.min}
              max={inputConstraints.age.max}
              value={formData.age} 
              onChange={handleChange} 
              className="form-input" 
              required 
            />
          </div>
          <div className="form-group">
            <label className="form-label">Sex (1=Male, 0=Female)</label>
            <select name="sex" value={formData.sex} onChange={handleChange} className="form-input">
              <option value={1}>Male</option>
              <option value={0}>Female</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Chest Pain Type ({inputConstraints.cp.min}-{inputConstraints.cp.max})</label>
            <input 
              type="number" 
              name="cp" 
              min={inputConstraints.cp.min}
              max={inputConstraints.cp.max}
              value={formData.cp} 
              onChange={handleChange} 
              className="form-input" 
              required 
            />
          </div>
          <div className="form-group">
            <label className="form-label">Resting Blood Pressure ({inputConstraints.trestbps.min}-{inputConstraints.trestbps.max})</label>
            <input 
              type="number" 
              name="trestbps" 
              min={inputConstraints.trestbps.min}
              max={inputConstraints.trestbps.max}
              value={formData.trestbps} 
              onChange={handleChange} 
              className="form-input" 
              required 
            />
          </div>
          <div className="form-group">
            <label className="form-label">Cholesterol ({inputConstraints.chol.min}-{inputConstraints.chol.max})</label>
            <input 
              type="number" 
              name="chol" 
              min={inputConstraints.chol.min}
              max={inputConstraints.chol.max}
              value={formData.chol} 
              onChange={handleChange} 
              className="form-input" 
              required 
            />
          </div>
          <div className="form-group">
            <label className="form-label">Fasting Blood Sugar {'>'} 120 (1=Yes, 0=No)</label>
             <select name="fbs" value={formData.fbs} onChange={handleChange} className="form-input">
              <option value={1}>True</option>
              <option value={0}>False</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Resting ECG Results ({inputConstraints.restecg.min}-{inputConstraints.restecg.max})</label>
            <input 
              type="number" 
              name="restecg" 
              min={inputConstraints.restecg.min}
              max={inputConstraints.restecg.max}
              value={formData.restecg} 
              onChange={handleChange} 
              className="form-input" 
              required 
            />
          </div>
          <div className="form-group">
            <label className="form-label">Max Heart Rate ({inputConstraints.thalach.min}-{inputConstraints.thalach.max})</label>
            <input 
              type="number" 
              name="thalach" 
              min={inputConstraints.thalach.min}
              max={inputConstraints.thalach.max}
              value={formData.thalach} 
              onChange={handleChange} 
              className="form-input" 
              required 
            />
          </div>
          <div className="form-group">
            <label className="form-label">Exercise Induced Angina (1=Yes, 0=No)</label>
             <select name="exang" value={formData.exang} onChange={handleChange} className="form-input">
              <option value={1}>Yes</option>
              <option value={0}>No</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">ST Depression ({inputConstraints.oldpeak.min}-{inputConstraints.oldpeak.max})</label>
            <input 
              type="number" 
              step="0.1" 
              name="oldpeak" 
              min={inputConstraints.oldpeak.min}
              max={inputConstraints.oldpeak.max}
              value={formData.oldpeak} 
              onChange={handleChange} 
              className="form-input" 
              required 
            />
          </div>
          <div className="form-group">
            <label className="form-label">Slope of Peak Exercise ST ({inputConstraints.slope.min}-{inputConstraints.slope.max})</label>
            <input 
              type="number" 
              name="slope" 
              min={inputConstraints.slope.min}
              max={inputConstraints.slope.max}
              value={formData.slope} 
              onChange={handleChange} 
              className="form-input" 
              required 
            />
          </div>
          <div className="form-group">
            <label className="form-label">Major Vessels Colored ({inputConstraints.ca.min}-{inputConstraints.ca.max})</label>
            <input 
              type="number" 
              name="ca" 
              min={inputConstraints.ca.min}
              max={inputConstraints.ca.max}
              value={formData.ca} 
              onChange={handleChange} 
              className="form-input" 
              required 
            />
          </div>
          <div className="form-group">
             <label className="form-label">Thalassemia ({inputConstraints.thal.min}-{inputConstraints.thal.max})</label>
             <input 
                type="number" 
                name="thal" 
                min={inputConstraints.thal.min} 
                max={inputConstraints.thal.max} 
                value={formData.thal} 
                onChange={handleChange} 
                className="form-input" 
                required 
             />
          </div>

          <div className="full-width" style={{ marginTop: '1rem' }}>
            <button type="submit" className="btn-primary" disabled={loading} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
              {loading ? (
                <>
                  <div className="spinner"></div>
                  <span>Analyzing...</span>
                </>
              ) : 'Analyze Risk'}
            </button>
          </div>
        </form>

        {error && (
           <div style={{ marginTop: '2rem', padding: '1rem', background: '#fee2e2', color: '#ef4444', borderRadius: '0.5rem', textAlign: 'center' }}>
             {error}
           </div>
        )}

        {result !== null && (
          <div style={{ 
            marginTop: '2rem', 
            padding: '2rem', 
            borderRadius: '1rem', 
            background: result === 1 ? '#dcfce7' : '#fee2e2',
            border: `2px solid ${result === 1 ? '#22c55e' : '#ef4444'}`,
            textAlign: 'center'
          }}>
            <h2 style={{ color: result === 1 ? '#15803d' : '#b91c1c', marginBottom: '0.5rem' }}>
              {result === 1 ? 'Healthy Heart Detected' : 'Potential Heart Issue Detected'}
            </h2>
            <p style={{ color: result === 1 ? '#166534' : '#991b1b', fontSize: '1.1rem' }}>
              {result === 1 
                ? 'Great news! Your indicators suggest a healthy heart condition.' 
                : 'Please consult a healthcare professional. Some indicators suggest a risk of heart disease.'}
            </p>
          </div>
        )}
      </main>

      {/* Sidebar Component */}
      <div className={`sidebar-overlay ${showSidebar ? 'active' : ''}`} onClick={() => setShowSidebar(false)}>
        <div className="sidebar-content" onClick={e => e.stopPropagation()}>
          <div className="sidebar-header">
            <h2>Medical Guide</h2>
            <button onClick={() => setShowSidebar(false)} className="close-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          <div className="medical-slider">
            <div className="slider-controls">
              <button onClick={prevSlide} className="slider-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <div className="slider-indicator">
                {currentSlide + 1} / {medicalKeys.length}
              </div>
              <button onClick={nextSlide} className="slider-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>

            {(() => {
              const key = medicalKeys[currentSlide];
              const info = medicalInfo[key];
              return (
                <div key={key} className="medical-item fade-in">
                  <div className="medical-term">{info.term}</div>
                  
                  <div className="medical-detail">
                    <span className="detail-label">Simple Meaning</span>
                    {info.meaning}
                  </div>
                  
                  <div className="medical-detail">
                    <span className="detail-label">Real Life Example</span>
                    {info.example}
                  </div>
                  
                  <div className="medical-detail">
                    <span className="detail-label">Potential Symptoms</span>
                    {info.symptoms}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeartHealth;
