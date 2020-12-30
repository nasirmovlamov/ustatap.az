import React from 'react'
import "../assets/css/componentsCss/ad3.css"
import emptyStar from "../assets/images/component/element/emptyStar.svg"
import fullStar from "../assets/images/component/element/fullStar.svg"
import halfStar from "../assets/images/component/element/halfStar.svg"
import {
    Link
  } from "react-router-dom";

import location from "../assets/images/component/element/location.svg"
import whiteHeart from "../assets/images/component/element/whiteHeart.svg"
import whiteLocation from "../assets/images/component/element/whiteLocation.svg"
import crown from "../assets/images/component/element/carona.svg"
import "../assets/css/componentsCss/vipAd3.css"
function VipAd3(props) {
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
        <Link to={"/companies/" + props.id}>

            <div className="vipCompany">
                <img className="crown" src={crown} alt=""/>
                <div className="logoCont"><img src={props.image} alt="şirkət logo"/></div>
                <div className="aboutText"> 
                    <p className="name">{props.name}</p>
                    <p className="description">{props.description}</p>
                    <div className="bottomImgCont"> 
                        <p className="address"><img src={whiteLocation} alt="Adress" /> {props.location}</p>  
                        <div className="stars">{stars}</div>
                        <img src={whiteHeart} alt="ürək" />
                    </div>
                </div>
            </div>

        </Link>

    )
}

export default VipAd3
