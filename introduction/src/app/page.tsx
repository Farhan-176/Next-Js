'use client'
import { useState } from "react";
import User from "./User";

export default function Home() {

const [name , setName] = useState("farhan");

// first way calling function

  const alertme = ()=>{
    alert("hello it is event handler")
}

// state is use to update the variable realtime and  which will re render the whole component 
// Second way calling function

const fruit = (item:any)=>{
  alert(item)
}

  const changename = ()=>{
  setName ("farhan afridi")
}

  return (

    <>
    <h1>topics covered </h1>
    <h3>Components</h3>
    <h3>reuse Components</h3>
    <h3>Data Passing Component</h3>
    <h3>states ,function , events</h3>
    <h1>topic list end</h1>

    <h3>{name}</h3>
    <button onClick={()=>changename()}>click for state change == the name will be change</button>
    
    <br />
    <button onClick={alertme}>for Event Declared</button>
    <br />
    <button onClick={()=>fruit("apple")}>for calling function</button>


    <User name= "farhan"/>
    </>

  );
}
