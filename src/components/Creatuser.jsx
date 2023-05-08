import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Creatuser(props) {
    const nav=useNavigate()
    const [id, setid] = useState('')
    const [user, setuser] = useState('')
    const [password, setpassword]= useState('')
    const [pass2, setpass2] = useState('')
    const [money, setmoney] = useState('')

    const checkditail=()=>{

        if (id.length != 9 || !Number(id)) {
          alert("id");
        } else if (user == "" || user.length < 4) {
          alert("name");
        } else if (password.length < 6 || password == "") {
          alert("pas");
        } else if (password != pass2) {
          alert("conpas");
        } else if (money == "" || !Number(money)) {
          alert("money");
        } else {
          props.Costmerdetails(id,user,password,pass2,money)
            nav('/')
        }
        
        
       
    }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h1>Enter your details</h1>
    <input onChange={((e)=>{setid(e.target.value)})} type="text" name="setid" placeholder='setid' />
    <input onChange={((e)=>{setuser(e.target.value)})} type="text" name="setuser" placeholder='setuser' />
    <input onChange={((e)=>{setpassword(e.target.value)})} type="text" name="setpassword" placeholder='setpassword' />
    <input onChange={((e)=>{setpass2(e.target.value)})} type="text" name="setpass2" placeholder='setpass2' />
    <input onChange={((e)=>{setmoney(e.target.value)})} type="text" name="setmoney" placeholder='setmoney' />
    <button onClick={()=>{checkditail()}} >creat</button>
   
    </div>
  )
}
