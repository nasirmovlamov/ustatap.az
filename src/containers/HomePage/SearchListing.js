import React,{useState,useEffect} from 'react'

import  "../../assets/css/PagesCss/searchListing.css"
import {
    Link
  } from "react-router-dom";
import Category from '../../components/Category';
import Button from '../../components/Button';
import adImage from "../../assets/images/component/element/adImage.png"
import Ad from '../../components/Ad';
import Ad2 from '../../components/Ad2';
import Ad3 from '../../components/Ad3';
import master from "../../assets/images/component/element/master.png"
import vipTopImg from "../../assets/images/component/element/vipMastersTop.png"
import VipAd2 from '../../components/VipAd2';
import SubBanner from '../../components/SubBanner';
import axios from 'axios';

function SearchListing(props) {
    document.title = " Ustatap.net Ustalar"
    const [Elements, setElements] = useState([])
    var elements = []
    var vipElements = []
    const SearchResult = JSON.parse(localStorage.getItem("SearchResult"))
    useEffect(() => 
    {   
        axios.post("http://ustatap.testjed.me/public/api/filter" , {category_id:SearchResult?.jobcategory , city_id:SearchResult?.city , type:SearchResult?.type} ) 
        .then((res) =>  (setElements(res.data) ))
    } , [])
    if(SearchResult?.type === "elan")
    {
        Elements?.map((ad, index ) => elements.push(<Ad name={ ad.title} desc={ad.description} address={"Baku"} date={ad.updated_at} view={ad.views} image={ad.images} id={ad.id}/>)) 
    }
    else if(SearchResult?.type === "handyman")
    {
        Elements?.map(master =>  {if(master.vip !== 1){ elements.push(<Ad2 name={master.name} job={master.surname} address={master.city} image={master.image} numberStar={master.rating} id={master.id}/>)}})
        Elements?.map(master =>  {if(master.vip === 1){ vipElements.push(<VipAd2 name={master.name} job={master.surname} address={master.city} image={master.image} numberStar={master.rating} id={master.id } /> )}})
    }
    else if(SearchResult?.type === "company")
    {
        Elements?.map( company => {if(company.vip !== 1 ){elements.push(<Ad3 id={company.id} numberStar={company.rating} image={company.image} name={company.company_name} location={company.company_adress} description={company.description}/>)}})
        Elements?.map( company => {if(company.vip === 1 ){vipElements.push(<Ad3 id={company.id} numberStar={company.rating} image={company.image} name={company.company_name} location={company.company_adress} description={company.description}/>)}})
    }





    return (
        <div className="searchPage">
            <div className="generalCont">
                
                <div className="linkAndButton">
                    <div className="link">
                        <p>
                        <Link to="/">
                            <a href=""> ustaTap.net </a> 
                        </Link>
                             -&gt; 
                        <Link to="/elanlar">
                            <a href=""> axtarış </a> 
                        </Link>
                            
                        </p>
                    </div>
                    <button className="topButton">Axtarış</button>
                </div>

                <div className="adsContainer">
                                <img src={vipTopImg} alt=""/>
                                {vipElements.length > 0 ? "" : <p className="searchNresult">Axtarışınıza uyğun nəticə tapılmadı</p> }
                                <div className="Vipmasters"> {vipElements.length > 0 ? vipElements : "" } </div> 
                    <SubBanner/>
                    {elements.length > 0 ? "" : <p className="searchNresult">Axtarışınıza uyğun nəticə tapılmadı</p> }
                    <div className="masters"> {elements.length > 0 ? elements :"" } </div>
                </div>    

            </div>
        </div>
    )
}

export default SearchListing
