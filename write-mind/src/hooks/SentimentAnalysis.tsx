import axios from "axios";
import { MutableRefObject } from "react";

const BACKEND_URL = import.meta.env.VITE_SENTIMENT_ANALYSIS_URL

function getLatestParagraph(text: string) {
    const paras = text.split('<p>')
    // return the last 5 lines of the text
    return paras.slice(-5).join(' ')
}

function removeHtmlTags(text: string): string {
    const pattern = /<[^>]*>/g;
    const cleanedText = text.replace(pattern, '');
    return cleanedText;
}

async function callSentimentApi(text: string) {
    const req = {
        text: removeHtmlTags(getLatestParagraph(text))
    };
    const res = await axios.post(BACKEND_URL, req);
    return res.data;
}

function periodicallyCallSentimentApi(textRef: MutableRefObject<string>,  setSentiment: any) {
    let prevText = ''

    function aux() {
        // Define the function to be executed periodically
        const intervalFunction = async () => {
            // console.log(textRef.current);
            if (textRef.current && textRef.current !== prevText) {
                prevText = textRef.current;
                try {
                    const res = await callSentimentApi(textRef.current)
                    // console.log(res);
                    setSentiment(res);
                } catch (err) {}  // ignore
            }
        };

        // Set up an interval to execute the function every 5000 milliseconds (5 second)
        const intervalId = setInterval(intervalFunction, 5000);

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    };
    return aux;
}

export default periodicallyCallSentimentApi