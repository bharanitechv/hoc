import React, { useState } from 'react'

function Form(){
    const userRef = React.useRef(null)
    const [userName, setUserName] = useState('')
   
    const submit = (e) => {
        e.preventDefault()
        
        setUserName(() => userRef.current.value)
        console.log("userName-->", userName)
    }
    return(
        <form onSubmit={submit}>
            <div>
                <input type='text' ref={userRef}/>
                <button>submit</button>
            </div>
        </form>
    )
}
export default Form