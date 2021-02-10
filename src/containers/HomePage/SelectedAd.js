import React,{useState,useEffect} from 'react'
import {
    Link
} from "react-router-dom";
import axios from "axios"
import "../../assets/css/componentsCss/selectedAd.css"
import Frame from './../../components/Frame';
import selectedAd1 from '../../assets/images/component/element/selectedAdJpg.jpg';
import mainImg from '../../assets/images/component/element/selectedAdJpg.jpg';
import selectedAd2 from '../../assets/images/component/element/selectedAdJpg2.jpg';
import selectedAd3 from '../../assets/images/component/element/selectedAdJpg3.jpg';
import selectedAd4 from '../../assets/images/component/element/selectedAdJpg4.jpg';
import selectedAd5 from '../../assets/images/component/element/selectedAdJpg5.jpg';
import locationCity from '../../assets/images/component/element/locationCity.svg';
import heart from '../../assets/images/component/element/heart.svg';
import locationDistrict from '../../assets/images/component/element/locationDistrict.svg';
import humanSelectedAd from '../../assets/images/component/element/humanSelectedAd.svg';
import selectedAdEye from '../../assets/images/component/element/selectedAdEye.svg';
import Button from './../../components/Button';
import mainLogo from "../../assets/images/component/element/mainLogo.svg"
import Comments from '../../components/Comments';
import OurSlider from '../../components/OurSlider';
import Ad from '../../components/Ad';
function SelectedAd(props) {
    const [image, setimage] = useState([selectedAd1,selectedAd2,selectedAd3,selectedAd4,selectedAd5 ])
    var url = window.location.href;
    var id = url.substring(url.lastIndexOf('/') + 1 );
    const [SelectedAd, setSelectedAd] = useState(0)
    const [latestAdApi, setlatestAdApi] = useState([0])
    const latestAd = []
    latestAd.push( latestAdApi.map(ad => <Ad name={ ad.title} costumer={ad.description} address={ad.city} date={ad.updated_at} view="1258" image={ad.images} id={ad.id}/>)  ) 
    useEffect(() => 
    {
        axios.get(`http://ustatap.testjed.me/public/api/singlead/${id}`) 
             .then((res) =>  (setSelectedAd(res.data)))

        axios.get("http://ustatap.testjed.me/ad") 
            .then((res) =>  (setlatestAdApi(res.data) ))

        
    } , [])
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
                    <Frame image={image} mainImg={ `http://ustatap.testjed.me/storage/app/public/${SelectedAd.images}`} height="420px" heightImg="282px" widthImg="458px"/>
                    <div className="aboutAd">
                        <p className="title">{SelectedAd.title}</p>
                        <div className="subTitle">
                           {SelectedAd.description}
                        </div>
                        <div className="aboutLinks">
                            <a href="#"><p><img src={locationCity} alt=""/> <span>Şəhər: {SelectedAd.city}</span></p></a>
                            <a href="#"><p><img src={locationDistrict} alt=""/> <span>Rayon: {SelectedAd.district}</span></p></a>
                            <a href="#"><p><img src={humanSelectedAd} alt=""/> <span>Sifarişçi: Kənan Bağırov</span></p></a>   
                        </div>
                        <div className="aboutButtons">
                            <p>Elan yerləşdirilib: <pre className="date">{SelectedAd.created_at}</pre></p> 
                            <p><img src={selectedAdEye} alt=""/> <span>100</span></p> 
                            <p><img src={heart} alt=""/> <span>Seçilmişlərə əlave et</span></p> 
                            <Button name="Mən bu işi Görərəm" />
                        </div>
                        <div className="bottomLines"><hr/> <img src={mainLogo} alt="" /> <hr/></div>
                    </div>
                </div>
                <Comments id={id}/>

                <OurSlider elements={latestAd}/>
            </div>

        </div>
    )
}

export default SelectedAd
