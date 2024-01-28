import { sentiment, sentimentObject } from "../types/sentiment/Sentiment";
import anger1 from '../music/anger/anger1.mp3';
import anger2 from '../music/anger/anger2.mp3';
import disgust1 from '../music/disgust/disgust1.mp3';
import disgust2 from '../music/disgust/disgust2.mp3';
import fear1 from '../music/fear/fear1.mp3';
import fear2 from '../music/fear/fear2.mp3';
import joy1 from '../music/joy/joy1.mp3';
import joy2 from '../music/joy/joy2.mp3';
import sadness1 from '../music/sadness/sadness1.mp3';
import sadness2 from '../music/sadness/sadness2.mp3';
import defaultSong from '../music/default.mp3';

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

function probs() {
    return Math.random() > 0.5;
}

function getSongBasedOnSentiment(sentiment: sentiment) {
    switch (sentiment) {
        case 'anger':
            return probs() ? anger1 : anger2;
        case 'disgust':
            return probs() ? disgust1 : disgust2;
        case 'fear':
            return probs() ? fear1 : fear2;
        case 'joy':
            return probs() ? joy1 : joy2;
        case 'sadness':
            return probs() ? sadness1 : sadness2;
        default:
            return defaultSong;
    }
}

function playBackgroundMusic(sentiment: sentimentObject | undefined, playDefaultAudio: any, changeAudio: any) {
    let prevTopSentiment: sentiment = 'default';

    function aux() {
        if (sentiment) {  // non empty text, check whether the top sentiment has changed
            const topSentiment = getTopSentiment(sentiment)
            if (topSentiment != prevTopSentiment) {  // top sentiment has changed, change music
                prevTopSentiment = topSentiment
                changeAudio(getSongBasedOnSentiment(topSentiment));
            }
        } else {  // empty text, revert to default music
            prevTopSentiment = 'default';
            playDefaultAudio();
        }
    }

    return aux;
}

export default playBackgroundMusic;