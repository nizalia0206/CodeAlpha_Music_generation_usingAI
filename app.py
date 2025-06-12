from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate')
def generate_notes():
    notes = [random.randint(0, 12) for _ in range(8)]
    return jsonify(notes)

if __name__ == '__main__':
    app.run(debug=True)
