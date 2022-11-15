from typing import List
import serial
from message import Message

class SerialLine():
    def __init__(self, port, baudrate, timeout) -> None:
        self.arduino = serial.Serial(port=port, baudrate=baudrate, timeout=timeout)
    
    def write(self, data: str):
        self.arduino.write(bytes(data, 'utf-8'))
    
    def read(self) -> List[Message]:
        raw_data = self.arduino.read_all()

        if len(raw_data) == 0:
            return []

        msgs = []
        for line in raw_data.decode().split("\n"):
            print(f"DEBUG: {line}")
            msgs.append(Message.from_json(line))
        
        return msgs