import React, { useState } from 'react'
import Addexpenses from './Addexpenses';
import { Link } from 'react-router-dom';


export default function Costmerpage(props) {
  const [flag, setflag] = useState(true);

  const show = () => {
    if (flag == false) {
      return <div><Addexpenses addExpenses={props.addExpenses} index={props.index} setflag={setflag} /> </div>

    }
    else {
      return <div><button onClick={changeflag} >action </button></div>
    }
 }

  const changeflag = () => {
    setflag(!flag)
  }

  const Balance=()=>{
   let num=props.money;
   alert ('money'+num +'$')
  }
  return (
    <div>
     <h1>hello {props.user}</h1>
       <button onClick={()=>{Balance()}} >balance</button><br/>
       {show()}
      <Link to={'/Edite'} ><button >edite</button></Link><br/>
      <Link to={'/'} ><button >exite</button></Link><br/>
    </div>
  )
}
