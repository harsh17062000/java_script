// import './App.css'

import Event from './event.jsx'
import Hero from './hero.jsx'
import Nav from './Navbar.jsx'
import Child1 from './Child1.jsx'

let a = prompt("Enter your name:")
let b = prompt("Enter your lname:")

function App()
{

  
  return(
    <>
      <Nav/>
      {/* <Child1 Name = "Harsh" /> */}
      <Child1 Name = {a} lname = {b} />
      <Hero/>
      <Event/>
    </>
  )
}

export default App