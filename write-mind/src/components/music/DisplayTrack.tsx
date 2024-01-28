// src/components/DisplayTrack.tsx

import React from 'react';
import { Track } from '../../data/tracks';

interface DisplayTrackProps {
    currentTrack: Track;
}

const DisplayTrack: React.FC<DisplayTrackProps> = ({ currentTrack }) => {
    return (
        <div>
            <audio src={currentTrack.src} controls />
            <div>
                <h2>{currentTrack.title}</h2>
                <p>Author: {currentTrack.author}</p>
                <p>Mood: {currentTrack.mood}</p>
            </div>
        </div>
    );
};
export default DisplayTrack;