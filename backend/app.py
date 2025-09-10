from flask import Flask, request, jsonify
import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")

genai.configure(api_key=api_key)
model = genai.GenerativeModel("gemini-2.5-flash")

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    prompt = data.get('prompt', '')
    prompt = prompt + ''' Generate code only if request is for code generation or code conversion else send 'Use me only for Code Conversion or Generation' and only generate code no any explanation or any comments and also do not give (```js/html/py/etc. and \n``` )'''
    if not prompt:
        return jsonify({'error': 'Prompt is required'}), 400

    response = model.generate_content(prompt)
    return jsonify({'response': response.text})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True
