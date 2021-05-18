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
import crown from "../assets/images/component/element/carona.svg"
import "../assets/css/componentsCss/vipAd3.css"
import axios from 'axios'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react'
import Rating from '@material-ui/lab/Rating';

function VipAd3(props) {
    const [UserData, setUserData] = useState(0)
    const [checker , setChecker] = useState(false)
    // useEffect(() => {
    //     if(props.userId !== undefined)
    //     {axios.post('https://ustatap.net/public/api/checkselected' , {dynamic_id:props.id , user_id:props.userId})
    //          .then(res => setChecker(res.data))
    //          .catch(err => console.log(err))
    //          console.log(checker);}
    // }, [])
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
    const backgroundImgHuman = {
        background: `url(https://ustatap.net/${props.image})  no-repeat`
    }
    
    const heartPost = () => {
        const notify = (rate) => toast.success(`${rate === null ? 5 : rate}   Ulduz göndərildi` , {draggable: true,});
        
        if(UserData?.user?.id !== undefined)
        {    
        if(!checker)
        {
            document.getElementById(`${props.id}`).setAttribute('style' , 'color:red;')
            axios.post('https://ustatap.net/public/api/select', {dynamic_id:props.id , user_id:props.userId })
             .then(res => (console.log(res) ))
             .catch(err => console.log(err))
             setChecker(true)
            const notify1 = (rate) => toast.success(`Seçilmişlərə Əlavə olundu` , {draggable: true,});

        }
        else 
        {
            document.getElementById(`${props.id}`).setAttribute('style' , 'color:gray;')
            axios.post('https://ustatap.net/public/api/select', {dynamic_id:props.id , user_id:props.userId })
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
        axios.post('https://ustatap.net/public/api/increment', {id:props.id})
             .then(res => console.log(res))
             .catch(err => console.log(err))
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
            axios.post('https://ustatap.net/public/api/rate', {user_id:props.id , rate:value} )
                .then(res => ( console.log(res.data) ,res.status === 200 && notify(value) ))
                .catch(err => console.log(err))
        }
    }
    const bgImg = {
        backgroundImage: `url(https://ustatap.net/${props.image})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'white'
    }

    useEffect(() => {
        if (JSON.parse(sessionStorage.getItem('secilmishVipShirket')) !== null )
        {
            var selecteds = JSON.parse(sessionStorage.getItem('secilmishVipShirket'))
            var index = selecteds.findIndex(x=> x.id === props.id)
            if (index !== -1) {
                document.getElementById(`${props.id}`).setAttribute('style' , 'color:red;')
            }
        }
    }, [])

    const selectItem = (num) => {
        const notify2 = (rate) => toast.success(`Seçilmişlərdən çıxarıldı` , {draggable: true,});
        const notify1 = (rate) => toast.success(`Seçilmişlərə Əlavə olundu` , {draggable: true,});
        if(UserData?.user?.id !== undefined)
        {  
            if(sessionStorage.getItem('secilmishVipShirket') === null)
            {
                sessionStorage.setItem('secilmishVipShirket' , JSON.stringify(selecteds))
                var selecteds = []
                selecteds = [...selecteds , {id:num  , numberStar: props.numberStar,  image:props.image ,  name:props.name ,  location:props.location , description: props.description, rating: props.rating}]
                sessionStorage.setItem('secilmishVipShirket' , JSON.stringify(selecteds))
                document.getElementById(`${props.id}`).setAttribute('style' , 'color:red;')
                notify1()
                return 0 
            }        
            else 
            {
                var selecteds = JSON.parse(sessionStorage.getItem('secilmishVipShirket'))
            }

            var index = selecteds.findIndex(x=> x.id === num)
            console.log(index);
            if (index === -1) {
                selecteds = [...selecteds , {id:num , numberStar: props.numberStar,  image:props.image ,  name:props.name ,  location:props.location , description: props.description, rating: props.rating}]
                sessionStorage.setItem('secilmishVipShirket' , JSON.stringify(selecteds))
                document.getElementById(`${props.id}`).setAttribute('style' , 'color:red;')
                notify1()
            }
            else 
            {
                var newArr = selecteds.filter((item) => item.id !== num)
                sessionStorage.setItem('secilmishVipShirket' , JSON.stringify(newArr))
                document.getElementById(`${props.id}`).setAttribute('style' , 'color:white;')
                notify2()
            }
        }
        else 
        {
            window.location.href = "/login"
        }
    }

    const [valueR, setvalueR] = useState(parseInt(props.numberStar))

    return (

            <div className="vipCompany" key={props.id} >
                <img className="crown" src={crown} alt=""/>
                <Link to={"/companies/" + props.id}>   <div className="logoCont" style={bgImg}></div> </Link>
                <div className="aboutTextMaster"> 
                <Link to={"/companies/" + props.id}> <p className="name">{props.name}</p> </Link>
                    <div className="bottomImgCont"> 
                        <p className="address"><img src={whiteLocation} alt="Adress" /> {props.location}</p>  
                        <div className="stars"><Rating  value={valueR} onChange={(event , newValue) => ratingHandler(newValue) }   /></div>  
                        <button className="heartBtn" onClick={() => selectItem(props.id)}><FavoriteIcon id={props.id}/></button>
                    </div>
                </div>
            </div>


    )
}

export default VipAd3
