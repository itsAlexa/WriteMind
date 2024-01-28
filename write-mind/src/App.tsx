import { useEffect, useRef, useState } from "react";
import Editor from "./components/editor/Editor";
import { sentimentObject } from "./types/sentiment/Sentiment";
import periodicallyCallSentimentApi from "./hooks/SentimentAnalysis";
import playBackgroundMusic from "./hooks/BackGroundMusic";
import song from './music/lofi.mp3'

function App() {
  const editorText = useRef('');
  const music = useRef(null);
  const [isMusicFading, setisMusicFading] = useState(false);
  const [textSentiment, setTextSentiment] = useState(undefined)

  const playDefaultMusic = () => {
    if (music.current) {
      music.current.play();
    }
  };

  const pauseMusic = () => {
    if (music.current) {
      music.current.pause();
    }
  };

    // hook to enable fading out of music on change
    const changeMusicSource = (source) => {
      if (music.current) {
        setisMusicFading(true);
  
        const fadeOutDuration = 1000; // 1 second fade-out duration
  
        const fadeOut = () => {
          const currentVolume = music.current.volume;
          const volumeStep = currentVolume / (fadeOutDuration / 20); // Adjust the step size for smoother fading
  
          if (currentVolume > volumeStep) {
            music.current.volume -= volumeStep;
            setTimeout(fadeOut, 20); // Adjust the interval for smoother fading
          } else {
            music.current.pause();
            music.current.volume = 1;
            music.current.currentTime = 0;
  
            music.current.src = source;
            music.current.load();
  
            music.current.addEventListener('canplaythrough', () => {
              music.current.play();
              setisMusicFading(false);
            });
          }
        };
  
        fadeOut();
      }
    };
  
  useEffect(() => {
    if (isMusicFading) {
      pauseMusic();
    }
  }, [isMusicFading]);

  // hook to call the sentiment analysis api and update text sentiment
  useEffect(periodicallyCallSentimentApi(editorText, setTextSentiment), []);

  // hook to use the text sentiment to change background music
  useEffect(playBackgroundMusic(textSentiment, playDefaultMusic, changeMusicSource), [textSentiment]);

  return (
    <>
      <Editor textRef={editorText}/>
      <audio autoplay={true} ref={music} src={song} />
    </>
  )
}

export default App