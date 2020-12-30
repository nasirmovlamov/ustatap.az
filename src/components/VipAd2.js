import React from 'react'
import {
    Link
  } from "react-router-dom";
import "../assets/css/componentsCss/ad.css"
import "../assets/css/componentsCss/vipAd2.css"

import  favorite  from  "../assets/images/component/element/heart.svg"
import  emptyStar from  "../assets/images/component/element/emptyStar.svg"
import  fullStar  from  "../assets/images/component/element/fullStar.svg"
import  halfStar  from  "../assets/images/component/element/halfStar.svg"
import  carona    from  "../assets/images/component/element/carona.svg"
import  vipMaster    from  "../assets/images/component/element/vipMaster.png"

function VipAd2(props) {
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

    const backgroundImgHuman = {
        background:vipMaster,
    }
    return (
        <Link to={"/masters/" + props.id}>
            <div className="Vipad">
                <img src={carona} alt="" className="crown"/>
                <div className="mainImg" style={backgroundImgHuman}></div>
                <div className="subCont">
                    <div className="flexCont1">  <p>{props.name}</p>  <img src={favorite} alt=""/></div>
                    <p className="jobTitle">{props.job}</p>
                    <div className="flexCont2">   <p className="address">{props.address}</p></div>
                    <div className="stars">{stars}</div>
                </div>
            </div>
        </Link>
    )
}

export default VipAd2
