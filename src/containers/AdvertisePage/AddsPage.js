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
    const [filter, setfilter] = useState(false)
    const [Adds, setAdds] = useState([])
    var url = window.location.href;
    var id = url.substring(url.lastIndexOf('/') + 1 );
    var numId = url.substring(url.lastIndexOf('/') + 1 );
    const [jobCategoryApi, setJobCategoryApi] = useState([0])
    const [SelectedAd, setSelectedAd] = useState(0)
    const [latestAdApi, setlatestAdApi] = useState([0])
     const jobCategory = []

    const AllAd = []
    jobCategoryApi.map((category) => jobCategory.push(category.category_id))
    
    useEffect(() => 
    {
        axios.get(`http://ustatap.testjed.me/public/api/singlead/${id}`) 
             .then((res) =>  (setSelectedAd(res.data)))

        axios.get("http://ustatap.testjed.me/public/api/ad") 
            .then((res) =>  (setlatestAdApi(res.data) ))
        url = window.location.href;
        console.log(url);
    } , [])

    
    const [filterCategory, setFilterCategory] = useState(0)
    const [filterCity, setFilterCity] = useState(0)
    const [filterDistrict, setFilterDistrict] = useState(0)
    const [filterDate, setFilterDate] = useState(0)

    const filterAll = () => {
        setfilter(true)
    }

    latestAdApi.map(
        ad => 
            {
                console.log(numId);
                if(numId === 'elanlar')
                {
                    if(filter === true)
                    {
                        if (ad.category_id === filterCategory && ad.city_id === filterCity ) 
                        {
                            AllAd.push(<Ad name={ ad.title} costumer={ad.description} address={ad.city} date={ad.updated_at} view="1258" image={ad.images} id={ad.id}/>)  
                        }
                    }
                    else 
                    {
                        AllAd.push(<Ad name={ ad.title} costumer={ad.description} address={ad.city} date={ad.updated_at} view="1258" image={ad.images} id={ad.id}/>)  
                    }
                }
                if(parseInt(numId) !== 'elanlar')
                {
                    if(ad.category_id===parseInt(numId))
                    {
                        if(filter === true)
                        {
                            if (ad.category_id === filterCategory && ad.city === filterCity ) {
                                AllAd.push(<Ad name={ ad.title} costumer={ad.description} address={ad.city} date={ad.updated_at} view="1258" image={ad.images} id={ad.id}/>)                                 
                            }
                        }
                        else
                        {
                            AllAd.push(<Ad name={ ad.title} costumer={ad.description} address={ad.city} date={ad.updated_at} view="1258" image={ad.images} id={ad.id}/>) 
                        }
                    }
                }
                else{}
                
            } 
        
    ) 

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

                <Category function={filterAll}  setFilterCategory={setFilterCategory} setFilterDistrict={setFilterDistrict} setFilterCity={setFilterCity} setFilterDate={setFilterDate} type4={undefined} btnColor="#F27B29"/>

                    <div className="adsContainer">
                        {AllAd}
                    </div>    


            </div>
        </div>
    )
}

export default (AddsPage )
