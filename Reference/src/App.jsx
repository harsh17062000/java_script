import { useRef } from "react"


function App() {
  let refelement = useRef("")
  let refchange = useRef("")
  console.log(refelement)

  function change()
  {
    if (refelement.current.innerHTML === "cybrom") {
      refelement.current.innerHTML = "hello";
      refelement.current.style.color = "blue";
    } else {
      refelement.current.innerHTML = "cybrom";
      refelement.current.style.color = "black";
    }
  }

  function change1()
  {
    refchange.current.style.backgroundColor = "blue"
  }

  function change2()
  {
    refchange.current.style.backgroundColor = "red"
  }

  return (
    <>
      <h1 ref={refelement}>cybrom</h1>
      <button onClick={change}>click</button>

      <div className="box" onMouseEnter={change1} onMouseLeave={change2} ref={refchange}
            style={{width:"100px",
            height:"100px",
            background:"red"}}>

      </div>
      
    </>
  )
}

export default App
