from flask import Flask, request
import flask
from flask_cors import CORS
import arduino_comm
import json
import db

app = Flask(__name__)
CORS(app)
database = db.InMemoryDB()
arduino = arduino_comm.SerialLine(port="/dev/ttyACM0", baudrate=9600, timeout=0.1)

@app.route('/get_logs', methods=['GET'])
def get_logs():
    database.write_all(arduino.read())
    return json.dumps(database.read(), default=lambda msg: msg.__dict__)

@app.route('/valve_control', methods=['POST'])
def valve_control():
    print(request.json)
    arduino.write(request.json["angle"])