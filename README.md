# 💬 MedBot – Health Care Chatbot using Flask & Ollama LLM

A simple, beautiful AI-powered healthcare chatbot built with **Flask**, using **Ollama** and open-source LLMs like `Mistral` or `LLaMA3`. The chatbot provides friendly responses to user health queries in real-time.

![UI Preview](static/bot.png)

---

## 🚀 Features

- 🤖 AI chatbot with LLM (Mistral, LLaMA3 via Ollama)
- 💬 Typing effect while bot responds
- 🎨 Clean and colorful UI with bot avatar
- ⚡ Fast and simple Flask backend
- 🧠 Completely local — no external API calls required

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Python (Flask)
- **LLM Engine:** [Ollama](https://ollama.com/)
- **Model:** `mistral` (lightweight and fast) or `llama3`

---

## 📂 Project Structure

healthcarebot/
│
├── static/
│ ├── style.css # Chatbot styles
│ ├── script.js # Typing and response logic
│ └── bot.png # Bot avatar image
│
├── templates/
│ └── index.html # Main chatbot UI
│
├── app.py # Flask backend
└── README.md # Project documentation


---

## ✅ Requirements

- Python 3.8+
- pip
- Ollama installed and running

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/healthcarebot.git
cd healthcarebot
install Python Dependencies
pip install flask requests

Install & Start Ollama
Make sure Ollama is installed: https://ollama.com/download
ollama pull mistral
ollama run mistral

🧪 Example Queries
"I have a headache and fever."

"What to do for chest pain?"

"How can I sleep better?"

"Is back pain dangerous?"
