import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from "./pages/MainPage.jsx";
import About from "./pages/About.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <About/>
    </>
  )
}
export default App