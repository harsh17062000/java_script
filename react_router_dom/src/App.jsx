import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Service from "./Service"
import Layout from "./Layout"
import Contact from './Contact'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/About' element={<About />}/>
          <Route path='/Service' element={<Service />}/>
          <Route path='/Contact' element={<Contact />}/>
        </Route>
      </Routes>
  
    </>
  )
}

export default App
