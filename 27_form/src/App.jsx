import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Frm from './Form'
import Arr from './Array'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Frm />
      <Arr />

    </>
  )
}

export default App
