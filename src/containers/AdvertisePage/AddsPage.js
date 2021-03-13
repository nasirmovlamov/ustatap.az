import React,{useState,useEffect} from 'react'
import  "../../assets/css/PagesCss/addsPage.css"
import axios from "axios"
import {
    Link
  } from "react-router-dom";
import Category from '../../components/Category';
import Button from '../../components/Button';
import adImage from "../../assets/images/component/element/adImage.png"
import Ad from '../../components/Ad';

function AddsPage(props) {

    document.title = " Ustatap.net Elanlar"
    const [Adds, setAdds] = useState([])
    var url = window.location.href;
    var id = url.substring(url.lastIndexOf('/') + 1 );
    var numId = url.substring(url.lastIndexOf('/') + 1 );
    const [jobCategoryApi, setJobCategoryApi] = useState([0])
    const [SelectedAd, setSelectedAd] = useState(0)
    const [latestAdApi, setlatestAdApi] = useState([0])
     const jobCategory = []

    var AllAd = []
    jobCategoryApi.map((category) => jobCategory.push(category.category_id))
    
    useEffect(() => 
    {
        axios.get("http://ustatap.testjed.me/public/api/ad") 
            .then((res) =>  (setlatestAdApi(res.data) ))
        url = window.location.href;
    } , [])
    latestAdApi.map(ad => { AllAd.push(<Ad name={ ad.title} desc={ad.description} address={ad.city} date={ad.created_at} view={ad.views} image={ad.images} id={ad.id}/>)   } ) 
    const [filterCategory, setFilterCategory] = useState(0)
    const [filterCity, setFilterCity] = useState(0)
    const [filterDistrict, setFilterDistrict] = useState(0)
    const [filterDate, setFilterDate] = useState(0)
    const [filter, setfilter] = useState(0)
    const ListingResult = JSON.parse(localStorage.getItem("ListingResult"))

    if (filter) {
        AllAd = []
        setfilter(0)
        axios.post("http://ustatap.testjed.me/public/api/elanfilter" , {category_id:ListingResult.jobcategory , city_id:ListingResult.city  , date:ListingResult.date , } ) 
        .then((res) =>  (setlatestAdApi(res.data) ))
        latestAdApi.map(ad => { AllAd.push(<Ad name={ ad.title} desc={ad.description} address={ad.city} date={ad.created_at} view={ad.views} image={ad.images} id={ad.id}/>)   } ) 
    }

    return (
        <div className="addsPage">
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
                    <button className="topButton" >Elanlar üzrə Axtarış</button>
                </div>

                <Category type3={1} setfilter={setfilter}   setFilterCategory={setFilterCategory} setFilterDistrict={setFilterDistrict} setFilterCity={setFilterCity} setFilterDate={setFilterDate} type4={undefined} btnColor="#F27B29"/>

                    <div className="adsContainer">
                        {AllAd}
                    </div>    


            </div>
        </div>
    )
}

export default (AddsPage )
