import Child2 from './Child2'

const Child1 = (props) => {
    return(
        <>
            <h1 style={{textAlign:"center"}}>{props.Name}</h1>
            <Child2 fname = {props.Name} lastname = {props.lname}/>
        </>
    )
} 
export default Child1