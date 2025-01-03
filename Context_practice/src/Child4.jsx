import { createContext, useContext } from "react";
import { newdata } from "./Child2";
import Child5 from "./Child5";

export const location = createContext();

const city = "bhopal";

function Child4() {
  const { name, age } = useContext(newdata); // Assuming newdata is a valid context

  return (
    <>
      <div>
        Child4
        <h1>My name is {name} and age {age}</h1>
      </div>

      <location.Provider value={{ city }}>
        <Child5 />
      </location.Provider>
    </>
  );
}

export default Child4;
