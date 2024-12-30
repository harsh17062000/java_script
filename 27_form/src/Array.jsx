const Arr = () =>
{

    const ar = ['harsh' , 24 , 'bhopal']
    const arf2 = 
    [
        {
        id:'1',
        name:"harsh",
        age:"24"
        },
        {
        id:"2",
        name:"dhruv",
        age:"22"
        }
    ]

    const arff2 = arf2.map((e) => { return <h1 key={e.id}> {e.name} - {e.age} </h1>})
    const arf = ar.map((e,index) => { return <li key={index}> {e} </li>})
    
    return(
        <>
            { ar.map((e,index) => {return <h1 key={index}> {e} </h1>}) }

            <ul>
                <li> {arf} </li>
                <li> {arff2} </li>
            </ul>

            

        </>
    )
}

export default Arr