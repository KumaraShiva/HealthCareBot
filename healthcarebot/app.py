from flask import Flask, render_template, request
import requests

app = Flask(__name__)

# Use a lighter model for faster response
OLLAMA_MODEL = "mistral"
OLLAMA_URL = "http://localhost:11434/api/generate"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get', methods=['POST'])
def get_bot_response():
    user_msg = request.form['msg']
    
    # Shortened prompt for faster inference
    prompt = f"Answer this health question simply and kindly: {user_msg}"

    payload = {
        "model": OLLAMA_MODEL,
        "prompt": prompt,
        "stream": False
    }

    try:
        response = requests.post(OLLAMA_URL, json=payload)
        response.raise_for_status()
        data = response.json()
        return data.get("response", "Sorry, no response.")
    except requests.exceptions.RequestException as e:
        return f"Request error: {e}"
    except Exception as e:
        return f"General error: {e}"

if __name__ == "__main__":
    app.run(debug=True)
