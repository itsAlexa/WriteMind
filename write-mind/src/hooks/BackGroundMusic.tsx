import { sentiment, sentimentObject } from "../types/sentiment/Sentiment";
import newSong from '../music/lofi2.mp3';

function getTopSentiment(obj: sentimentObject): sentiment {
    let maxKey: keyof sentimentObject | null = null;
    let maxValue: number | null = null;

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (maxValue === null || value > maxValue) {
                maxValue = value;
                maxKey = key;
            }
        }
    }
    return maxKey as sentiment;
}

function playBackgroundMusic(sentiment: sentimentObject | undefined, playDefaultAudio: any, changeAudio: any) {
    let prevTopSentiment: sentiment = 'default';

    function aux() {
        if (sentiment) {  // non empty text, check whether the top sentiment has changed
            if (getTopSentiment(sentiment) != prevTopSentiment) {  // top sentiment has changed, change music
                changeAudio(newSong);
            }
        } else {  // empty text, revert to default music
            prevTopSentiment = 'default';
        }
        console.log(sentiment);
        playDefaultAudio();
    }

    function aux2() {
        playDefaultAudio();
    }
    return aux;
}

export default playBackgroundMusic;