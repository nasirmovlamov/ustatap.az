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
import location from "../assets/images/component/element/location.svg"
import  vipMaster    from  "../assets/images/component/element/vipMaster.png"
import axios from 'axios'
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';

function VipAd2(props) {
    const [UserData, setUserData] = useState(0)
    useEffect(() => {
        if(props.userId !== undefined)
        {axios.post('https://ustatap.net/public/api/checkselected' , {dynamic_id:props.id , user_id:props.userId})
             .then(res => setChecker(res.data))
             .catch(err => console.log(err))
             console.log(checker);}
    }, [])
    useEffect(() => {
        if (UserData?.user?.id === undefined) 
        {
            setUserData(JSON.parse(localStorage.getItem('LoginUserData')))
        }
        
      } )
    const notify = (rate) => toast.success(`${rate === null ? 5 : rate}   Ulduz göndərildi` , {draggable: true,});
    const notify1 = (rate) => toast.success(`Seçilmişlərə Əlavə olundu` , {draggable: true,});
    const notify2 = (rate) => toast.success(`Seçilmişlərdən çıxarıldı` , {draggable: true,});
    

    const backgroundImgHuman = {
        background: `url(https://ustatap.net/storage/app/public/${props.image})  no-repeat top center`

    }


    const [checker , setChecker] = useState(false)
    
    const heartPost = () => {
        if(UserData?.user?.id !== undefined)
        {    
            if(!checker)
            {
                document.getElementById(`${props.id}`).setAttribute('style' , 'color:red;')
                axios.post('https://ustatap.net/public/api/select', {dynamic_id:props.id , user_id:props.userId })
                .then(res => (console.log(res) ))
                .catch(err => console.log(err))
                setChecker(true)
                notify1()
            }
            else 
            {
                document.getElementById(`${props.id}`).setAttribute('style' , 'color:gray;')
                axios.post('https://ustatap.net/public/api/select', {dynamic_id:props.id , user_id:props.userId })
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
        
            <div className="Vipad">
                <img src={carona} alt="" className="crown"/>
                <Link to={"/masters/" + props.id}><button className="mainImg" style={backgroundImgHuman}></button></Link>
                <div className="subCont">
                    <div className="flexCont1">  <p className="name">{props.name}</p>  <button onClick={() => heartPost()} className="heartBtn"><FavoriteIcon id={props.id}/></button></div>
                    <p className="jobTitle">{props.job}</p>
                    <div className="flexCont2">  <img src={location} width="15" alt="location"/> <p className="address">{props.address}</p></div>
                    <div className="stars"><Rating name="read-only"   value={parseInt(props.numberStar)} onChange={(event , newValue) => ratingHandler(newValue) }   /></div>
                    <p className="rating">Reyting sayı {props.rating} </p>
                </div>
            </div>
    )
}

export default VipAd2
