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
function SelectedCompany(props) {
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

        axios.get(`https://ustatap.net/public/api/company/${mainId}`) 
            .then((res) =>  (setSelectedCompany(res.data)))

    } , [])
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
                    <Frame overlayImg={overlay} image={0} mainImg={"https://ustatap.net/" + SelectedCompany.image} height="420px" heightImg="282px" widthImg="458px"/>
                    <div className="aboutAd">
                        <p className="title">{SelectedCompany.name}</p>
                        <div className="subTitle">
                            <p>{SelectedCompany.description} Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai Jedai </p>
                        </div>
                        <div className="aboutLinks">
                            <a href="#"><p className="imgAndText"><img width="18" src={locationCity} alt=""/> <p>Şəhər: {SelectedCompany.adres}</p></p></a>
                            <a href="#"><p className="imgAndText"><img width="22" src={tools} alt=""/> <p className="worksCanDo">Hansı işləri görür: Malyar , Dülgər{SelectedCompany.categories}</p></p></a>   
                        </div>
                        
                        <div className="bottomPart">
                            <div  className="phoneOfMaster"><p><img src={phone} alt=""/> <div className="numbers"><a href={`tel:${SelectedCompany}`}>{SelectedCompany.phone}</a> </div></p></div>   
                            <div  className="mailOfMaster"><p><img src={mail} alt=""/> <div className="mail"><a href={`mailto:${SelectedCompany}`}> {SelectedCompany.email}</a></div></p></div>   
                            <div  className="social"><img width="15" src={facebookForMaster} alt=""/> <img  width="25" src={instagramForMaster} alt=""/>  <img width="25" src={linkedinForMaster} alt=""/> <img width="25" src={twitterForMaster} alt=""/></div>   
                        </div>
                        <div className="aboutButtons">
                            <div className="stars">{stars}</div>
                            <p><img width="20" src={selectedAdEye} alt=""/> <span>53</span></p> 
                            <p><img src={heart} alt=""/> <span>Seçilmişlərə əlave et</span></p> 
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
