import { useState } from "react";

let Form = () => {
    let [nam, setname] = useState('');   
    let [eml, seteml] = useState('');
    let[con, setCon] = useState('')   
    let [sbt, setSbt] = useState(false)
    
    function nameinput(event) {
        setname(event.target.value);
    }

    
    function emailinput(event) {
        seteml(event.target.value);
    }

    function Submit()
    {
        setSbt(true)
    }

    function numinput(event)
    {
        setCon(event.target.value)
    }

    return (
        <>
            <div className="Container">
                <h1>My name is {sbt ? nam : ''}</h1>
                <input 
                    type="text" 
                    onChange={nameinput} 
                    placeholder="Enter your name"  
                    style={{ width: "300px", height: "40px", border: "none", borderBottom: "2px solid black", marginBottom: "10px" }}
                />
                <h2>Email ID : {sbt ? eml : ''}</h2>
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    onChange={emailinput} 
                    style={{ width: "300px", height: "40px", border: "none", borderBottom: "2px solid black" }} 
                />

                <h3>Contact No : {sbt ? con : ''}</h3>
                <input type="text" placeholder="enter contact number" onChange={numinput}
                style={{ width: "300px", height: "40px", border: "none", borderBottom: "2px solid black" }} />
                <br /><br />
                <button onClick={Submit}
                 style={{   width: "30px",
                            height: "20px",
                            border: "none",
                            border: "2px solid black"
                         }}>submit</button>

            </div>
        </>
    );
}

export default Form;
