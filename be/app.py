import sys
# add src to path
sys.path.insert(0, "src/") 
import re
from fastapi import FastAPI
from model import SemanticAnalysisReq
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os
from ibm_watson import NaturalLanguageUnderstandingV1
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
from ibm_watson.natural_language_understanding_v1 import Features, EmotionOptions

# load .env file
load_dotenv()

# create the backend API app
app = FastAPI()

# allow CORS
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return "Hello, world!"

@app.post("/sentiment-analysis")
async def sentiment(req: SemanticAnalysisReq):
    authenticator = IAMAuthenticator(os.environ.get('WATSON_API_KEY'))
    watson_nlp_client = NaturalLanguageUnderstandingV1(
        version = '2022-04-07',
        authenticator = authenticator
    )
    watson_nlp_client.set_service_url(os.environ.get('WATSON_BASE_URL'))
    res = watson_nlp_client.analyze(
        text = remove_html_tags(req.text),
        features = Features(
            emotion=EmotionOptions(document=True)
        )
    ).get_result().get('emotion').get('document').get('emotion')
    return res

def remove_html_tags(text):
    # Define the regular expression pattern for HTML tags
    pattern = re.compile(r'<.*?>')
    
    # Use the sub() function to replace HTML tags with an empty string
    cleaned_text = re.sub(pattern, '', text)
    
    return cleaned_text