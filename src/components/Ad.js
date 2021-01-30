import React, { useEffect } from 'react'
import "../assets/css/componentsCss/ad.css"
import favorite from "../assets/images/component/element/heart.svg"
import calendar from "../assets/images/component/element/calendar.svg"
import eye from "../assets/images/component/element/eye.svg"
import {
    Link
} from "react-router-dom";
  import axios from 'axios'
function Ad(props) {
    const bgImg = {
        background: `url(http://ustatap.testjed.me/storage/app/public/${props.image})  no-repeat`,
        
    }
    const heartPost = () => {
        axios.post('http://ustatap.testjed.me/', {addFavorite:"add favorite"})
             .then(res => console.log(res))
             .catch(err => console.log(err))
    }
    const viewHandler = () => {
        axios.post('http://ustatap.testjed.me/', {increase:"View"})
             .then(res => console.log(res))
             .catch(err => console.log(err))
    }
    return (
        
            <div className="ad">
                <Link to={"/elanlar/secilmish-son-elan/" + props.id}>  <button className="mainImg" onClick={() => viewHandler()} style={bgImg}> </button> </Link>
                <div className="lineAd"></div>
                <div className="subCont">
                    <div className="flexCont1">  <p>{props.name + props.id}</p>  <button className="btnHeart" onClick={() => heartPost("SALAM")}><img src={favorite} alt=""/></button></div>
                    <p className="nameCostumer">{props.costumer}</p>
                    <div className="flexCont2">   <p>{props.address}</p>        <p ><img src={calendar} alt=""/> <pre className="dateAd"> {props.date} </pre></p>    <p><img src={eye}  alt=""/>{props.view}</p> </div>
                </div>
            </div>
            
    )
}

export default Ad
