export interface sentimentObject {
    anger: number;
    disgust: number;
    fear: number;
    joy: number;
    sadness: number;
    [key: string]: number;
}

export type sentiment = 'anger' | 'disgust' | 'fear' | 'joy' | 'sadness' | 'default'