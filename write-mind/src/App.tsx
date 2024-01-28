import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Prompt from "./components/prompt/prompt";
import Editor from "./components/editor/Editor";
import periodicallyCallSentimentApi from "./hooks/SentimentAnalysis";
import playBackgroundMusic from "./hooks/BackGroundMusic";
import defaultSong from './music/default.mp3'

function App() {
  const editorText = useRef('');
  const music = useRef(null);
  const [textSentiment, setTextSentiment] = useState(undefined)

  const playDefaultMusic = () => {
    if (music.current) {
      music.current.play();
    }
  };

    // hook to enable fading out of music on change
    const changeMusicSource = (source) => {
      if (music.current) {
        const fadeOutDuration = 2000; // 1 second fade-out duration
        const initialVolume = music.current.volume;

        music.current.volume = initialVolume;

        const fadeOutInterval = setInterval(() => {
          if (music.current.volume > 0.05) {
            music.current.volume -= 0.05; // Adjust the step size for smoother fading
          } else {
            clearInterval(fadeOutInterval);
            music.current.pause();
            music.current.volume = initialVolume;
            music.current.src = source;
            music.current.load();
            music.current.play();

            const fadeInInterval = setInterval(() => {
              if (music.current.volume < 0.95) {
                music.current.volume += 0.05; // Adjust the step size for smoother fading
              } else {
                clearInterval(fadeInInterval);
              }
            }, fadeOutDuration / 20); // Adjust the interval for smoother fading
          }
        }, fadeOutDuration / 20); // Adjust the interval for smoother fading
      }
    };

  // hook to enable auto replay if the music ends
  useEffect(() => {
    const handleEnded = () => {
      if (music.current) {
        music.current.currentTime = 0;
        music.current.play();
      }
    };

    if (music.current) {
      music.current.addEventListener('ended', handleEnded);
    }

    return () => {
      if (music.current) {
        music.current.removeEventListener('ended', handleEnded);
      }
    };
  }, [music]);

  // hook to call the sentiment analysis api and update text sentiment
  useEffect(periodicallyCallSentimentApi(editorText, setTextSentiment), []);

  // hook to use the text sentiment to change background music
  useEffect(playBackgroundMusic(textSentiment, playDefaultMusic, changeMusicSource), [textSentiment]);

  return (
    <>
      <BrowserRouter>
        <NavBar>
          <Routes>
              <Route path="/">
              </Route>
              <Route path="/">
              </Route>
          </Routes>
        </NavBar>
      </BrowserRouter>
      <Prompt></Prompt>
      <Editor textRef={editorText} />
      <audio autoplay={true} ref={music} src={defaultSong} />
    </>
  )
}

export default App