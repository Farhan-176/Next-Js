'use client'
import { useState } from "react"


type Countertype ={
    message: string,
    count: number,
}



export default function Counter({message,count}:Countertype){

    const [num, setNum] = useState(count)

    const Addnum = ()=>{
        setNum(num+1)
        console.log("it is work");
        
    }
    
    
    const subnum = ()=>{
        setNum(num-1)
        console.log("it is work");
    }


    return(
        <>
        <h1>{message}</h1>
        <h2>{num}</h2>
        <button onClick={Addnum}>Add</button>
        <button onClick={subnum}>Minus</button>
        </>
    )
}