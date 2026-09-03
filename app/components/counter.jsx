"use client"
import { useState } from "react";

export default function Counter(){
    const [counter,setCounter]=useState(0);

    return(
        <div>
            <h1>Counter:{counter}</h1>
            <button onClick={()=>setCounter(counter+1)}>Incriment</button>
            <button onClick={()=>setCounter(counter-1)}>Decriment</button>
        </div>
    )
}