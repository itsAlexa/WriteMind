import { useState, useEffect} from 'react'
import ReactQuill from 'react-quill'
import './App.css'
import 'react-quill/dist/quill.snow.css'
import ReactAudioPlayer from 'react-audio-player'

function App() {
  const [value, setValue] = useState('');
  const [savedText, setSavedText] = useState('');

  // Function to handle text change in the editor
  const handleTextChange = (content: string) => {
    setValue(content);
  };

  // Function to update the variable with the current text content
  const updateSavedText = () => {
    setSavedText(value);
  };

  // Use useEffect to set up the interval
  //you should process the text here through the API
  useEffect(() => {
    const intervalId = setInterval(updateSavedText, 5000); // Update every 5 seconds

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [value]); // Only re-run the effect if the 'value' state changes

  return (
    <div>
      <ReactQuill theme='snow' value={value} onChange={handleTextChange} />

      <div>
        <h2>Saved Text:</h2>
        <p>{savedText}</p>
      </div>
    </div>
  );
}

export default App
