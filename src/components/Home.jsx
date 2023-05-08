import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

export default function Home(props) {

    const nav=useNavigate();
    const [userr, setuserr] = useState('')
    const [pass, setpass] = useState('')
    const check=()=>{
        if(userr=='admin'&& pass=='admin'){
            nav('/Bankpage')
        }
        props.Costmer.forEach((val,index)=>{
         if(userr==val.user && pass==val.password)
         
          nav(`/CostumerPage/${index}`)
          
       })
       
       
    }
    
  return (
    <div>
        <h1>BANK</h1>
        <h3>to sign in to the banker's page 
          put admin in name & password
        </h3>
        <input onChange={((e)=>{setuserr(e.target.value)})} name="userr" type="text" /><br/>
        <input onChange={((e)=>{setpass(e.target.value)})} name="pass" type="password" /><br/>
         <h3 style={{color:'blue'}} onClick={()=>(nav('/Creatuser'))} >creat new user</h3>
        <button onClick={()=>{check()}}>go</button>

    </div>
  )
}
