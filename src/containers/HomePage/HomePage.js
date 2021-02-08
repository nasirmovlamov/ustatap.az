import React,{useEffect,useState} from 'react'
import ReactDOM from 'react-dom'

import axios from "axios"
import Ad from '../../components/Ad'
import Button from '../../components/Button'
import Footer from '../../components/Footer'
import SubBanner from '../../components/SubBanner'
import Header from '../../components/Header'
import SearchBox from '../../components/SearchBox'

import adImage from "../../assets/images/component/element/adImage.png"
import Ad2 from '../../components/Ad2'
import Ad3 from '../../components/Ad3'
import master from "../../assets/images/component/element/master.png"
import companyLogo from "../../assets/images/component/element/companyLogo.png"
import plumber from "../../assets/images/component/element/plumber.svg"
import electricImg from "../../assets/images/component/element/electric.svg"
import wallpaper from "../../assets/images/component/element/wallpaper.svg"
import windowDoor from "../../assets/images/component/element/windowDoor.svg"
import welder from "../../assets/images/component/element/welder.svg"
import plasterer from "../../assets/images/component/element/plasterer.svg"
import metlag from "../../assets/images/component/element/metlaq.svg"
import roof from "../../assets/images/component/element/roof.svg"
import stonemaster from "../../assets/images/component/element/stonemaster.svg"
import painter from "../../assets/images/component/element/painter.svg"
import floor from "../../assets/images/component/element/floor.svg"
import window from "../../assets/images/component/element/window.svg"
import carpenter from "../../assets/images/component/element/carpenter.svg"
import threeDots from "../../assets/images/component/element/threeDots.svg"
import arrDown from "../../assets/images/component/element/arrDown.svg"
import "../../assets/css/PagesCss/HomePage.css"
import VipAd2 from '../../components/VipAd2'
import VipAd3 from '../../components/VipAd3'
import Masters from '../MastersPage/Masters'
import Companies from '../Companies/Companies'
import {Link} from "react-router-dom"
import FadeIn from 'react-fade-in';
function HomePage(props) {

    document.title = " Ustatap.net Əsas Səhifə"

    const latestAd = []
    const masters = []
    const vipMasters = []
    const companies = []
    const vipCompanies = []
    const santexnika = []
    const electric = []
    const jobCategory = []
    const [latestAdApi, setlatestAdApi] = useState([0])
    const [jobCategoryApi, setJobCategoryApi] = useState([0])
    const [MasterApi, setMasterApi] = useState([0])
    const [CompanyApi, setCompanyApi] = useState([0])
    
   

    useEffect(() => 
    {
        axios.get("http://ustatap.testjed.me/public/api/ad") 
             .then((res) =>  (setlatestAdApi(res.data)  ))
        axios.get("http://ustatap.testjed.me/public/api/handymen") 
             .then((res) =>  (setMasterApi(res.data) ))
        axios.get("http://ustatap.testjed.me/public/api/company") 
             .then((res) =>  (setCompanyApi(res.data) ))
        axios.get("http://ustatap.testjed.me/public/api/jobcategory") 
             .then((res) =>  (setJobCategoryApi(res.data) ))

    },[] )

  
    
    
    

    latestAdApi.map((ad) => latestAd.push(<Ad name={ ad.title} costumer={ad.description} address={"Baku"} date={ad.updated_at} view={1258} image={ad.images} id={ad.id}/>)  ) 
    
    jobCategoryApi.map((category) => jobCategory.push(
        <button className="contForAside" onClick={() => clickHandler(category.id)}>
            <div className="workTypeCont">
                <img  width='30px' height='auto'  src={`http://ustatap.testjed.me/storage/app/public/${category.icon}`} alt={props.name}/>
                <p>{category.name}</p>
                <button ><img  src={arrDown} alt=""/></button>
            </div>
            <div className="workDescCont" id={`wD${category.id}`} >
                <p><Link to={`/ustalar/${category.id}`}>Ustalar <span>({23})</span></Link> </p>
                <p><Link to={`/elanlar/${category.id}`}>Elanlar <span>({22})</span></Link></p>
                <p><Link to={`/shirketler/${category.id}`}>Şirkətlər <span>({11})</span></Link></p>
            </div>
        </button>
    ))


    latestAdApi.map((ad, index ) => {if(ad.category_id == 3){santexnika.push(<Ad name={ ad.title} costumer={ad.description} address={"Baku"} date={ad.updated_at} view="1258" image={ad.images} id={ad.id}/>)}}) 
    latestAdApi.map((ad, index ) => {if(ad.category_id == 4){electric.push(<Ad name={ ad.title} costumer={ad.description} address={ad.city} date={ad.updated_at} view="1258" image={ad.images} id={ad.id}/>)}}) 
    
    MasterApi.map(master =>  {if(master.vip !== 1){ masters.push(<Ad2 name={master.name} job={master.surname} address={master.city} image={master.image} numberStar={master.rating} id={master.id} rating={master.rating}/>)}})
    MasterApi.map(master =>  {if(master.vip === 1){ vipMasters.push(<VipAd2 name={master.name} job={master.surname} address={master.city} image={master.image} numberStar={master.rating} id={master.id } rating={master.rating}/> )}})
    CompanyApi.map( company =>  { if(company.vip !== 1){ companies.push(<Ad3 id={company.id} numberStar={company.rating} image={company.image} name={company.company_name} location={company.company_adress} description={company.description}/>)}} )
    CompanyApi.map( company =>  {if(company.vip === 1){ vipCompanies.push(<VipAd3 id={company.id} numberStar={company.rating} image={company.image} name={company.company_name} location={company.company_adress} description={company.description}/>)}} )
    
    const  clickHandler = (number) => {
        if (document.getElementById("wD" + number).style.display === "block") {
            document.getElementById("wD" + number).setAttribute("style" , "display:nonne")
        }
        else 
        {
            document.getElementById("wD" + number).setAttribute("style" , "display:block")
        }  
    }



    return (
        <div className="homePage">
            


            <div className="mainBanner">Banner</div>
            
            
            
            <main className="main"> 
            
                <aside className="aside" id="aside">
                    {jobCategory.reverse()}
                </aside>



                {/* All Grids  All Grids  All Grids  All Grids  All Grids  All Grids  All Grids */}
                    <div className="allAdsContainer">


                        <div className="typeAddContainer"> 
                            <p className="title">Son Elanlar</p>
                            <div className="line1"></div>
                            <div className="adsContainer">
                                {latestAd}
                            </div>    
                            <Link to="/elanlar"><Button name="Bütün elanlara bax"/></Link>
                        </div>
                    

                        <SubBanner marginTop="60px" marginBottom="78px"/>


                    {
                        props.hideVip &&
                        <div className="typeAddContainer"> 
                            <p className="title">Vip Ustalar</p>
                            <div className="line2"></div>
                            <div className="adsContainer">
                                
                                {vipMasters}
                                
                            </div>  
                            <Link to="/ustalar"><Button name="Bütün ustalara bax" color="linear-gradient(90deg, #F37B29 0%, #F97922 100%)"/></Link>
                        </div>
                    }



                        <div className="typeAddContainer"> 
                            <p className="title">Ustalar</p>
                            <div className="line2"></div>
                            <div className="adsContainer">
                                {masters}
                            </div>  
                            <Link to="/ustalar"><Button name="Bütün ustalara bax" color="linear-gradient(90deg, #F37B29 0%, #F97922 100%)"/></Link>
                        </div>

                        <SubBanner marginTop="60px" marginBottom="78px"/>
                    
                        {
                        props.hideVip &&
                        <div className="typeAddContainer"> 
                            <p className="title">Vip Şirkətlər</p>
                            <div className="line3"></div>
                            <div className="adsContainer">
                                {vipCompanies}
                            </div>     
                            <Link to="/shirketler"><Button name="Bütün şirkətlərə bax"/></Link>
                        </div>
                        }

                        <FadeIn>
                        <div className="typeAddContainer"> 
                            <p className="title">Şirkətlər</p>
                            <div className="line3"></div>
                            <div className="adsContainer">
                                {companies}
                            </div>     
                            <Link to="/shirketler"><Button name="Bütün şirkətlərə bax"/></Link>
                        </div>
                        </FadeIn>
                        <div className="typeAddContainer"> 
                            <p className="title">Santexnika elanları</p>
                            <div className="line4"></div>
                            <div className="adsContainer">
                                {santexnika}
                            </div>      
                            <Link to="/elanlar"><Button name="Bütün elanlara bax"/></Link>
                        </div>


                        <SubBanner marginTop="60px" marginBottom="78px"/>


                        <div className="typeAddContainer"> 
                            <p className="title">Elektrik elanları</p>
                            <div className="line5"></div>
                            <div className="adsContainer">
                                {electric}
                            </div>  
                            <Link to="/elanlar"> <Button name="Bütün elanlara bax" color="linear-gradient(90deg, #F37B29 0%, #F97922 100%)"/></Link>
                        </div>

                       

                
                       

                


                    </div> 
                {/* All Grids  All Grids  All Grids  All Grids  All Grids  All Grids  All Grids */}

            </main>

        </div>
    )
    
}

export default (HomePage)

