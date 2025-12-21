from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from tensorflow.keras.models import load_model
import pandas as pd
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
) 

@app.get("/")
def health():
    return {"status": "ok"}


model = None  # ✅ lazy load


@app.post("/predict")
async def predict(request: Request):
    global model

    try:
        if model is None:
            print("Loading model...")
            print("Files:", os.listdir())
            model = load_model("model.h5")
            print("Model loaded successfully!")

        data = await request.json()

        input_data = pd.DataFrame([[ 
            data.get('age'),
            data.get('sex'),
            data.get('cp'),
            data.get('trestbps'),
            data.get('chol'),
            data.get('fbs'),
            data.get('restecg'),
            data.get('thalach'),
            data.get('exang'),
            data.get('oldpeak'),
            data.get('slope'),
            data.get('ca'),
            data.get('thal')
        ]], columns=[
            'age', 'sex', 'cp', 'trestbps', 'chol', 'fbs',
            'restecg', 'thalach', 'exang', 'oldpeak',
            'slope', 'ca', 'thal'
        ])

        prediction = model.predict(input_data)

        return {"prediction": int(prediction[0][0].round())}

    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})
