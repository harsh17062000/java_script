import { useEffect, useState } from 'react'
function Box (){
let[cl,setColour]=useState('yellow')
useEffect(()=>alert("color change"),[cl])
    function red(){
    setColour('red')
    
    }
    function blue(){
    setColour("skyblue")
    
    }
    function green(){
    setColour('green')
   
    }
    function pink(){
    setColour('pink')
    
    }
    
    


    return(
        <> 
        <div style={{height:"50vh",width:"50vw",border:"4px solid purple",marginTop:"100px",marginBottom:"50px",backgroundColor:cl}} id="box">

        </div>
        <div style={{display:"flex",gap:"40px"}}>
        <button onClick={red} style={{padding:"15px 30px",backgroundColor:"red",border:"none",outline:"none",borderRadius:"12px"}}></button>
        <button onClick={blue} style={{padding:"15px 30px",backgroundColor:"skyblue",border:"none",outline:"none",borderRadius:"12px"}} ></button>
        <button onClick={green} style={{padding:"15px 30px",backgroundColor:"green",border:"none",outline:"none",borderRadius:"12px"}}></button>
        <button onClick={pink} style={{padding:"15px 30px",backgroundColor:"pink",border:"none",outline:"none",borderRadius:"12px"}}></button>
        </div>
        <br /><br />
 
      

        </>
    )
}
export default Box