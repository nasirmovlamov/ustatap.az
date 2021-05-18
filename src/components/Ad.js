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
import { useMediaQuery } from '@material-ui/core'
function Ad(props) {
    const notify1 = (rate) => toast.success(`Seçilmişlərə Əlavə olundu` , {draggable: true,});
    const notify2 = (rate) => toast.success(`Seçilmişlərdən çıxarıldı` , {draggable: true,});
    const [UserData, setUserData] = useState(0)
    const [checker , setChecker] = useState(0)
    const ad = useMediaQuery('(max-width:420px)');

    
    
    
    useEffect(() => {
        if (UserData?.user?.id === undefined) 
        {
            setUserData(JSON.parse(localStorage.getItem('LoginUserData')))
      }
    })

    const bgImg = {
        backgroundImage: `url(https://ustatap.net/${props.image})`,
        backgroundRepeat: 'no-repeat',  
        backgroundSize: 'cover',  
        backgroundPosition: 'top center',  
    }
    
    
    const viewHandler = () => {
        axios.post('https://ustatap.net/public/api/increment' , {id:props.id})
             .then(res => console.log(res))
             .catch(err => console.log(err))
    }


    useEffect(() => {
        if (JSON.parse(sessionStorage.getItem('secilmishElan')) !== null) {
            var selecteds = JSON.parse(sessionStorage.getItem('secilmishElan'))
            var index = selecteds.findIndex(x=> x.id === props.id)
            if (index !== -1) {
                document?.getElementById(`${props.id}`)?.setAttribute('style' , 'color:red;')
            }
        }
    }, [])

    const selectItem = (num) => {
        const notify2 = (rate) => toast.success(`Seçilmişlərdən çıxarıldı` , {draggable: true,});
        const notify1 = (rate) => toast.success(`Seçilmişlərə Əlavə olundu` , {draggable: true,});
        if(UserData?.user?.id !== undefined)
        {
            if(sessionStorage.getItem('secilmishElan') === null)
            {
                sessionStorage.setItem('secilmishElan' , JSON.stringify(selecteds))
                var selecteds = []
                selecteds = [...selecteds , {id:num , name: props.name ,  desc: props.desc , image:props.image,  address:props.address , date: props.date, view: props.view  }]
                sessionStorage.setItem('secilmishElan' , JSON.stringify(selecteds))
                document.getElementById(`${props.id}`).setAttribute('style' , 'color:red;')
                notify1()
                return 0 
            }        
            else 
            {
                var selecteds = JSON.parse(sessionStorage.getItem('secilmishElan'))
            }

            var index = selecteds.findIndex(x=> x.id === num)
            console.log(index);
            if (index === -1) {
                selecteds = [...selecteds , {id:num , name: props.name ,  desc: props.desc  , image:props.image, address:props.address , date: props.date, view: props.view}]
                sessionStorage.setItem('secilmishElan' , JSON.stringify(selecteds))
                document.getElementById(`${props.id}`).setAttribute('style' , 'color:red;')
                notify1()
            }
            else 
            {
                var newArr = selecteds.filter((item) => item.id !== num)
                sessionStorage.setItem('secilmishElan' , JSON.stringify(newArr))
                document.getElementById(`${props.id}`).setAttribute('style' , 'color:gray;')
                notify2()
            }
        }
        else 
        {
            window.location.href = "/login"
        }
    }
    
    return (
        
            <div className="ad">
                <Link to={"/elanlar/secilmish-son-elan/" + props.id}>  <button  onClick={() => viewHandler()} style={bgImg} className="mainImg"> </button> </Link>
                <div className="lineAd"></div>
                <div className="subCont">
                    <div className="flexCont1">  <p><Link to={"/elanlar/secilmish-son-elan/" + props.id}>{props.name}</Link></p>  <button className="btnHeart" onClick={() => selectItem(props.id)}><FavoriteIcon  id={props.id}/></button> </div>
                    <p className="nameCostumer">{!ad && "Sifarişçi"} {props.desc}</p>
                    <div className="flexCont2">   <p>Ünvan: {props.address} </p>       {!ad && <p ><img src={calendar} alt=""/> <pre className="dateAd"> {props?.date} </pre></p> }   <p><img src={eye}  alt=""/>{props.view}</p> </div>
                </div>
            </div>
            
    )
}

export default Ad
