import React,{useState} from 'react'
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
import axios from 'axios'
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
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
            document.getElementById(`${props.id}`).setAttribute('style' , 'color:gray;')
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

    const [Rating, setRating] = useState(2);
    return (
        
            <div className="Vipad">
                <img src={carona} alt="" className="crown"/>
                <Link to={"/masters/" + props.id}><button className="mainImg" style={backgroundImgHuman}></button></Link>
                <div className="subCont">
                    <div className="flexCont1">  <p>{props.name}</p>  <button onClick={() => heartPost()} className="heartBtn"><FavoriteIcon id={props.id}/></button></div>
                    <p className="jobTitle">{props.job}</p>
                    <div className="flexCont2">   <p className="address">{props.address}</p></div>
                    <div className="stars">
                    
                    </div>
                </div>
            </div>
    )
}

export default VipAd2
