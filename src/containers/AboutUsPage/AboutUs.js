import React from 'react'
import "../../assets/css/componentsCss/aboutUs.css"
import {
    Link
  } from "react-router-dom";

import Footer from '../../components/Footer';
import Statistica from '../../components/Statistica';
function aboutUs() {
    return (
        <div className="aboutUs">
            <div className="generalCont">
                
                <div className="linkAndButton">
                    <div className="link">
                        <p>
                        <Link to="/">
                            <a href=""> ustaTap.net</a> 
                        </Link>
                            -&gt;
                        <Link to="/haqqimizda">
                            <a href="">haqqımızda</a> 
                        </Link>
                            
                        </p>
                    </div>
                </div>

                <p className="aboutText"> 
                    <p className="aboutTitle">Haqqımızda</p>
                    <p>UstaTap.net layihəsi Azərbaycanda özəl elanlar üçün universal meydança təşkil etmək məqsədi ilə yaradılıb.</p>
                        Hər bir kəs saytdan istifadə etməklə temir-tikintiyle bağlı bütün problemlerini paylaşa bilər. İstediyiniz ustalar,hemçinin şirkətlər haqqında məlumat ala ve xidmətlərdən yararlana bilərsiniz. Siz istədiyiniz elanı paylasdıqdan sonra ustalar təkliflərini bildirdikdə istədiyinizi secə bilərsiz. Sizə uyğun təklifləri yenidən bildirdikdən sonra ustayla elaqələndireceyik. Tək hədəfimiz görülən işin keyfiyyətli və problemsiz görülməsidir
                </p>


            </div>
                
                <Statistica/>        
        </div>
    )
}

export default aboutUs
