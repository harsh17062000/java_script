import { createContext } from "react"
import { data } from "./App"
import { cdata } from "./App"
import Child3  from "./Child3"

let newdata = createContext();
let name = "harsh"
let age = 24


function Child2(){
return(
    <>
    <cdata.Consumer>
        {
            (data)=>{
                return(
                    <h1>happy {data}</h1>
                )
            }
        }
    </cdata.Consumer>

    <newdata.Provider value = {{name,age}}>
        <Child3 />
    </newdata.Provider>
    </>
)

}
export default Child2
export { newdata }