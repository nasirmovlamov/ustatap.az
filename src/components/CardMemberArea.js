import React from 'react'
import {
    Link,
  } from "react-router-dom";
import '../assets/css/componentsCss/cardMemberArea.css'

function CardMemberArea(props) {
    return (
        <Link to={props.link}>
            <div className="cardMember">
                <div className="outline">
                    <img src={props.img} alt="" className="topImg"/>
                    <hr/>
                    <p className="title">{props.title}</p>
                </div>
            </div>
        </Link>
    )
}

export default CardMemberArea
