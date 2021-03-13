import React from 'react'
import {
    Link,
  } from "react-router-dom";
import '../assets/css/componentsCss/cardMemberArea.css'

function CardMemberArea(props) {
    const functionHandler = () =>{
        if(props.func !== undefined)
        {
            props.func()
        }
    }
    return (
        <Link to={props.link}>
            <button onClick={functionHandler} className="cardMember">
                <div className="outline">
                    <img src={props.img} alt="" className="topImg"/>
                    <hr/>
                    <p className="title">{props.title}</p>
                </div>
            </button>
        </Link>
    )
}

export default CardMemberArea
