from flask import Flask, json,jsonify, render_template
from random import randint


app = Flask(__name__)


@app.route('/madlib-today')
def main_route():

    adlibfile = open("staic/madlibs/adlibs.json")

    madlib_dict = json.load(adlibfile)

    madlibs = madlib_dict['madlibs']

    madlib = madlibs[randint(0, 4)]

    return jsonify(madlib)


@app.route('/')
def index():

    return render_template('index.html')

if __name__ == '__main__':
    app.run()
