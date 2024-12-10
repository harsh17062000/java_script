const Child2 = (props) =>{
    let {fname,lastname} = props
    return(
        <>
        <h1 style={{textAlign:"center"}}>From Child 2 {fname}{lastname}</h1>
        </>
    )
}

export default Child2