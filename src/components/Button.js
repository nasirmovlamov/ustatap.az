import React from 'react'
import "../assets/css/componentsCss/Button.css"
import arrowRight from "../assets/images/component/element/arrowRight.svg"

function Button(props) {
    const color = props.color
    return (
        
        <button style={{background:color}} className="button">
            <p className="text"> {props.name}  <img src={arrowRight}  className="img"/><img src={arrowRight} className="img"/></p> 
        </button>
    )
}

export default Button
