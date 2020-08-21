import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

function App() {

  
 
  const products =[
    {name : 'pdf', price:'$30.00'},
    {name : 'imo', price:'$00.00'},
    {name : 'im', price:'$00.00'}
  ]
  const name =['kalu', 'salu']

  
  return (
    <div className="App">
      <header className="App-header">
        <p>i am recat person</p>
        {
          name.map(pr=><Persion name={pr}></Persion>)
        }

        {
          products.map(pd=><Product products={pd}></Product>)
        }
        <Counter></Counter>
        <User></User>

        <Product products={products[0]}></Product>
        <Product products={products[1]}></Product>
      
      <Persion name='salam' job='doctor'></Persion>
      <Persion name='kalam' job='teacher'></Persion>
      </header>
    </div>
  );
}
function Product(pops){
  const produtStyle={
  border:'1px solid gray',
  margin :'10px',
  backgroundColor:'cyan',
  hight:'150px',
  width:'200px'

}
const {name, price} = pops.products
return(
  <div style={produtStyle}> 
  <h5 >{name}</h5>
  <h2>{price}</h2>
  <button>by now</button>
  </div>
)
}



function Persion(pops){
  const style ={
    border :'2px solid cyan',
    margin :'10px',
    width :'500px'
  }

  return (
    <div  style={style}>
      <h1 > Name: {pops.name}</h1>
      <h3>proffesion: {pops.job}</h3>
    </div>
  )
}

function Counter(){
  const [count, setCount] =useState(1);

  return(
    <div>
      <h1>count{count}</h1>
      <button onClick={()=>setCount(count+1)}>increase</button>
      <button onClick={()=>setCount(count-1)}>decrease</button>
    </div>
  )
}
function User(){
  const [user, setuser]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setuser(data))
  }, [])
  return (
    <div>
      <h1>daynamic user</h1>
      <ul>
        {
          user.map(user=> <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
