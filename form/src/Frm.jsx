import { useState } from "react"

const Frm = ()=>
{
    let [h, setH] = useState('')
    let [l, setL] = useState('')
    let [sb, setSb] = useState(false)

    function hinput(event)
    {
        console.log(event.target.value);
        setH(event.target.value)
    }

    function linput(event)
    {
        console.log(event.target.value)
        setL(event.target.value)
    }

    function sbb()
    {
        setSb(true)
    }

    return (
        <>
            <h1>my name is {sb ?  h : ''} </h1>
            <input type="text" onChange={hinput} />
            <h2>live in {l} </h2>
            <input type="text" onChange={linput} />

            <button onClick={sbb}>Submit</button>
        </>
    )
}

export default Frm