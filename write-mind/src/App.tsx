import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';

function App() {

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
    <div>
      <h1>"Writing Prompt."</h1>
    </div>
    </>
  )
}

export default App
