from dataclasses import dataclass
from dataclasses_json import dataclass_json

@dataclass_json
@dataclass
class Message:
    src: int
    tag: int
    time: int
    lvl: int
    data: str
    desc: str