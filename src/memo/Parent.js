import React, { useEffect, useState } from 'react'
import Child from './Child'

function Parent() {
    const [val, setVal] = useState({fname:'t', lname:'v'})
    console.log("parr")

   useEffect(()=> {
        console.log("first")
        setVal({fname:'t111', lname:'v11'})
   }, [])
    return (
        <div>
            <Child val={val}/>
        </div>
    )
}

export default Parent
