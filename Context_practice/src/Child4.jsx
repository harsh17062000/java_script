import { createContext, useContext } from "react"
import { newdata } from "./Child2"


let location = createContext();
let city = "bhopal"

function Child4(){
    let {name,age} = useContext(newdata)
    return(
         <>
            Child4
            <h1>my name is {name} and age {age} </h1>

            <location.Provider value = {city}>
                <Child5 />
            </location.Provider>
        </>
    )
}
export default Child4