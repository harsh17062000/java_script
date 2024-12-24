import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './box'

function App() {
  const [count, setCount] = useState(0)
  const [sh, setsh] = useState(false)

  useEffect(()=>{alert("call.....")},[count,sh])

  return (
    <>
      {count}
      <button onClick={()=>setCount(count+1)}>increment</button>
      <button onClick={()=>setsh(!sh)}>another</button>
      <Box />
    </>
  )
}

export default App
