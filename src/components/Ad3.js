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
import FavoriteIcon from '@material-ui/icons/Favorite';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react'
import Rating from '@material-ui/lab/Rating';

function Ad3(props) {
    const [UserData, setUserData] = useState(0)
    useEffect(() => {
        if(props.userId !== undefined)
        {axios.post('http://ustatap.testjed.me/public/api/checkselected' , {dynamic_id:props.id , user_id:props.userId})
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

    const bgImg = {
        backgroundImage: `url(http://ustatap.testjed.me/storage/app/public/${props.image})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'white'
    }
    
    const [checker , setChecker] = useState(false)
    
    const heartPost = () => {
        if(UserData?.user?.id !== undefined)
        {    
        if(!checker)
        {
            document.getElementById(`${props.id}`).setAttribute('style' , 'color:red;')
            axios.post('http://ustatap.testjed.me/public/api/select', {dynamic_id:props.id , user_id:props.userId , type: 3 })
             .then(res => (console.log(res) ))
             .catch(err => console.log(err))
             setChecker(true)
            const notify1 = (rate) => toast.success(`Seçilmişlərə Əlavə olundu` , {draggable: true,});

        }
        else 
        {
            document.getElementById(`${props.id}`).setAttribute('style' , 'color:gray;')
            axios.post('http://ustatap.testjed.me/public/api/select', {dynamic_id:props.id , user_id:props.userId, type: 3 })
             .then(res => (console.log(res) ))
             .catch(err => console.log(err))
             setChecker(false)
            const notify2 = (rate) => toast.success(`Seçilmişlərdən çıxarıldı` , {draggable: true,});
        }
        }
        else 
        {
            window.location.href = "/login"
        }
    }
    
    const viewHandler = () => {
        axios.post('http://ustatap.testjed.me/public/api/increment', {id:props.id})
             .then(res => console.log(res))
             .catch(err => console.log(err))
    }
    const ratingHandler = (rate) => {
        if (UserData?.user?.id === undefined) {
            window.location.href = "/login"
        }
        else 
        {
            axios.post('http://ustatap.testjed.me/public/api/rate', {user_id:UserData?.user?.id ,rate:rate} )
                .then(res => (console.log(res) , res.status === 200 && notify(rate) ))
                .catch(err => console.log(err))
        }
        
    }
    return (

            <div className="companies">
                <Link to={"/companies/" + props.id}>    <div className="logoCont" style={bgImg}></div></Link>
                <div className="aboutTextMaster"> 
                    <p className="name">{props.name}</p>
                    <div className="bottomImgCont"> 
                        <p className="address"><img src={whiteLocation} alt="Adress" /> {props.location}</p>  
                        <div className="stars"><Rating name="read-only"   value={parseInt(props.numberStar)} onChange={(event , newValue) => ratingHandler(newValue) }   /></div>
                        <button className="heartBtn" onClick={() => heartPost()}><FavoriteIcon id={props.id}/></button>
                    </div>
                </div>
            </div>


    )
}

export default Ad3
