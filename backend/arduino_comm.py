from typing import List
import serial
from message import Message

class SerialLine():
    def __init__(self, port, baudrate, timeout) -> None:
        self.arduino = serial.Serial(port=port, baudrate=baudrate, timeout=timeout)
    
    def write_byte(self, data: int):
        self.arduino.write(bytes([data]))
    
    def read(self) -> List[Message]:
        msgs = []
        while True:
            line = self.arduino.read_until(b"\n").decode()[:-1]

            if len(line) == 0:
                break

            try:
                msgs.append(Message.from_json(line))
            except Exception:
                pass

        return msgs