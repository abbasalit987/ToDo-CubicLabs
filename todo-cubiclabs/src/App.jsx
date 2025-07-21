import { useState, React } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom";
import HomePage from './components/HomePage/HomePage.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
