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
import Cookies from 'js-cookie'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Ad(props) {
    const [UserData, setUserData] = useState(0)



    const bgImg = {
        backgroundImage: `url(https://ustatap.net/${props.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
    }

    return (

        <div className="ad">
            <Link to={"/member-area/requests-ad/" + props.id}>  <button style={bgImg} className="mainImg"> </button> </Link>
            <div className="lineAd"></div>
            <div className="subCont">
                <div className="flexCont1">  <p>{props.name}</p>   </div>
                <p className="nameCostumer">Sifarişçi {props.desc}</p>
                <div className="flexCont2">   <p>Ünvan: {props.address} </p>        <p ><img src={calendar} alt="" /> <pre className="dateAd"> {props.date} </pre></p>    <p><img src={eye} alt="" />{props.view}</p> </div>
            </div>
        </div>

    )
}

export default Ad
