from flask import Flask, render_template_string, request, redirect, url_for
import speech_recognition as sr
from gtts import gTTS
import os
import platform
from nltk.tokenize import sent_tokenize

app = Flask(__name__)

# HTML + CSS template
TEMPLATE = '''
<!DOCTYPE html>
<html>
<head>
    <title>Speech Summary App</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f0f4f8;
            text-align: center;
            padding: 50px;
        }
        h1 {
            color: #333;
        }
        .container {
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            max-width: 600px;
            margin: auto;
        }
        button {
            background-color: #007BFF;
            border: none;
            color: white;
            padding: 12px 24px;
            text-align: center;
            font-size: 16px;
            border-radius: 8px;
            cursor: pointer;
            margin-top: 20px;
        }
        button:hover {
            background-color: #0056b3;
        }
        .output {
            margin-top: 30px;
            text-align: left;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎙️ Speech Summarizer</h1>
        <form method="post">
            <button type="submit">Speak Now</button>
        </form>
        {% if original_text %}
        <div class="output">
            <h3>📢 You Said:</h3>
            <p>{{ original_text }}</p>
            <h3>📝 Summary:</h3>
            <p>{{ summary }}</p>
        </div>
        {% endif %}
    </div>
</body>
</html>
'''

# Function to play audio across OS
def play_audio(file_path):
    system = platform.system()
    if system == "Windows":
        os.system(f"start {file_path}")
    elif system == "Darwin":
        os.system(f"open {file_path}")
    else:
        os.system(f"xdg-open {file_path}")

# Text-to-Speech
def text_to_speech(text):
    tts = gTTS(text=text, lang='en')
    file_path = "output.mp3"
    tts.save(file_path)
    play_audio(file_path)

# Speech-to-Text
def speech_to_text():
    recognizer = sr.Recognizer()
    try:
        with sr.Microphone() as source:
            print("Listening...")
            audio = recognizer.listen(source)
        text = recognizer.recognize_google(audio)
        print("You said:", text)
        return text
    except sr.UnknownValueError:
        return "Sorry, I could not understand the audio."
    except sr.RequestError as e:
        return f"Could not request results; {e}"
    except OSError:
        return "Microphone not found or is unavailable."

# Summarization
def summarize_text(text):
    sentences = sent_tokenize(text)
    summary = ' '.join(sentences[:2])
    return summary

# Web routes
@app.route("/", methods=["GET", "POST"])
def index():
    original_text = ""
    summary = ""
    if request.method == "POST":
        original_text = speech_to_text()
        summary = summarize_text(original_text)
        text_to_speech(summary)
    return render_template_string(TEMPLATE, original_text=original_text, summary=summary)

if __name__ == "__main__":
    app.run(debug=True)
