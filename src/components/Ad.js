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
function Ad(props) {
    const [checker , setChecker] = useState(false)
    const [UserData, setUserData] = useState(0)
    
    useEffect(() => {
      if (UserData?.user?.id === undefined) 
      {
          setUserData(JSON.parse(localStorage.getItem('LoginUserData')))
      }
    })
    const bgImg = {
        backgroundImage: `url(http://ustatap.testjed.me/${props.image})`,
        backgroundRepeat: 'no-repeat',  
        backgroundSize: 'cover',  
        backgroundPosition: 'top center',  
    }
    
    const heartPost = () => {
        if(!checker)
        {
            document.getElementById(`${props.id}`).setAttribute('style' , 'color:red;')
            axios.post('http://ustatap.testjed.me/public/api/select', {elan_id:props.id , user_id:props.userId , type:UserData?.user?.user_type  })
             .then(res => (console.log(res) ))
             .catch(err => console.log(err))
             setChecker(true)
        }
        else 
        {
            document.getElementById(`${props.id}`).setAttribute('style' , 'color:gray;')
            axios.post('http://ustatap.testjed.me/public/api/select', {elan_id:props.id , user_id:props.userId})
             .then(res => (console.log(res) ))
             .catch(err => console.log(err))
             setChecker(false)

        }
        
    }
    const viewHandler = () => {
        axios.post('http://ustatap.testjed.me/public/api/increment' , {id:props.id})
             .then(res => console.log(res))
             .catch(err => console.log(err))
    }
    return (
        
            <div className="ad">
                <Link to={"/elanlar/secilmish-son-elan/" + props.id}>  <button  onClick={() => viewHandler()} style={bgImg} className="mainImg"> </button> </Link>
                <div className="lineAd"></div>
                <div className="subCont">
                    <div className="flexCont1">  <p>{props.name}</p>  {UserData?.user?.user_type !== "user" ? <button className="btnHeart" onClick={() => heartPost()}><FavoriteIcon  id={props.id}/></button> : ""}</div>
                    <p className="nameCostumer">Sifarişçi {props.desc}</p>
                    <div className="flexCont2">   <p>Ünvan: {props.address} </p>        <p ><img src={calendar} alt=""/> <pre className="dateAd"> {props.date} </pre></p>    <p><img src={eye}  alt=""/>{props.view}</p> </div>
                </div>
            </div>
            
    )
}

export default Ad
