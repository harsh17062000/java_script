const Arr = () =>
{

    const ar = ['harsh' , 24 , 'bhopal']
    const arf2 = 
    [
        {
        name:"harsh",
        age:"24"
        },
        {
        name:"dhruv",
        age:"22"
        }
    ]

    const arf = ar.map((e,index) => { return <li key={index}> {e} </li>})
    
    return(
        <>
            { ar.map((e,index) => {return <h1 key={index}> {e} </h1>}) }

            <ul>
                <li> {arf} </li>
            </ul>
        </>
    )
}

export default Arr