import Navbar from "./Navbar"
import { Route,Routes } from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import About from "./About"
function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="about/:name/:age" element={<About />} />
        <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
