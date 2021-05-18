import React,{useState,useEffect} from 'react'
import axios from "axios"
import "../../assets/css/componentsCss/selectedCompany.css"
import {
    Link
  } from "react-router-dom";
import overlay from '../../assets/images/component/element/overlayForFrame.svg';
import mainImg from '../../assets/images/component/element/bmgLogo.svg';

import selectedAd2 from '../../assets/images/component/element/selectedAdJpg2.jpg';
import selectedAd3 from '../../assets/images/component/element/selectedAdJpg3.jpg';
import selectedAd4 from '../../assets/images/component/element/selectedAdJpg4.jpg';
import selectedAd5 from '../../assets/images/component/element/selectedAdJpg5.jpg';
import emptyStar from "../../assets/images/component/element/emptyStar.svg"
import fullStar from "../../assets/images/component/element/fullStar.svg"
import halfStar from "../../assets/images/component/element/halfStar.svg"
import diamond from "../../assets/images/component/element/diamond.svg"
import locationCity from '../../assets/images/component/element/locationCity.svg';
import locationDistrict from '../../assets/images/component/element/locationDistrict.svg';
import heart from '../../assets/images/component/element/heart.svg';
import tools from '../../assets/images/component/element/tools.svg';
import phone from '../../assets/images/component/element/grayPhone.svg';
import facebookForMaster from '../../assets/images/component/element/facebookForMaster.svg';
import instagramForMaster from '../../assets/images/component/element/instagramForMaster.svg';
import linkedinForMaster from '../../assets/images/component/element/linkedinForMaster.svg';
import twitterForMaster from '../../assets/images/component/element/twitterForMaster.svg';
import mail from '../../assets/images/component/element/grayMail.svg';
import selectedAdEye from '../../assets/images/component/element/selectedAdEye.svg';
import Button from './../../components/Button';
import mainLogo from "../../assets/images/component/element/mainLogo.svg"
import Comments from '../../components/Comments';
import Frame from '../../components/Frame';
import OurSlider from '../../components/OurSlider';
import Ad3 from '../../components/Ad3'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
function SelectedCompany(props) {
    const [UserData, setUserData] = useState(0)
    useEffect(() => {
        if (UserData?.user?.id === undefined) 
        {
            setUserData(JSON.parse(localStorage.getItem('LoginUserData')))
        }
    } )

    useEffect(() => {
        if (JSON.parse(sessionStorage.getItem('secilmishElan')) !== null) {
            var selecteds = JSON.parse(sessionStorage.getItem('secilmishElan'))
            var index = selecteds.findIndex(x=> x.id === props.id)
            if (index !== -1) {
                document.getElementById(`icon${props.id}`).setAttribute('style' , 'color:red;')
            }
        }
    }, [])

    const stars = []
    const numberStar = 5
    if ((numberStar - Math.floor(numberStar)) === 0) {
        
        for (var i=0;i<numberStar;i++) {
            stars.push(<img src={fullStar} alt="ulduz" /> )
          }
        for (var j=(numberStar);j<5;j++) {
            stars.push(<img src={emptyStar} alt="ulduz" /> )
        }

    }
    else 
    {
        for (var i=0;i<Math.floor(numberStar);i++) {
            stars.push(<img src={fullStar} alt="ulduz" /> )
          }
        stars.push(<img src={halfStar} alt="ulduz" />)

        for (var i=Math.floor(numberStar) + 1;i<5;i++) {
            stars.push(<img src={emptyStar} alt="ulduz" /> )
          }
    }


    var url = window.location.href;
    var id = url.substring(url.lastIndexOf('/masters/') + 1);
    var mainId = url.substring(url.lastIndexOf('/') + 1);
    console.log(mainId)
    const Company1 = []
    const [CompanyApi1, setCompanyApi1] = useState([0])
    const [SelectedCompany, setSelectedCompany] = useState([0])
    useEffect(() => 
    {
        axios.get("https://ustatap.net/public/api/company") 
            .then((res) =>  (setCompanyApi1(res.data) )) 

        axios.get(`https://ustatap.net/public/api/shirketler/${mainId}`) 
            .then((res) =>  (setSelectedCompany(res.data)))

    } , [])



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
                document.getElementById(`icon${props.id}`).setAttribute('style' , 'color:red;')
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
                document.getElementById(`icon${props.id}`).setAttribute('style' , 'color:red;')
                notify1()
            }
            else 
            {
                var newArr = selecteds.filter((item) => item.id !== num)
                sessionStorage.setItem('secilmishElan' , JSON.stringify(newArr))
                document.getElementById(`icon${props.id}`).setAttribute('style' , 'color:gray;')
                notify2()
            }
        }
        else 
        {
            window.location.href = "/login"
        }
    }

    
    return (
        <div className="selectedCompany">
            <div className="generalCont">
                <div className="link">
                    <p>
                    <Link to="/">
                        <a href=""> ustaTap.net</a> 
                    </Link>
                        -&gt;
                    <Link to="/companies">
                        <a href="">şirketler</a> 
                    </Link>
                        
                    </p>
                </div>
                <div className="frameAndText">
                    <Frame noBullet={false} overlayImg={overlay} image={0} mainImg={"https://ustatap.net/" + SelectedCompany.image} height="420px" heightImg="282px" widthImg="458px"/>
                    <div className="aboutAd">
                        <p className="title">{SelectedCompany.name}</p>
                        <div className="subTitle">
                            <p>{SelectedCompany.description}</p>
                        </div>
                        <div className="aboutLinks">
                            <a href="#"><p className="imgAndText"><img width="18" src={locationCity} alt=""/> <p>Şəhər: {SelectedCompany?.city_data?.name}</p></p></a>
                            <a href="#"><p className="imgAndText"><img width="22" src={tools} alt=""/> <p className="worksCanDo">Hansı işləri görür: {SelectedCompany?.category_data?.name} {(SelectedCompany?.subcategory_id?.name !== undefined && SelectedCompany?.subcategory_id?.name !== null) && " , "} {SelectedCompany?.subcategory_id?.name} {(SelectedCompany?.additionalcategory_id?.name !== undefined && SelectedCompany?.subcategory_id?.name !== null) && " , "} {SelectedCompany?.additionalcategory_id?.name}</p></p></a>   
                        </div>
                        
                        <div className="bottomPart">
                            <div  className="phoneOfMaster"><p><img src={phone} alt=""/> <div className="numbers"><a href={`tel:${SelectedCompany}`}>{SelectedCompany.phone}</a> </div></p></div>   
                            <div  className="mailOfMaster"><p><img src={mail} alt=""/> <div className="mail"><a href={`mailto:${SelectedCompany}`}> {SelectedCompany.email}</a></div></p></div>   
                            {/* <div  className="social"><img width="15" src={facebookForMaster} alt=""/> <img  width="25" src={instagramForMaster} alt=""/>  <img width="25" src={linkedinForMaster} alt=""/> <img width="25" src={twitterForMaster} alt=""/></div>    */}
                        </div>
                        <div className="aboutButtons">
                            {/* <div className="stars">{stars}</div> */}
                            <p><img width="20" src={selectedAdEye} alt=""/> <span>{SelectedCompany.views}</span></p> 
                            <p><button className="btnHeart" onClick={() => selectItem(props.id)}><FavoriteIcon  id={`icon${props.id}`}/></button> <span>Seçilmişlərə əlave et</span></p> 
                            <Button name="Elanı VIP-et" image2={diamond} color="#58BC40"/>
                        </div>
                        
                    </div>
                </div>
                
                <Comments/>
                    </div>
                <div>

            </div>
            
        </div>
    )
}

export default SelectedCompany
