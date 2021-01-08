import React,{useState,useEffect} from 'react'
import Ad3 from '../../components/Ad3'
import axios from "axios"
import  "../../assets/css/componentsCss/companies.css"
import {
    Link
  } from "react-router-dom";
import Category from '../../components/Category';
import Button from '../../components/Button';
import adImage from "../../assets/images/component/element/adImage.png"
import Ad from '../../components/Ad';
import Ad2 from '../../components/Ad2';
import SubBanner from '../../components/SubBanner';
import master from "../../assets/images/component/element/master.png"
import VipAd3 from '../../components/VipAd3';
import companyLogo from "../../assets/images/component/element/companyLogo.png"
import vipCompaniesTop from "../../assets/images/component/element/vipCompaniesTop.svg"
function Companies() {
    var url = window.location.href;
    var id = url.substring(url.lastIndexOf('/masters/') + 1);
    var mainId = url.substring(url.lastIndexOf('/') + 1);
    
    const companies = []
    const vipCompanies = []
    const [CompanyApi, setCompanyApi] = useState([0])
    useEffect(() => 
    {
        axios.get("http://ustatap.testjed.me/company") 
            .then((res) =>  (setCompanyApi(res.data) )) 

    } , [])
    CompanyApi.map( company =>  { if(company.vip !== 1){ companies.push(<Ad3 id={company.id} numberStar={company.rating} image={company.image} name={company.company_name} location={company.company_adress} description={company.description}/>)}} )
    CompanyApi.map( company =>  {if(company.vip === 1){ vipCompanies.push(<VipAd3 id={company.id} numberStar={company.rating} image={company.image} name={company.company_name} location={company.company_adress} description={company.description}/>)}} )


    return (
        <div className="companiesPage">
             <div className="generalCont">
                <div className="linkAndButton">
                    <div className="link">
                        <p>
                        <Link to="/">
                            <a href=""> ustaTap.net</a> 
                        </Link>
                            -&gt;
                        <Link to="/elanlar">
                            <a href="">şirkətlər</a> 
                        </Link>
                            
                        </p>
                    </div>
                    <button className="topButton">Şirkətlər üzrə Axtarış</button>
                </div>

                <Category  type4={1} type3={1}  btnColor="#F97922"/>

                    <div className="adsContainer">
                        <img src={vipCompaniesTop} className="topImgVIP" alt=""/>
                        <div className="companiesVipCont">
                            {vipCompanies}
                        </div>
                        <SubBanner/>
                        <div className="companiesCont">
                            {companies}
                        </div>
                    </div>    


            </div>
        </div>
    )
}

export default Companies
