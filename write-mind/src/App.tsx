import { useEffect, useRef } from "react";
import Editor from "./components/editor/Editor";
import periodicallyCallSentimentApi from "./hooks/SentimentAnalysis";

function App() {
  const editorText = useRef('');

  // useEffect(() => {
  //   if (quill) {
  //     quill.on('text-change', (e) => {
  //       const text = quill.getText();
  //       console.log(text);
  //     });
  //   }
  // }, [quill]);

  useEffect(periodicallyCallSentimentApi(editorText), []);

  return <Editor textRef={editorText}/>
}

export default App