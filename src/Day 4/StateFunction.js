import { useState }from 'react'
export default function StateFunction()
{
    const[carName,setCarName]=useState("Thar");

    const[count,setCount]=useState(0);
    const changeCount=()=>setCount(count+1)
    const decrCount=()=>setCount(count-1)
    return(
        <div>
            <h1>my car name is {carName}</h1>
            <button onClick={()=>setCarName("creta")}>Click me</button>
            <h1>Count {count}</h1>
            <button onClick={changeCount}>Increment</button>
            <button onClick={decrCount}>drecrement</button>
        </div>
    )
}