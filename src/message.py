from dataclasses import dataclass
from dataclasses_json import dataclass_json

@dataclass
@dataclass_json
class Message:
    log_level: int
    component: int
    data: str
    comment: str