import { createContext } from "react"
import Child1 from "./Child1";


let cdata = createContext();
let data = "new year";

function App() {
 

  return (
    <>
    <h1>fsdfs</h1>
       <cdata.Provider value={data}>
     
        <Child1 />

       </cdata.Provider>
    </>
  )
}
export {cdata}
export default App
