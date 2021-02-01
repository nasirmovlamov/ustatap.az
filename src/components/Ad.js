import React, { useEffect, useState } from 'react'
import "../assets/css/componentsCss/ad.css"
import favorite from "../assets/images/component/element/heart.svg"
import calendar from "../assets/images/component/element/calendar.svg"
import eye from "../assets/images/component/element/eye.svg"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite';
import {
    Link
} from "react-router-dom";
  import axios from 'axios'
function Ad(props) {
    const [checker , setChecker] = useState(false)
    const bgImg = {
        backgroundImage: `url(http://ustatap.testjed.me/storage/app/public/${props.image})`,
        backgroundRepeat: 'no-repeat',  
    }
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
            document.getElementById(`${props.id}`).setAttribute('style' , 'color:gray;')
            axios.post('http://ustatap.testjed.me/', {addFavorite:false})
             .then(res => (console.log(res) ))
             .catch(err => console.log(err))
             setChecker(false)

        }
        
    }
    const viewHandler = () => {
        axios.post('http://ustatap.testjed.me/', {view:props.view+1})
             .then(res => alert(props.view+1))
             .catch(err => console.log(err))
    }
    return (
        
            <div className="ad">
                <Link to={"/elanlar/secilmish-son-elan/" + props.id}>  <button  onClick={() => viewHandler()} style={bgImg} className="mainImg"> </button> </Link>
                <div className="lineAd"></div>
                <div className="subCont">
                    <div className="flexCont1">  <p>{props.name + props.id}</p>  <button className="btnHeart" onClick={() => heartPost()}><FavoriteIcon  id={props.id}/></button></div>
                    <p className="nameCostumer">{props.costumer}</p>
                    <div className="flexCont2">   <p>{props.address}</p>        <p ><img src={calendar} alt=""/> <pre className="dateAd"> {props.date} </pre></p>    <p><img src={eye}  alt=""/>{props.view}</p> </div>
                </div>
            </div>
            
    )
}

export default Ad
