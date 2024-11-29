import { createElement, useState } from 'react'
import './App.css'

function App() {
  //let a = createElement("h1",[],"hello from element")
  let name = "harsh";
  let obj = {
    fname : "harsh gupt",
    age :24
  }

  return (
    //a
    <>
    <h1>my name is {name}</h1>

    <h2>{obj.fname}</h2>

    <h3>{obj.age}</h3>
    </>
  )
}

export default App
