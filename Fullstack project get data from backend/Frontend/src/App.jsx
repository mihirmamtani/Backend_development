import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";

function App() {
 const [jokes, setjokes]= useState([]);
 useEffect(()=>{
  axios.get('/api/jokes')
  .then((res)=>
    setjokes(res.data)
  )
  .catch((error)=>{console.log(error)})

 })
  return (
    <>
  <h1> code with Mihir</h1>
  <p>Jokes {jokes.length}</p>
  {jokes.map((jokes,index)=>(
    <div>
      <h4>{jokes.title}</h4>
      <p>{jokes.content}</p>
    </div>
  ))}
    </>
  )
}

export default App
