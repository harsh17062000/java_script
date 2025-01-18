import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {

   const [ticket, setTicket] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/Metro").then((r)=>{
            setTicket(r.data)
        })})
  return (
    <>
    <table>
        <thead>
            <th>ID</th>
            <th>Train No.</th>
            <th>From</th>
            <th>To</th>
            <th>Passengers</th>
        </thead>
        <tbody>
            {
                ticket.map((c,index)=> (
                    <tr key={index}>
                        <td>{c.train}</td>
                        <td>{c.from}</td>
                        <td>{c.to}</td>
                        <td>{c.passengers}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
    </>
  )
}

export default Dashboard