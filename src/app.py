from flask import Flask, request
import json
import db

app = Flask(__name__)
database = db.InMemoryDB()

@app.route('/get_logs', methods=['GET'])
def get_logs():
    return json.dumps(database.read())

@app.route('/get_water_levels', methods=['GET'])
def get_water_levels():
    return []