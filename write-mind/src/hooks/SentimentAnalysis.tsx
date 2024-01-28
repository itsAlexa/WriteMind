import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_SENTIMENT_ANALYSIS_URL

async function callSentimentApi(text: string) {
    const req = {
        text
    };
    const res = await axios.post(BACKEND_URL, req);
    return res.data;
}


function periodicallyCallSentimentApi(textRef: MutableRefObject<string>) {
    let prevText = ''

    function aux() {
        // Define the function to be executed periodically
        const intervalFunction = async () => {
            // console.log(textRef.current);
            if (textRef.current !== prevText) {
                prevText = textRef.current;
                const res = await callSentimentApi(textRef.current)
                console.log(res);
            }
        };

        // Set up an interval to execute the function every 1000 milliseconds (1 second)
        const intervalId = setInterval(intervalFunction, 5000);

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    };
    return aux;
}

export default periodicallyCallSentimentApi