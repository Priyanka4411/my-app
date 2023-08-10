import React from 'react'

function Alert1(props) {
// const capital=(w)=>{
//     const a=w.toLowerCase();
//     return a.charAt(0).toUpperCase()+a.slice(1);
// }

    return (
        
            props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show` }role="alert">
                {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
                <strong>{props.alert.type}</strong>:{props.alert.msg}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        
    )
}

export default Alert1
