import React from 'react'
import "../assets/css/componentsCss/Button.css"
import arrowRight from "../assets/images/component/element/arrowRight.svg"

function Button(props) {
    const styleButton = {
        width: props.width,
        height: props.height,
        background: props.color,
    }
    const styleP = {
        fontSize: props.fontSize
    }
    return (
        
        <button style={styleButton} className="button">
            <p className="text" style={styleP}> {props.name}  { props.only ===undefined && (<img src={arrowRight}  className="img"/>)}<img src={arrowRight} className="img"/></p> 
        </button>
    )
}

export default Button
