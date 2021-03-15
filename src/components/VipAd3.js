import React,{useState} from 'react'
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
import axios from 'axios'
import FavoriteIcon from '@material-ui/icons/Favorite';


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
    const backgroundImgHuman = {
        background: `url(http://ustatap.testjed.me/${props.image})  no-repeat`
    }
    const [checker , setChecker] = useState(false)
    
    const heartPost = () => {
        if(!checker)
        {
            document.getElementById(`${props.id}`).setAttribute('style' , 'color:red;')
            axios.post('http://ustatap.testjed.me/', {addFavorite:true})
             .then(res => (console.log(res) ))
             .catch(err => console.log(err))
             setChecker(true)
        }
        else 
        {
            document.getElementById(`${props.id}`).setAttribute('style' , 'color:white;')
            axios.post('http://ustatap.testjed.me/', {addFavorite:false})
             .then(res => (console.log(res) ))
             .catch(err => console.log(err))
             setChecker(false)

        }
        
    }
    const viewHandler = () => {
        axios.post('http://ustatap.testjed.me/public/api/increment', {id:props.id})
             .then(res => console.log(res))
             .catch(err => console.log(err))
    }

    return (

            <div className="vipCompany">
                <img className="crown" src={crown} alt=""/>
                <Link to={"/companies/" + props.id}>    <button onClick={() => viewHandler()} className="logoContVipAd1" style={backgroundImgHuman}> </button> </Link>
                <div className="aboutText"> 
                    <p className="name">{props.name}</p>
                    <p className="description">{props.description}</p>
                    <div className="bottomImgCont"> 
                        <p className="address"><img src={whiteLocation} alt="Adress" /> {props.location}</p>  
                        <div className="stars">{stars}</div>
                        <button className="heartBtn" onClick={() => heartPost()}><FavoriteIcon id={props.id}/></button>
                    </div>
                </div>
            </div>


    )
}

export default VipAd3
