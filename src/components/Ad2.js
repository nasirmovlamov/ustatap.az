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

    // useEffect(() => {
    // if(props.userId !== undefined)
    // {axios.post('https://ustatap.net/public/api/checkselected' , {dynamic_id:props.id , user_id:props.userId})
    //         .then(res => setChecker(res.data))
    //         .catch(err => console.log(err))
    //         console.log(checker);}
    // }, [])
    const notify = (rate) => toast.success(`${rate === null ? 5 : rate}   Ulduz göndərildi` , {draggable: true,});
    const notify1 = (rate) => toast.success(`Seçilmişlərə Əlavə olundu` , {draggable: true,});
    const notify2 = (rate) => toast.success(`Seçilmişlərdən çıxarıldı` , {draggable: true,});

    const bgImg = {
        backgroundImage: `url(https://ustatap.net/${props.image})`,
        backgroundSize: "100%" ,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundColor: 'white'
    }

    const [checker , setChecker] = useState(false)
    


    const heartPost = () => {
        if(UserData?.user?.id !== undefined)
        {    
            
        }
        else 
        {
            window.location.href = "/login"
        }
        
    }
    const viewHandler = () => {
        axios.post('https://ustatap.net/public/api/increment', {id:props.id})
    }

    const { id } = props;
    const idReturner = () => {
        return id
    }



    useEffect(() => {
        if (JSON.parse(sessionStorage.getItem('secilmishUsta')) !== null) {
            var selecteds = JSON.parse(sessionStorage.getItem('secilmishUsta'))
            var index = selecteds.findIndex(x=> x.id === props.id)
            if (index !== -1) {
                document.getElementById(`${props.id}`).setAttribute('style' , 'color:red;')
            }
            else
            {
            }
        }
    }, [])
    const selectItem = (num) => {
        const notify2 = (rate) => toast.success(`Seçilmişlərdən çıxarıldı` , {draggable: true,});
        const notify1 = (rate) => toast.success(`Seçilmişlərə Əlavə olundu` , {draggable: true,});
        if(UserData?.user?.id !== undefined)
        {  
            if(sessionStorage.getItem('secilmishUsta') === null)
            {
                sessionStorage.setItem('secilmishUsta' , JSON.stringify(selecteds))
                var selecteds = []
                selecteds = [...selecteds , {id:num , name:props.name, address: props.address , image:props.image , numberStar: props.numberStar}]
                sessionStorage.setItem('secilmishUsta' , JSON.stringify(selecteds))
                document.getElementById(`${props.id}`).setAttribute('style' , 'color:red;')

                notify1()
                return 0 
            }        
            else 
            {
                var selecteds = JSON.parse(sessionStorage.getItem('secilmishUsta'))
            }

            var index = selecteds.findIndex(x=> x.id === num)
            if (index === -1) {
                selecteds = [...selecteds , {id:num , name:props.name, address: props.city , image:props.image , numberStar: props.rating}]
                sessionStorage.setItem('secilmishUsta' , JSON.stringify(selecteds))
                document.getElementById(`${props.id}`).setAttribute('style' , 'color:red;')

                notify1()
            }
            else 
            {
                var newArr = selecteds.filter((item) => item.id !== num)
                sessionStorage.setItem('secilmishUsta' , JSON.stringify(newArr))
                document.getElementById(`${props.id}`).setAttribute('style' , 'color:gray;')
                notify2()
            }
        }
        else 
        {
            window.location.href = "/login"
        }
    }



    const ratingHandler = (value) => {
        if (UserData?.user?.id === undefined) {
            window.location.href = "/login"
        }
        else 
        {
            if(value===null)
            {
                value = props.numberStar
            }
            axios.post('https://ustatap.net/public/api/rate', {user_id:id , rate:value} )
                .then(res => ( console.log(res.data) ,res.status === 200 && notify(value) ))
                .catch(err => console.log(err))
        }
    }
    const [valueR, setvalueR] = useState(props.numberStar)
    return (
        
            <div key={props.id} className="mastersCont">
                <Link to={"/masters/" + id} className="masterImg"  style={bgImg}><button className="masterImgBtn" onClick={() => viewHandler()}   ></button></Link>
                <div className="aboutText">
                    <Link to={"/masters/" + id}><p className="name">{props?.name}</p></Link>
                    <p className="job">{props?.job}</p>
                    <p className="location"><img src={location} alt="location"/> {props?.address !== undefined ? props?.address : "Ünvan  qeyd olunmayıb"}</p>
                     <div className="stars"><Rating value={valueR} onChange={(event , newValue) => ratingHandler(newValue)}    /></div>
                    <p className="rating">Reyting sayı {props.rating} </p>
                    <button className="heartBtn"  onClick={() => selectItem(props.id)}><FavoriteIcon id={props?.id}/></button> 
                </div> 
            </div>
    )
}

export default Ad2
