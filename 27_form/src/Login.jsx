import { useEffect, useState } from "react"

const Login = () =>
{
    const [inputvalue,setinput] = useState({
            username:'',
            age:'',
            contact:'',
            city:''
        })
        
        let [udata, setudata] = useState(null)

        function input(event) 
    {
        const {name,value} = event.target;
        setinput({
            ...inputvalue,
            [name]:value
        })
    }

    function finalsubmit(event) {
        event.preventDefault();
      
        if (
          
          inputvalue.username === udata.username &&
          inputvalue.age === udata.age &&
          inputvalue.contact === udata.contact &&
          inputvalue.city === udata.city
        ) {
          alert("Login successful");
        } else {
          alert("Not matched");
        }
      }
      

    useEffect(()=>{
        let logindata = JSON.parse(localStorage.getItem('userdata'))
        setudata(logindata)
    },[])

    return(
        <>
           <h1>login</h1>
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

export default Login