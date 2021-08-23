import React, { useEffect, useState } from 'react'
import Form from './Form'

function FormControl(){
    const [data, setData] = useState([{age:15, name:'', id:1}, {age:15, name:'', id:2}])
    const submit = (e) =>{
        e.preventDefault()
        console.log("display-->", data)
    }
    const onChangeHandler = (e) => {
        const res = data.map((arr)=> arr.id == e.target.id ? {...arr, [e.target.name]:e.target.value} : arr)
        setData(res)
        
    }
    useEffect(()=> {
       console.log("useEffect--->", data)
    }, [data])
    return(
        <form onSubmit={submit}>
            
                {
                    data.map((obj) => 
                        
                            (
                            <div key={obj.id}>
                            <label>Name: </label><input id={obj.id}  type="text" name={Object.keys(obj)[1]} value={obj.name} onChange={onChangeHandler}/>
                            <label>Age: </label> <input id={obj.id} type="text" name={Object.keys(obj)[0]} value={obj.age} onChange={onChangeHandler}/>
                        </div>
                        
                    ))

                }
                
                <button>submit</button>
           
        </form>
    )
}
export default FormControl