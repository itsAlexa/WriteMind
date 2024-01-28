// src/data/tracks.ts

import horizon from './underwater_horizon.wav';
import bopn from './BopN.wav';
import lofi from './lofi.wav';
import cover from './yup.png';

export interface Track {
    title: string;
    src: string;
    author: string;
    thumbnail: string;
    mood: string;
}

export const tracks: Track[] = [
    {
        title: 'Underwater Horizon',
        src: horizon,
        author: 'David Holcer',
        thumbnail: cover,
        mood: 'happy',
    },
    {
        title: 'Lofi',
        src: lofi,
        author: 'David Holcer',
        thumbnail: cover,
        mood: 'sad',
    },
    {
        title: 'BopN',
        src: bopn,
        author: 'David Holcer',
        thumbnail: cover,
        mood: 'sad',
    },
    // Add more tracks with mood information
];