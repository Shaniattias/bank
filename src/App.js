import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Costmerpage from './components/Costmerpage';
import Bankpage from './components/Bankpage';
import Creatuser from './components/Creatuser';
import Edite from './components/Edite'
import { useState } from 'react';



function App() {
  const [Costmer, setCostmer] = useState([]);
  const Costmerdetails=(id,user,password,pass2,money)=>{
    setCostmer([...Costmer,{id,user ,password,pass2,money,expenses:[],status:false}]);
  }
  const addExpenses=(index,typecompeny,expensesnum)=>{
    let temp={typecompeny:typecompeny,expensesnum:expensesnum}
    Costmer[index].expenses.push(temp)
    setCostmer([...Costmer])
   }
   const clear=(i)=>{
    Costmer.splice(i,1)
    setCostmer([...Costmer])
   }
   const clearpost=(iofcust,iofexp)=>{
    Costmer[iofcust].expenses.splice(iofexp,1)
    setCostmer([...Costmer])
   }

   const changstatus=(index)=>{
    Costmer[index].status=!Costmer[index].status
    setCostmer([...Costmer])
   }

  return (
    <div className="App" >
      <BrowserRouter>
      <Routes>
        <Route path='*' element={<Home Costmer={Costmer} /> }/>
        <Route path='/Creatuser' element={<Creatuser Costmerdetails={Costmerdetails} />}/>
        <Route path='/Bankpage' element={<Bankpage Costmer={Costmer} clearpost={clearpost} addExpenses={addExpenses} clear={clear} changstatus={changstatus} />}/>
        {Costmer.map((val,index)=>{
        return <Route path={`/CostumerPage/${index}`} element={<Costmerpage addExpenses={addExpenses}
         index={index}  id={val.id} user={val.user} password={ val.password} money={val.money}
         expenses={val.expenses}/>}/>
       })}
      {Costmer.map((val,index)=>{
        return <Route path={'/Edite'} element={<Edite addExpenses={addExpenses}
         index={index}  id={val.id} user={val.user} password={ val.password} money={val.money}
         expenses={val.expenses}/>}/>
       })}
  

       
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
