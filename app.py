import json
import uuid
import os, os.path
from flask import Flask, jsonify, render_template, request
from random import randint


app = Flask(__name__)


@app.route('/madlib-today')
def main_route():

    adlibfile = open("static/madlibs/adlibs.json")

    madlib_dict = json.load(adlibfile)

    madlibs = madlib_dict['madlibs']

    madlib = madlibs[randint(0, 1)]



    return jsonify(madlib)


@app.route('/')
def index():

    return render_template('index.html')

@app.route('/post-route', methods=['POST'])
def print_post():

    #print(request.form)
    dictionaryString = json.dumps(request.form)
    print(type(dictionaryString))
    print(dictionaryString)

    # not making a new filename every time
    # open('test-save-request.json', 'w').write(json.dumps(request.form))

    # New filename every time.
    filename = str(uuid.uuid4()) + '.json'
    open(filename, 'w').write(json.dumps(request.form))


    return jsonify({"message": "successfully posted"})


if __name__ == '__main__':
    app.run()
