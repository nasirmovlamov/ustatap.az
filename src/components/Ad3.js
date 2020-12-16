import React from 'react'
import "../assets/css/componentsCss/ad3.css"
import emptyStar from "../assets/images/component/element/emptyStar.svg"
import fullStar from "../assets/images/component/element/fullStar.svg"
import halfStar from "../assets/images/component/element/halfStar.svg"


import location from "../assets/images/component/element/location.svg"
import heart from "../assets/images/component/element/heart.svg"

function Ad3(props) {
    const stars = []
    if ((props.numberStar - Math.floor(props.numberStar)) === 0) {
        
        for (var i=0;i<props.numberStar;i++) {
            stars.push(<img src={fullStar} alt="ulduz" /> )
          }
        for (var j=(props.numberStar);j<5;j++) {
            stars.push(<img src={emptyStar} alt="ulduz" /> )
        }

    }
    else 
    {
        for (var i=0;i<Math.floor(props.numberStar);i++) {
            stars.push(<img src={fullStar} alt="ulduz" /> )
          }
        stars.push(<img src={halfStar} alt="ulduz" />)

        for (var i=Math.floor(props.numberStar) + 1;i<5;i++) {
            stars.push(<img src={emptyStar} alt="ulduz" /> )
          }
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
