import React, { useContext } from 'react'

function Child6() 
{
    const {city} =  useContext(location)
  return 
  (
    <div>Child6

        <h1>live in {city} </h1>
    </div>
  )
}

export default Child6
