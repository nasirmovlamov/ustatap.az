import React from 'react'
import "../assets/css/componentsCss/ad3.css"
import star from "../assets/images/component/element/star.svg"
import location from "../assets/images/component/element/location.svg"
import heart from "../assets/images/component/element/heart.svg"

function Ad3(props) {
    const stars = []

    for (var i=0;i<props.numberStar;i++) {
      stars.push(<img src={star} alt="ulduz" /> )
    }
    return (
        <div className="companies">
            <div className="logoCont"><img src={props.image} alt="şirkət logo"/></div>
            <div className="aboutText"> 
                <p className="name">{props.name}</p>
                <p className="description">{props.description}</p>
                <div className="bottomImgCont"> 
                    <p><img src={location} alt="Adres" /> {props.address}</p>  
                    <div className="stars">{stars}</div>
                    <img src={heart} alt="ürək" />
                </div>
            </div>
        </div>
    )
}

export default Ad3
