from flask import Flask, jsonify, render_template


app = Flask(__name__)


EXAMPLE_MADLIB = {
  "text": "The red stone <input type=\"text\" name=\"adlib-1\" id=\"adlib-1\"> was never as <input type=\"text\" name=\"adlib-2\" id=\"adlib-2\"> as it once was",
  "adlibs": ["", ""]
}


@app.route('/madlib-today')
def main_route():

    return jsonify(EXAMPLE_MADLIB)


@app.route('/')
def index():

    return render_template('index.html')

if __name__ == '__main__':
    app.run()
