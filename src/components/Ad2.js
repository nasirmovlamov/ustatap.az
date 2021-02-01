import React,{useState} from 'react'
import {
    Link
  } from "react-router-dom";
import "../assets/css/componentsCss/ad2.css"
import emptyStar from "../assets/images/component/element/emptyStar.svg"
import fullStar from "../assets/images/component/element/fullStar.svg"
import halfStar from "../assets/images/component/element/halfStar.svg"
import axios from 'axios'
import location from "../assets/images/component/element/location.svg"
import heart from "../assets/images/component/element/heart.svg"
import FavoriteIcon from '@material-ui/icons/Favorite';

function Ad2(props) {
    const stars = []
    if ((props.numberStar - Math.floor(props.numberStar)) === 0) {
        
        for (var i=0;i<props.numberStar;i++) {
            stars.push(<img src={fullStar} width="25px" alt="ulduz" /> )
          }
        for (var j=(props.numberStar);j<5;j++) {
            stars.push(<img src={emptyStar} alt="ulduz" width="25px"/> )
        }

    }
    else 
    {
        for (var i=0;i<Math.floor(props.numberStar);i++) {
            stars.push(<img src={fullStar} alt="ulduz" width="25px"/> )
          }
        stars.push(<img src={halfStar} alt="ulduz" width="25px"/>)

        for (var i=Math.floor(props.numberStar) + 1;i<5;i++) {
            stars.push(<img src={emptyStar} alt="ulduz" width="25px"/> )
          }
    }
    const bgImg = {
        background: `url(http://ustatap.testjed.me/storage/app/public/${props.image})  no-repeat`,
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
        axios.post('http://ustatap.testjed.me/', {increase:props.view+1})
             .then(res => console.log(res))
             .catch(err => console.log(err))
    }


    return (
            <div className="mastersCont">
                <Link to={"/masters/" + props.id} className="masterImg"  style={bgImg}><button className="masterImgBtn" onClick={() => viewHandler()}   ></button></Link>
                <div className="aboutText">
                    <p className="name">{props.name}</p>
                    <p className="job">{props.job}</p>
                    <p className="location"><img src={location} alt="location"/> {props.address}</p>
                    <div className="stars">{stars}</div>
                    <p className="rating">Reyting sayı {props.rating} </p>
                    <button className="heartBtn"  onClick={() => heartPost()}><FavoriteIcon id={props.id}/></button>
                </div> 
            </div>
    )
}

export default Ad2
