# HealthCare+ 🩺

**AI-Powered Cardiac Risk Assessment Web Application**
TechSprint Hackathon 2025 – Leveraging the Power of AI
**Secured 4th Position (Top 5)**
Organized by Google Developer Groups On Campus – Gyan Ganga Institute of Technology & Sciences

---

## 🎯 Problem Statement

Heart disease cases are increasing rapidly among young adults in India, especially in smaller cities where regular medical checkups are often expensive and difficult to access. Early awareness and preventive guidance are critical.

**HealthCare+** aims to provide early cardiac risk screening along with basic lifestyle guidance through a simple and accessible web platform.

---

## 💡 Solution Overview

HealthCare+ uses Machine Learning to analyze **13 physiological health parameters** and predict heart health status. Based on the prediction, the system provides **personalized diet and lifestyle recommendations**.

---

## 🔗 Live Demo

🌐 **[https://healthcarewallha.netlify.app](https://healthcarewallha.netlify.app)**
*(Beta: Login with any dummy email such as [test@example.com](mailto:test@example.com) — no signup required)*

📂 **GitHub Repository:**
[https://github.com/Ritikyadav2004/HealthcarePlus](https://github.com/Ritikyadav2004/HealthcarePlus)

---

## 🚀 Key Features

* ✅ ML-based cardiac risk prediction (13 medical parameters)
* ✅ Real-time input validation using medical ranges
* ✅ Personalized diet and lifestyle dashboard
* ✅ Responsive web UI (mobile & desktop)
* ✅ FastAPI backend with `/predict` endpoint
* ✅ JWT-based authentication
* ✅ Model deployment ready (TensorFlow / Keras)

---

## 🏗️ Project Structure

```
HealthcarePlus/
├── frontend/              # React + Vite frontend
├── app.py                 # FastAPI backend & ML inference
├── model.h5               # Trained TensorFlow/Keras model
├── model.py               # Model loading & prediction logic
├── heartdisease.csv       # Training dataset
├── requirements.txt       # Backend dependencies
├── README.md              # Project documentation
```

---

## 🔧 Tech Stack

| Category    | Technologies                                     |
| ----------- | ------------------------------------------------ |
| Frontend    | React, Vite, HTML, CSS, JavaScript, Google Fonts |
| Backend     | Python, FastAPI                                  |
| ML Model    | TensorFlow, Keras                                |
| Development | Google Colab                                     |
| Deployment  | Netlify (Frontend)                               |
| Database    | MySQL (planned for medical records)              |

---

## ⚙️ Quick Start Guide

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Ritikyadav2004/HealthcarePlus.git
cd HealthcarePlus
```

### 2️⃣ Backend Setup (Python)

```bash
pip install -r requirements.txt
uvicorn app:app --reload --host 0.0.0.0 --port 8000
```

📘 Swagger API Docs:
[http://localhost:8000/docs](http://localhost:8000/docs)

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

🌐 Frontend URL:
[http://localhost:5173](http://localhost:5173)

---

### 4️⃣ Production Deployment

* **Frontend:** Netlify (already deployed)
* **Backend:** Render / Railway / VPS (Gunicorn + Uvicorn)
* **Model Serving:** FastAPI / TensorFlow Serving

---

### 5️⃣ Test Live Demo

Visit 👉 [https://healthcarewallha.netlify.app](https://healthcarewallha.netlify.app) and try with sample data.

---

## 🧠 ML Model Specifications

### Input Features (13 Parameters)

1. Age (years)
2. Sex (M/F)
3. Chest Pain Type
4. Resting Blood Pressure (mmHg)
5. Serum Cholesterol (mg/dl)
6. Fasting Blood Sugar (>120 mg/dl)
7. Resting ECG Results
8. Maximum Heart Rate (bpm)
9. Exercise Induced Angina
10. ST Slope
11. Number of Major Vessels
12. Thalassemia
13. Slope of Peak Exercise ST

**Output:**

* Healthy
* Potential Heart Issue

The model is trained using a heart disease dataset with a TensorFlow/Keras DNN architecture.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch

   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes

   ```bash
   git commit -m "Add YourFeature"
   ```
4. Push to the branch

   ```bash
   git push origin feature/YourFeature
   ```
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Creator

**Ritik Yadav**
Computer Science Engineering Student | AI/ML Enthusiast

🌐 Portfolio: *(Coming Soon)*
💼 LinkedIn: *(Add link)*
📂 GitHub: [https://github.com/Ritikyadav2004](https://github.com/Ritikyadav2004)

---
## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
⭐ If you find this project useful, feel free to star the repository!
