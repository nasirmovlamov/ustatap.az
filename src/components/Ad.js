import React from 'react'
import "../assets/css/componentsCss/ad.css"
import favorite from "../assets/images/component/element/heart.svg"
import calendar from "../assets/images/component/element/calendar.svg"
import eye from "../assets/images/component/element/eye.svg"
import {
    Link
  } from "react-router-dom";
function Ad(props) {
    return (
        

       
        
        <Link to={"/elanlar/secilmish-son-elan/" + props.id}>
            <div className="ad">
                <img src={ "http://ustatap.testjed.me/storage/app/" + props.image} alt="" className="mainImg"/>
                <div className="lineAd"></div>
                <div className="subCont">
                    <div className="flexCont1">  <p>{props.name + props.id}</p>  <img src={favorite} alt=""/></div>
                    <p className="nameCostumer">{props.costumer}</p>
                    <div className="flexCont2">   <p>{props.address}</p>        <p><img src={calendar} alt=""/> {props.date}</p>    <p><img src={eye}  alt=""/>{props.view}</p> </div>
                </div>
            </div>
        </Link>
         

            
    )
}

export default Ad
