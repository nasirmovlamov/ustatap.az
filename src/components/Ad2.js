import React,{useEffect, useState} from 'react'
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
import Rating from '@material-ui/lab/Rating';
import { useLayoutEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StarIcon from '@material-ui/icons/Star';

function Ad2(props) {
    const [UserData, setUserData] = useState(0)
    useLayoutEffect(() => {
        if (UserData?.user?.id === undefined) 
        {
            setUserData(JSON.parse(localStorage.getItem('LoginUserData')))
        }
        
      } )

    useEffect(() => {
    if(props.userId !== undefined)
    {axios.post('https://ustatap.net/public/api/checkselected' , {dynamic_id:props.id , user_id:props.userId})
            .then(res => setChecker(res.data))
            .catch(err => console.log(err))
            console.log(checker);}
    }, [])
    const notify = (rate) => toast.success(`${rate === null ? 5 : rate}   Ulduz göndərildi` , {draggable: true,});
    const notify1 = (rate) => toast.success(`Seçilmişlərə Əlavə olundu` , {draggable: true,});
    const notify2 = (rate) => toast.success(`Seçilmişlərdən çıxarıldı` , {draggable: true,});

    const bgImg = {
        backgroundImage: `url(https://ustatap.net/${props.image})`,
        backgroundSize: "cover !important" ,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundColor: 'white'
    }

    const [checker , setChecker] = useState(false)
    
    const heartPost = () => {
        if(UserData?.user?.id !== undefined)
        {    
            if(!checker)
            {
                document.getElementById(`${props.id}`).setAttribute('style' , 'color:red;')
                axios.post('https://ustatap.net/public/api/select', {dynamic_id:props.id , user_id:props.userId , type: 2 })
                .then(res => (console.log(res) ))
                .catch(err => console.log(err))
                setChecker(true)
                notify1()

            }
            else 
            {
                document.getElementById(`${props.id}`).setAttribute('style' , 'color:gray;')
                axios.post('https://ustatap.net/public/api/select', {dynamic_id:props.id , user_id:props.userId , type: 2 })
                .then(res => (console.log(res) ))
                .catch(err => console.log(err))
                setChecker(false)
                notify2()
            }
        }
        else 
        {
            window.location.href = "/login"
        }
        
    }
    const viewHandler = () => {
        axios.post('https://ustatap.net/public/api/increment', {id:props.id})
             .then(res => console.log(res))
             .catch(err => console.log(err))
    }
    const ratingHandler = (rate) => {
        if (UserData?.user?.id === undefined) {
            window.location.href = "/login"
        }
        else 
        {
            axios.post('https://ustatap.net/public/api/rate', {user_id:UserData?.user?.id ,rate:rate} )
                .then(res => (console.log(res) , res.status === 200 && notify(rate) ))
                .catch(err => console.log(err))
        }
        
    }
    return (
        
            <div className="mastersCont">
                <Link to={"/masters/" + props.id} className="masterImg"  style={bgImg}><button className="masterImgBtn" onClick={() => viewHandler()}   ></button></Link>
                <div className="aboutText">
                    <p className="name">{props.name}</p>
                    <p className="job">{props.job}</p>
                    <p className="location"><img src={location} alt="location"/> {props.address}</p>
                    <div className="stars"><Rating name="read-only"   value={parseInt(props.numberStar)} onChange={(event , newValue) => ratingHandler(newValue) }   /></div>
                    <p className="rating">Reyting sayı {props.rating} </p>
                    <button className="heartBtn"  onClick={() => heartPost()}><FavoriteIcon id={props.id}/></button>
                </div> 
            </div>
    )
}

export default Ad2
