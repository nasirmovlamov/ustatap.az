import React,{useState} from 'react'
import {
    Link
} from "react-router-dom";

import "../../assets/css/componentsCss/selectedAd.css"
import Frame from './../../components/Frame';
import selectedAd1 from '../../assets/images/component/element/selectedAdJpg.jpg';
import mainImg from '../../assets/images/component/element/selectedAdJpg.jpg';
import selectedAd2 from '../../assets/images/component/element/selectedAdJpg2.jpg';
import selectedAd3 from '../../assets/images/component/element/selectedAdJpg3.jpg';
import selectedAd4 from '../../assets/images/component/element/selectedAdJpg4.jpg';
import selectedAd5 from '../../assets/images/component/element/selectedAdJpg5.jpg';

import locationCity from '../../assets/images/component/element/locationCity.svg';
import locationDistrict from '../../assets/images/component/element/locationDistrict.svg';
import humanSelectedAd from '../../assets/images/component/element/humanSelectedAd.svg';
import selectedAdEye from '../../assets/images/component/element/selectedAdEye.svg';
import Button from './../../components/Button';
import mainLogo from "../../assets/images/component/element/mainLogo.svg"
import Comments from '../../components/Comments';
import Slider from '../../components/Slider';

function SelectedAd(props) {
    const [image, setimage] = useState([selectedAd1,selectedAd2,selectedAd3,selectedAd4,selectedAd5 ])
    var url = window.location.href;
    var id = url.substring(url.lastIndexOf('secilmish-son-elan/') + 1);

   
    return (

        <div className="selectedAd">
            <div className="generalCont">
                <div className="link">
                    <p>
                    <Link to="/">
                        <a href=""> ustaTap.net</a> 
                    </Link>
                        -&gt;
                    <Link to="/elanlar">
                        <a href="">elanlar</a> 
                    </Link>
                        -&gt;
                        <a href="">santexnika</a> 
                    </p>
                </div>
                <div className="frameAndText">
                    <Frame image={image} mainImg={mainImg}/>
                    <div className="aboutAd">
                        <p className="title">Görüləcək İşin Adı {id}</p>
                        <div className="subTitle">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like</p>
                        </div>
                        <div className="aboutLinks">
                            <a href="#"><p><img src={locationCity} alt=""/> <span>Şəhər: Bakı</span></p></a>
                            <a href="#"><p><img src={locationDistrict} alt=""/> <span>Rayon: Yasamal</span></p></a>
                            <a href="#"><p><img src={humanSelectedAd} alt=""/> <span>Sifarişçi: Kənan Bağırov</span></p></a>   
                        </div>
                        <div className="aboutButtons">
                            <p>Elan yerləşdirilib: <span>13.03.2020</span></p> 
                            <p><img src={selectedAdEye} alt=""/> <span>13.03.2020</span></p> 
                            <p><img src={locationDistrict} alt=""/> <span>Seçilmişlərə əlave et</span></p> 
                            <Button name="Mən bu işi Görərəm" />
                        </div>
                        <div className="bottomLines"><hr/> <img src={mainLogo} alt="" /> <hr/></div>
                    </div>
                </div>
                <Comments id={id}/>

                <Slider/>
            </div>

        </div>
    )
}

export default SelectedAd
