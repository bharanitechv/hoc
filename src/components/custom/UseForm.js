import React, { useState } from 'react'
import useInput from './useInput'

export const UseForm = () => {
    const [firstName, bindFirst, resetFirst] = useInput('')
     const [lastName, bindLast, resetLast] = useInput('')
     const submitHandler = (e) => {
        e.preventDefault()
        alert(`${firstName} ${JSON.stringify(bindFirst)}`)
     }
    return(
        <form onSubmit={submitHandler}>
            <div>
                <label>First Name</label>
                <input type="text" {...bindFirst}/>
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" {...bindLast}/>
            </div>
            <button>submit</button>
        </form>
    )
}