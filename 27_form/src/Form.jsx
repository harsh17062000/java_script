import { useState } from "react"

const Frm = () =>
{

    const [inputvalue,setinput] = useState({
        username:'',
        age:'',
        contact:'',
        city:''
    })

    function input(event)
    {
        const {name,value} = event.target;
        setinput({
            ...inputvalue,
            [name]:value
        })
    }

    function finalsubmit(event)
    {
        event.preventDefault();
        console.log(inputvalue)
    }

    return(
        <>
        <form onSubmit={finalsubmit}>
            <label htmlFor="">Name</label>
            <input type="text" name="username" value={inputvalue.username} onChange={input} /><br /><br />
            <label htmlFor="">Age</label>
            <input type="text" name="age" value={inputvalue.age} onChange={input} /><br /><br />
            <label htmlFor="">Contact No : </label>
            <input type="text" name="contact" value={inputvalue.contact} onChange={input} /><br /><br />
            <label htmlFor="">City</label>
            <input type="text" name="city" value={inputvalue.city} onChange={input} /><br /><br />
            <input type="submit" />
        </form>
        </>
    )
}

export default Frm