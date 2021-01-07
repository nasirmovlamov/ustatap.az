import React,{useState,useEffect} from 'react'

import  "../../assets/css/componentsCss/masters.css"
import {
    Link
  } from "react-router-dom";
import Category from '../../components/Category';
import Button from '../../components/Button';
import adImage from "../../assets/images/component/element/adImage.png"
import Ad from '../../components/Ad';
import Ad2 from '../../components/Ad2';
import master from "../../assets/images/component/element/master.png"
import vipTopImg from "../../assets/images/component/element/vipMastersTop.png"
import VipAd2 from '../../components/VipAd2';
import SubBanner from '../../components/SubBanner';
import axios from 'axios';

function Masters() {

    const [VipMasters, setVipMasters] = useState([])
    
    
    var url = window.location.href;
    var id = url.substring(url.lastIndexOf('masters/') + 1);


    var mainId = url.substring(url.lastIndexOf('/') + 1 );
    const [SelectedMaster, setSelectedMaster] = useState(0)
    const [MasterApi, setMasterApi] = useState([0])
    const masters = []
    masters.push( MasterApi.map(master =>  <Ad2 name={master.name} job={master.surname} address={master.city} image={master.image} numberStar={master.rating} id={master.id}/>)   ) 
    useEffect(() => 
    {
        axios.get(`http://ustatap.testjed.me/handyman/${mainId}`) 
             .then((res) =>  (setSelectedMaster(res.data)))

        axios.get("http://ustatap.testjed.me/handymen") 
            .then((res) =>  (setMasterApi(res.data) ))

        
    } , [])
    
    


       
    return (
        <div className="mastersPage">
             <div className="generalCont">
                <div className="linkAndButton">
                    <div className="link">
                        <p>
                        <Link to="/">
                            <a href=""> ustaTap.net</a> 
                        </Link>
                            -&gt;
                        <Link to="/elanlar">
                            <a href="">elanlar</a> 
                        </Link>
                            
                        </p>
                    </div>
                    <button className="topButton">Ustalar üzrə Axtarış</button>
                </div>

                <Category  type4={1}  color="#F27B29" btnCollor="green"/>

                    <div className="adsContainer">
                        <img src={vipTopImg} alt=""/>
                        <div className="Vipmasters"> {VipMasters} </div>
                        <SubBanner/>
                        <div className="masters"> {masters} </div>
                    </div>    


            </div>
        </div>
    )
}

export default Masters
