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
    
    const Company1 = []
    const [CompanyApi1, setCompanyApi1] = useState([0])
    useEffect(() => 
    {
        axios.get("http://ustatap.testjed.me/company") 
            .then((res) =>  (setCompanyApi1(res.data) )) 

    } , [])
    Company1.push(CompanyApi1.map( company => <Ad3 id="3" numberStar={company.rating} image={company.image} name={company.company_name} location={company.company_adress} description={company.company_description}/>)  )
 
    const [VipCompanies, setVipCompanies] = useState([])
    VipCompanies.push(<VipAd3 numberStar={4} image={companyLogo} name={"Şirkət Adı"} location={"Bakı şəhəri "} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,"}/>)
    console.log("VipCompanies");

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
                            {VipCompanies}
                        </div>
                        <SubBanner/>
                        <div className="companiesCont">
                            {Company1}
                        </div>
                    </div>    


            </div>
        </div>
    )
}

export default Companies
