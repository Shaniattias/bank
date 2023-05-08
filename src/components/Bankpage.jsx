import React, { useState } from 'react'

export default function Bankpage(props) {

  const [flag, setflag] = useState(false);
  const showit = (i) => {
    if (flag == false) {
      return <button onClick={() => { props.clear(i) }}>X</button>
    }
    else {
      changeflag()
    }
  }
  const changeflag = () => {
    setflag(!flag)
  }
  
  return (
    <div>
      {props.Costmer.map((val, indexcust) => {
        return (<div>
          {val.user} {val.id}<button onClick={() => { props.changstatus(indexcust); setflag(true) }}>show</button>
          {val.status &&
            val.expenses.map((val, index) => {
              return (<div>
                {val.typecompeny}-{val.expensesnum}<button onClick={() => { props.clearpost(indexcust, index) }}>clear</button>
              </div>)
            })}
          {val.status && showit(indexcust)}
        </div>)
      })}
    </div>
  )
}
