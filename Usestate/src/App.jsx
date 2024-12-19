import { useState } from 'react'

function App() {
  let [h, setH] = useState(false)

  let p = ''
  // function show()
  // {

    // (h)?"p = <h1>time is now</h1>" : " p='' "

    if(h)
    {
      p = <h1>time is now</h1>
    }
    else
    {
      p = ''
    }
  // }
  return (
    <>
      <button onClick={()=>setH(!h)}>show</button>
      {p}
    </>
  )
}

export default App
