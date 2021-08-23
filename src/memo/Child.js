import React from 'react'

function Child(props) {
     console.log("props--", props.val)
    return (
        <div>
            {props.val.fname}
        </div>
    )
}

export default React.memo(Child, (pv, np) =>{
    console.log("pv--->", pv.val.fname, "next---->", np.fname)
    if(pv.val.fname === np.val.fname){
        console.log("true")
return true
    }
    
    else{
        console.log("false")
 return false
    }
   
})


