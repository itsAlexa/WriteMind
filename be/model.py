from pydantic import BaseModel

class SemanticAnalysisReq(BaseModel):
    text: str