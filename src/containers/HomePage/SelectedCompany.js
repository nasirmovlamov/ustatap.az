import React from 'react'
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
import Slider from '../../components/Slider';
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
    var id = url.substring(url.lastIndexOf('masters/') + 1);
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
                        -&gt;
                        <a href="">bmg</a> 
                    </p>
                </div>
                <div className="frameAndText">
                    <Frame overlayImg={overlay} image={0} mainImg={mainImg}/>
                    <div className="aboutAd">
                        <p className="title">Company Name</p>
                        <div className="subTitle">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like</p>
                        </div>
                        <div className="aboutLinks">
                            <a href="#"><p><img src={locationCity} alt=""/> <span>Şəhər: Bakı</span></p></a>
                            <a href="#"><p><img src={locationDistrict} alt=""/> <span className="district">Rayon:Nəsimi rayonu,Azadlıq  prospekti 110A </span></p></a>
                            <a href="#"><p><img src={tools} alt=""/> <span className="worksCanDo">Hansı işləri görür: Dam örtüyü, Qapı Pəncərə, Suvaq işləri</span></p></a>   
                        </div>
                        
                        <div className="bottomPart">
                            <div  className="phoneOfMaster"><p><img src={phone} alt=""/> <div className="numbers"><span>+994 70 XXX XX XX</span> <span>+994 55 XXX XX XX</span></div></p></div>   
                            <div  className="mailOfMaster"><p><img src={mail} alt=""/> <div className="mail"><span>info@ustatap.net</span></div></p></div>   
                            <div  className="social"><img src={facebookForMaster} alt=""/> <img src={instagramForMaster} alt=""/>  <img src={linkedinForMaster} alt=""/> <img src={twitterForMaster} alt=""/></div>   
                        </div>
                        <div className="aboutButtons">
                            <div className="stars">{stars}</div>
                            <p><img src={selectedAdEye} alt=""/> <span>53</span></p> 
                            <p><img src={heart} alt=""/> <span>Seçilmişlərə əlave et</span></p> 
                            <Button name="Elanı VIP-et" image2={diamond} color="#58BC40"/>
                        </div>
                        
                    </div>
                </div>
                <video   width="1250" height="440" controls>
                    <source src="movie.mp4" type="video/mp4"></source>
                </video>
                <Comments/>

                <Slider/>
            </div>

        </div>
    )
}

export default SelectedCompany
