import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



export default function Addexpenses(props) {
    let nav=useNavigate();
   
    const [compeny, setcompeny] = useState('')
    const [expensesnum, setexpensesnum] = useState('')
    
    
  return (
    <div>
        <input onChange={((e)=>{setcompeny(e.target.value)})}  type="text" name='compeny' />
        <input onChange={((e)=>{setexpensesnum(e.target.value)})}  type="number" name='expenses num'/>
        <button onClick={()=>{props.addExpenses(props.index,compeny,expensesnum);props.setflag(true)}}>Add expenses</button>
    </div>
  )
}
