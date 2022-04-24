import React from "react";
import { useCallback,useState } from "react";
const Counter =()=>{
    const [Counter,setCounter]=useState(0)
      const Plus =useCallback(()=>{
       setCounter(Counter+1)
       if(Counter>5){
         throw new Error("Exceeded Buying Amount")
       }
      },[Counter])
      const Minus =()=>{
       setCounter(Counter-1)
       if(Counter<=0){
         setCounter(0)
       }
      }
    return(
        <ul>
        <li>
          <button onClick={Minus}>-</button>
          {Counter}
          <button onClick={Plus}>+</button>
        </li>
      </ul> 
    )
}
export default Counter;