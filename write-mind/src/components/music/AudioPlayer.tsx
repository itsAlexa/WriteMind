// src/components/AudioPlayer.tsx

import React, { useState, useEffect, useRef } from 'react';
import { tracks, Track } from '../../data/tracks';

const AudioPlayer: React.FC = () => {
    const [currentTrack, setCurrentTrack] = useState<Track>(tracks[0]);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const handleMoodButtonClick = (mood: string) => {
        const moodTracks = tracks.filter(track => track.mood === mood);
        const randomIndex = Math.floor(Math.random() * moodTracks.length);
        const randomTrack = moodTracks[randomIndex];
        setCurrentTrack(randomTrack);
        setIsPlaying(true);
    };

    useEffect(() => {
        // Check if the track has changed and audio is not playing
        if (isPlaying && audioRef.current) {
            audioRef.current.play();
        }
    }, [isPlaying, currentTrack]);

    return (
        <div>
            <audio
                ref={audioRef}
                src={currentTrack.src}
                onEnded={() => setIsPlaying(false)} // Pause when track ends
            />
            <button onClick={handlePlay}>Play</button>
            <button onClick={() => handleMoodButtonClick('happy')}>Happy</button>
            <button onClick={() => handleMoodButtonClick('sad')}>Sad</button>
            {/* Add other UI controls and components as needed */}
        </div>
    );
};

export default AudioPlayer;