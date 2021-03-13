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

function Masters(props) {

    document.title = " Ustatap.net Ustalar"
    var url = window.location.href;
    var numId = url.substring(url.lastIndexOf('/') + 1 );
    useEffect(() => {
        numId = url.substring(url.lastIndexOf('/') + 1 );
    })
    const [jobCategoryApi, setJobCategoryApi] = useState([0])
    const [SelectedMaster, setSelectedMaster] = useState(0)
    const [MasterApi, setMasterApi] = useState([0])
    var masters = []
    var vipMasters = []
    
    MasterApi.map(master =>  {if(master.vip !== 1){ masters.push(<Ad2 name={master.name} job={master.surname} address={master.city} image={master.image} numberStar={master.rating} id={master.id}/>)}else if(master.vip === 1){ vipMasters.push(<VipAd2 name={master.name} job={master.surname} address={master.city} image={master.image} numberStar={master.rating} id={master.id } /> )}else{}})
    MasterApi.map(master =>  {})
    useEffect(() => 
    {   
            axios.get("http://ustatap.testjed.me/public/api/handymen") 
            .then((res) =>  (setMasterApi(res.data) ))
    } , [])
    
    const [filter, setfilter] = useState(0)
    const ListingResult = JSON.parse(localStorage.getItem("ListingResult"))

    if (filter) {
        masters = []
        vipMasters = []
        setfilter(0)
        axios.post("http://ustatap.testjed.me/public/api/ustafilter" , {category_id:ListingResult.jobcategory , city_id:ListingResult.city  , vip:ListingResult.vip } ) 
        .then((res) =>  (setMasterApi(res.data) ))
        MasterApi.map(master =>  {if(master.vip !== 1){ masters.push(<Ad2 name={master.name} job={master.surname} address={master.city} image={master.image} numberStar={master.rating} id={master.id}/>)}else if(master.vip === 1){ vipMasters.push(<VipAd2 name={master.name} job={master.surname} address={master.city} image={master.image} numberStar={master.rating} id={master.id } /> )}else{}})

    }


       
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

                    <Category setfilter={setfilter}  type3={0}  type4={1}  color="#F27B29" btnCollor="green"/>
                        <div className="adsContainer">
                        { props.hideVip &&
                                    <><img src={vipTopImg} alt=""/>
                                    <div className="Vipmasters"> {vipMasters} </div></>
                        }
                        <SubBanner/>
                        <div className="masters"> {masters} </div>
                    </div>    

            </div>
        </div>
    )
}

export default Masters
