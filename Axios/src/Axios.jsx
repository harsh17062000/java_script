import axios from "axios"
import { useEffect, useState } from "react"

const Axios = () =>
{
    let[apidata,setApidata] = useState([])
    let [frminp , setFrminp] = useState({
        name:"",
        age:"",
        contact:"",
        city:""
    })

    const changeinp = (e) =>{
        let {name , value} = e.target;
        setFrminp ({...frminp,[name]:value})
    }

    const submitform = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3000/student',frminp)
        .then (re => alert("inserted"))  

    }
    const mydel = (id) =>
        {
            axios.delete(`http://localhost:3000/student/${id}`)
            .then(re=>alert("deleted"))
        }
        
    useEffect(()=>{

        axios.get("http://localhost:3000/student")
        .then(res=>{
            console.log(res.data)
            setApidata(res.data)
        })
    },[mydel])

    return(
        <>
         {/* <ul>
            {apidata.map((e) => (
                <li key={e.id}>{e.title}</li> 
            ))}
         </ul>             */}

         <table border="">
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Contact</th>
                <th>City</th>
                <th>Delete</th>
            </thead>
            <tbody>
                {
                    apidata.map((e)=>{return <>
                        <tr>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.age}</td>
                            <td>{e.contact}</td>
                            <td>{e.city}</td>
                            <td><button onClick={()=>mydel(e.id)}>delete</button></td>
                        </tr>
                    </>})
                }
            </tbody>
         </table>

         <form onSubmit={submitform}>
            <label htmlFor="">Name</label>
            <input type="text" value={frminp.name} name="name" onChange={changeinp}/>
            <br />

            <label htmlFor="">Age</label>
            <input type="text" value={frminp.age} name="age" onChange={changeinp}/>
            <br />

            <label htmlFor="">contact</label>
            <input type="text" value={frminp.contact} name="contact" onChange={changeinp}/>
            <br />

            <label htmlFor="">city</label>
            <input type="text" value={frminp.city} name="city" onChange={changeinp}/>
            <br />

            <input type="submit" />
         </form>
        </>
    )
}

export default Axios