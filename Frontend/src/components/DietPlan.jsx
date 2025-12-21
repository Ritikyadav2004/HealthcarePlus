import React from 'react';
import { useNavigate } from 'react-router-dom';

const DietPlan = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="navbar-left">
           <button onClick={() => navigate('/home')} className="nav-icon-btn" style={{ marginRight: '1rem' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
           </button>
           <div className="logo-text">Diet & Lifestyle</div>
        </div>
      </nav>

      <main className="auth-container auth-container-wide" style={{ margin: '0 auto', background: 'white', maxWidth: '1000px' }}>
        <div className="auth-header">
          <h1>Heart-Friendly Diet Chart</h1>
          <p>General, evidence-based guidance for a healthier heart.</p>
        </div>

        <div className="diet-sections">
          
          {/* Morning Routine */}
          <section className="diet-card">
            <div className="diet-icon">🌅</div>
            <div className="diet-content">
              <h3>Morning (Empty Stomach)</h3>
              <ul>
                <li>Warm water</li>
                <li>4–5 soaked almonds + 1 walnut</li>
                <li>Optional: 1 tsp flaxseed or chia seeds (omega-3)</li>
              </ul>
            </div>
          </section>

          {/* Breakfast */}
          <section className="diet-card">
            <div className="diet-icon">🍽️</div>
            <div className="diet-content">
              <h3>Breakfast</h3>
              <ul>
                <li>Oats / Dalia with fruits</li>
                <li>OR 2 multigrain rotis + vegetables</li>
                <li>OR Moong dal chilla</li>
                <li>1 fruit (apple, papaya, berries)</li>
              </ul>
              <p className="diet-note"><strong>Why:</strong> Whole grains + fiber support cholesterol control.</p>
            </div>
          </section>

          {/* Mid-Morning */}
          <section className="diet-card">
            <div className="diet-icon">☕</div>
            <div className="diet-content">
              <h3>Mid-Morning Snack</h3>
              <ul>
                <li>Coconut water</li>
                <li>OR a handful of nuts (unsalted)</li>
                <li>OR fruit bowl</li>
              </ul>
            </div>
          </section>

          {/* Lunch */}
          <section className="diet-card">
            <div className="diet-icon">🍛</div>
            <div className="diet-content">
              <h3>Lunch</h3>
              <ul>
                <li>1–2 multigrain rotis <strong>OR</strong> 1 bowl brown rice</li>
                <li>Dal / Rajma / Chole</li>
                <li>1 bowl sabzi (spinach, beans, broccoli, carrots)</li>
                <li>Salad (cucumber, tomato, beetroot)</li>
              </ul>
              <p className="diet-note"><strong>Why:</strong> Plant-based meals lower BP & cholesterol.</p>
            </div>
          </section>

          {/* Evening */}
          <section className="diet-card">
            <div className="diet-icon">🫖</div>
            <div className="diet-content">
              <h3>Evening Snack</h3>
              <ul>
                <li>Green tea / Lemon water</li>
                <li>Roasted chana</li>
                <li>OR sprouts chaat</li>
              </ul>
            </div>
          </section>

          {/* Dinner */}
          <section className="diet-card">
            <div className="diet-icon">🍲</div>
            <div className="diet-content">
              <h3>Dinner (Lightest Meal)</h3>
              <ul>
                <li>Vegetable soup + 1 roti</li>
                <li>OR Khichdi + curd</li>
                <li>OR Grilled paneer / tofu + veggies</li>
              </ul>
            </div>
          </section>

          {/* Before Bed */}
          <section className="diet-card">
            <div className="diet-icon">🌙</div>
            <div className="diet-content">
              <h3>Before Bed</h3>
              <ul>
                <li>Warm turmeric milk (low-fat)</li>
                <li>OR chamomile tea</li>
              </ul>
            </div>
          </section>

          <hr style={{ margin: '2rem 0', border: '0', borderTop: '1px solid #e2e8f0' }} />

          {/* Avoid Foods */}
          <section className="warning-section">
             <h2>🚫 Foods to Avoid (Very Important)</h2>
             <div className="warning-grid">
               <div className="warning-item">Fried foods</div>
               <div className="warning-item">Red meat</div>
               <div className="warning-item">Butter, ghee in excess</div>
               <div className="warning-item">White bread, maida</div>
               <div className="warning-item">Sugary drinks</div>
               <div className="warning-item">Packaged snacks</div>
               <div className="warning-item">Excess salt</div>
             </div>
             <p style={{ marginTop: '1rem', color: '#ef4444' }}>These foods increase cholesterol and BP, raising heart-disease risk.</p>
          </section>

          <hr style={{ margin: '2rem 0', border: '0', borderTop: '1px solid #e2e8f0' }} />

          {/* Natural Lifestyle Changes */}
          <section className="lifestyle-section">
            <h2>🌿 Natural Ways to Improve Heart Health</h2>
            <div className="lifestyle-grid">
              <div className="lifestyle-card">
                <h4>1. Go Mostly Plant-Based</h4>
                <p>Fruits, vegetables, whole grains, legumes, nuts → reduce BP & cholesterol.</p>
              </div>
              <div className="lifestyle-card">
                <h4>2. Daily 30–45 Minutes Walking</h4>
                <p>Regular movement improves heart function and reduces plaque risk.</p>
              </div>
              <div className="lifestyle-card">
                <h4>3. Reduce Stress</h4>
                <p>Meditation, yoga, deep breathing — proven to lower heart strain.</p>
              </div>
              <div className="lifestyle-card">
                <h4>4. Maintain Healthy Weight</h4>
                <p>Even 5–7% weight reduction improves BP & cholesterol.</p>
              </div>
              <div className="lifestyle-card">
                <h4>5. Sleep 7–8 Hours</h4>
                <p>Poor sleep increases heart-disease risk.</p>
              </div>
              <div className="lifestyle-card">
                <h4>6. Avoid Smoking & Alcohol</h4>
                <p>Both directly damage arteries and raise BP.</p>
              </div>
              <div className="lifestyle-card">
                <h4>7. Increase Omega-3 Intake</h4>
                <p>Flaxseed, chia, walnuts — support heart health naturally.</p>
              </div>
              <div className="lifestyle-card">
                <h4>8. Stay Hydrated</h4>
                <p>Good hydration helps maintain blood viscosity and circulation.</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default DietPlan;