from flask import Flask,render_template

import pandas as pd

app = Flask(__name__)

df = pd.read_csv("table1.csv")
df.to_csv("table1.csv", index=None)

@app.route('/')
def csvtohtml():
    data = pd.read_csv("table1.csv")
    return render_template("emissions.html",tables=[data.to_html()], titles=[''])

if __name__ == "main":
    app.run(host="localhost",port=int(5000))