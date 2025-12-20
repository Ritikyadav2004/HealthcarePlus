# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from keras.models import load_model


# import pandas as pd
# import pickle

# app = Flask(__name__)
# # CORS allow karega React (frontend) ko is server se baat karne ke liye
# CORS(app)

# # Model load karna (Global variable taaki baar baar load na karna pade)
# try:
#     # with open('KerasModel.h5', 'rb') as model_file:
#         # model = pickle.load(model_file)
#     model = load_model("model.h5")
#     print("Model loaded successfully!")

#     # print("Model loaded successfully!")
# except FileNotFoundError:
#     print("Error: 'model.pkl' not found. Make sure file exists.")
#     model = None

# @app.route('/predict', methods=['POST'])
# def predict():
#     if not model:
#         return jsonify({'error': 'Model not found on server'}), 500

#     try:
#         # Frontend se JSON data lena
#         data = request.get_json()

#         # Data ko DataFrame mein convert karna (Sequence wahi hona chahiye jo model training ke waqt tha)
#         # Ye keys wahi hongi jo React se bhejoge
#         input_data = pd.DataFrame([[
#             data.get('age'),
#             data.get('sex'),
#             data.get('cp'),
#             data.get('trestbps'),
#             data.get('chol'),
#             data.get('fbs'),
#             data.get('restecg'),
#             data.get('thalach'),
#             data.get('exang'),
#             data.get('oldpeak'),
#             data.get('slope'),
#             data.get('ca'),
#             data.get('thal')
#         ]], columns=['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal'])

#         # Prediction karna
#         prediction = model.predict(input_data)
        
#         # Result return karna (0 ya 1)
#         # int() use kiya kyunki numpy int JSON serializable nahi hota kabhi kabhi
#         return jsonify({'prediction': int(prediction[0][0].round())})
#         # if(prediction[0][0]==0):
#         #     return ("Unhealthy")
#         # else:
#         #     print("Healthy")
        
    

#     except Exception as e:
#         return jsonify({'error': str(e)}), 400

# if __name__ == '__main__':
#     app.run(debug=True, port=5000)



# from fastapi import FastAPI, Request
# from fastapi.middleware.cors import CORSMiddleware
# from fastapi.responses import JSONResponse
# # from keras.models import load_model
# from tensorflow.keras.models import load_model

# import pandas as pd

# app = FastAPI()

# # CORS allow karega React (frontend) ko is server se baat karne ke liye
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Model load karna (Global variable taaki baar baar load na karna pade)

# model = None
# try:
#     model = load_model("model.h5")
#     print("Model loaded successfully!")
# except FileNotFoundError:
#     print("Error: 'model.h5' not found. Make sure file exists.")
#     model = None


# @app.post("/predict")
# async def predict(request: Request):
#     if not model:
#         return JSONResponse(
#             status_code=500,
#             content={"error": "Model not found on server"}
#         )

#     try:
#         # Frontend se JSON data lena
#         data = await request.json()

#         # Data ko DataFrame mein convert karna
#         input_data = pd.DataFrame([[
#             data.get('age'),
#             data.get('sex'),
#             data.get('cp'),
#             data.get('trestbps'),
#             data.get('chol'),
#             data.get('fbs'),
#             data.get('restecg'),
#             data.get('thalach'),
#             data.get('exang'),
#             data.get('oldpeak'),
#             data.get('slope'),
#             data.get('ca'),
#             data.get('thal')
#         ]], columns=[
#             'age', 'sex', 'cp', 'trestbps', 'chol', 'fbs',
#             'restecg', 'thalach', 'exang', 'oldpeak',
#             'slope', 'ca', 'thal'
#         ])

#         # Prediction karna
#         prediction = model.predict(input_data)
#         print("Model Score",prediction[0][0])

#         return {
#             "prediction": int(prediction[0][0].round())
#         }

#     except Exception as e:
#         return JSONResponse(
        #     status_code=400,
        #     content={"error": str(e)}
        # )
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
