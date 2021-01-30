import React from 'react'
import "../assets/css/componentsCss/input.css"
function Input(props) {
    return (
        <input type={props.type} className="inputComponent" name={props.name} placeholder={props.placeholder}/>
    )
}

export default Input
