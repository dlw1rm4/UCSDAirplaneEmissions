from flask import Flask,render_template

import pandas as pd

app = Flask(name)

df = pd.read_csv("table1.csv")
df.to_csv("data.csv", index=None)

@app.route('/')
def csvtohtml():
    data = pd.read_csv("table1.csv")
    return render_template('emissions.html',tables=[data.to_html()])

if name == "main":
    app.run(host="localhost",port=int(5000))