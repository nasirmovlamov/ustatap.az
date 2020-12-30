import React,{useState} from 'react'
import Ad3 from '../../components/Ad3'
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
    const [Companies, setCompanies] = useState([])
    for (let i = 0; i <= 5; i++) {
        Companies.push(<Ad3 numberStar={4} image={companyLogo} name={"Şirkət Adı"} location={"Bakı şəhəri "} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,"}/>)
    }    
    const [VipCompanies, setVipCompanies] = useState([])
    for (let i = 0; i <= 5; i++) {
        VipCompanies.push(<VipAd3 numberStar={4} image={companyLogo} name={"Şirkət Adı"} location={"Bakı şəhəri "} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,"}/>)
    }    
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
                            {Companies}
                        </div>
                    </div>    


            </div>
        </div>
    )
}

export default Companies
