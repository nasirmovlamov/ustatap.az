import React from 'react'
import "../assets/css/componentsCss/ad.css"
import favorite from "../assets/images/component/element/heart.svg"
import calendar from "../assets/images/component/element/calendar.svg"
import eye from "../assets/images/component/element/eye.svg"

function Ad(props) {
    return (
        <div className="ad">
            <img src={props.image} alt="" className="mainImg"/>
            <div className="lineAd"></div>
            <div className="subCont">
                <div className="flexCont1">  <p>{props.name}</p>  <img src={favorite} alt=""/></div>
                <p className="nameCostumer">{props.costumer}</p>
                <div className="flexCont2">   <p>{props.address}</p>        <p><img src={calendar} alt=""/> {props.date}</p>    <p><img src={eye}  alt=""/>{props.view}</p> </div>
            </div>
        </div>
    )
}

export default Ad
