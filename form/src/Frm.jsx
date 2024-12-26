import { useState } from "react"

// const Frm = ()=>
// {
//     let [h, setH] = useState('')
//     let [l, setL] = useState('')
//     let [sb, setSb] = useState(false)

//     function hinput(event)
//     {
//         console.log(event.target.value);
//         setH(event.target.value)
//     }

//     function linput(event)
//     {
//         console.log(event.target.value)
//         setL(event.target.value)
//     }

//     function submit()
//     {
//         setSb(true)
//     }

//     return (
//         <>
//             <h1>my name is {sb ?  h : ''} </h1>
//             <input type="text" onChange={hinput} />
//             <h2>live in {sb ? l : ''} </h2>
//             <input type="text" onChange={linput} />
//             <br /><br />
//             <button onClick={submit}>Submit</button>
//         </>
//     )
// }



const Frm = () =>
{
    let [inputname, setinput] = useState({
        username:'',
        address:''
    })

    const hinput = (event) =>
    {
        const {name,value} = event.target;
        setinput({
            ...inputname,
            [name]:value
        })
    }
        const finalsubmit = (event) =>
        {
            event.preventDefault();
            console.log(inputname)
        }
        return(
            <>
                <form onSubmit={finalsubmit}>
                    <label htmlFor="">Name</label>
                    <input type="text" name = "username" value = {inputname.username} onChange = {hinput} />
                    <br /> <br />
                    <label htmlFor="" >Address</label>
                    <input type="text" name="address" value={inputname.address} onChange = {hinput} />
                    <br /><br />
                    <input type="submit" />
                </form>
            </>
        ) 
}

//spread operator rest opera
// tor
export default Frm