import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Prompt from './components/Prompt/prompt';
import Editor from './components/editor/Editor';
import { useRef } from 'react';

function App() {
  const editorText = useRef('');

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
    </>
  )
}

export default App
