import React from 'react'
import { cdata } from './App'


const Child2 = () => {
  return (
    <>
       <cdata.Consumer>
         {
            (data)=>{
                return(
                    <h1>hell {data}</h1>
                )
            }
         }

       </cdata.Consumer>
    </>
  )
}

export default Child2