from flask import Flask,render_template

import pandas as pd

app = Flask(__name__)


@app.route('/')
def csvtohtml():
    data = pd.read_csv("table1.csv")
    return render_template('emissions.html',tables=[data.to_html()])

if __name__ == "__main__":
    app.run(host="localhost",port=int(5000))