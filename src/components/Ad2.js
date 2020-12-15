import React from 'react'
import "../assets/css/componentsCss/ad2.css"
import star from "../assets/images/component/element/star.svg"
import location from "../assets/images/component/element/location.svg"
import heart from "../assets/images/component/element/heart.svg"

function Ad2(props) {
    return (
        <div className="mastersCont">
             <img src={props.image} alt="Usta" className="masterImg"/>
            <div className="aboutText">
                <p className="name">{props.name}</p>
                <p className="job">{props.job}</p>
                <p className="location"><img src={location} alt="location"/> {props.address}</p>
                <div className="stars"><img src={star} alt="ulduz"/> <img src={star} alt="ulduz"/> <img src={star} alt="ulduz"/> <img src={star} alt="ulduz"/> <img src={star} alt="ulduz"/></div>
                <img className="heart" src={heart} alt="ürək"/>
            </div> 
        </div>
    )
}

export default Ad2
