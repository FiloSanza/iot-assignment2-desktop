from flask import Flask, request
import arduino_comm
import json
import db

app = Flask(__name__)
database = db.InMemoryDB()
arduino = arduino_comm.SerialLine("COM3", 9600, timeout=0.1)

@app.route('/get_logs', methods=['GET'])
def get_logs():
    database.write_all(arduino.read())
    return json.dumps(database.read())

@app.route('/get_water_levels', methods=['GET'])
def get_water_levels():
    database.write_all(arduino.read())
    return []