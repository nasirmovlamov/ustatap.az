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
    const clickHandler = () =>{
        props.function()
    }
    
    return (
        
        <button type={props.type} onClick={() => clickHandler()} style={styleButton} className="button">
            <p className="text" style={styleP}><img src={props.image2} alt=""/> {props.name}  <p> { props.only ===1 && (<img src={arrowRight}  className="img"/>)} {props.only2 === 2 && (<img src={arrowRight} className="img"/>)} </p></p> 
        </button>
    )
}

export default Button
