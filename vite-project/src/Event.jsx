const Event = () =>{
    function cl(){
        alert("clicked")
    }

    function db(){
        alert("double click")
    }

    function enter(){
        let a = document.querySelector("#div")
        a.style.backgroundColor = "red"
    }
    return(
    <>
        <button onClick={cl}>Click here</button>
        <button onDoubleClick={db}>double click</button>
        <div id="div" style={{backgroundColor:"blue",width:"200px" ,height:"200px"}} onMouseEnter={enter} >
        </div>
    </>
    )
    
}
export default Event