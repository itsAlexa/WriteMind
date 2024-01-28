# WriteMind

## Backend

Include your IBM Watson API key and base url in a `.env.` file in the `be` directory. Use variables `WATSON_BASE_URL` and `WATSON_API_KEY`.

```
pip3 install fastapi "uvicorn[standard]" ibm-watson dotenv
cd be
uvicorn app:app --reload --port 3000
```

## Frontend

In a `.env` file, include the backend API url for the frontend to connect to. Use the variable `VITE_SENTIMENT_ANALYSIS_URL`.

```
cd write-mind
npm install
npm run dev
```

Happy writing :)