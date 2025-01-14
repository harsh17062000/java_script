

function App() {

  let local = useLocation()

  let auth = local.pathname ==='/signup' || local.pathname === '/login'

  return (
    <>
      {!auth && <Header />}
      <Routes>
        <Route index element = {<Home />}/>
        <Route path="/about" element = {<About />}/>
        <Route path="/login" element = {<login />}/>
        <Route path="/Signup" element = {<Signup />}/>
      </Routes>
    </>
  )
}

export default App
