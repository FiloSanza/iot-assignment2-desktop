from flask import Flask, request
import arduino_comm
import json
import db

app = Flask(__name__)
database = db.InMemoryDB()
arduino = arduino_comm.SerialLine(port="COM3", baudrate=9600, timeout=0.1)

@app.route('/get_logs', methods=['GET'])
def get_logs():
    database.write_all(arduino.read())
    return json.dumps(database.read(), default=lambda msg: msg.__dict__)

@app.route('/valve_control', method=['POST'])
def valve_control():
    print(request.json)
    arduino.write(request.json["angle"])