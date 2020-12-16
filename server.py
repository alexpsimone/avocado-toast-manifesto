from flask import Flask, render_template, redirect, send_from_directory
from flask import request, flash
import os

app = Flask(__name__)

@app.route("/")
@app.route("/about")
def root():
    return render_template('root.html')

if __name__ == "__main__":
    # connect_to_db(app)
    app.run(debug=True, host="0.0.0.0")