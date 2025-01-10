import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

 function About() {

    let {name,age} = useParams()
    console.log(name)
    let nav = useNavigate()

    function contactpage()
    {
        nav('/contact')
    }

  return (
    <>
        <h1>About</h1>
        <h2>my name is {name} age {age}</h2>
        <button onClick={contactpage}> Contact us </button>
    </>
  )
}

export default  About
