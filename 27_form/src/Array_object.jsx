const Filter = () =>
{
    let arr = [2,4,1,4,6,4,3,54,7,774,3,32]
    const fil = arr.filter((e)=>{return e<3})
    console.log(fil)
    return(
        <>
           <ul>
            {
                fil.map((e,index)=>{return <li key={index}>{e}</li>  })
            }
           </ul>
        </>
    )
}

export default Filter