import React from 'react'
import "../../assets/css/componentsCss/addvertise.css"
import {
    Link
  } from "react-router-dom";

import Footer from '../../components/Footer';
import Statistica from '../../components/Statistica';
import manForReklam from "../../assets/images/component/element/manForReklam.svg"
import Button from '../../components/Button';
function Addvertise() {
    return (
        <div className="addvertise">
            <div className="generalCont">
                
                <div className="linkAndButton">
                    <div className="link">
                        <p>
                        <Link to="/">
                            <a href=""> ustaTap.net</a> 
                        </Link>
                            -&gt;
                        <Link to="/reklam">
                            <a href="">reklam</a> 
                        </Link>
                            
                        </p>
                    </div>
                </div>

                <div className="reklamCont"> 
                    <img src={manForReklam} alt=""/>
                    <div className="reklamText">
                        <p className="reklamTitle">UstaTap.net saytında reklam</p>
                        <p className="reklamDescription">
                            <p>UstaTap.net - Azərbaycanın ən məşhur və stabil artan internet resurslarından biridir. Hər gün bu saytı minlərlə insan ziyarət edir.</p>
                            <p>UstaTap.net saytında reklam sizin brendləriniz, məhsullarınız, xidmətləriniz, aksiyalarınız və əhəmiyyətli hadisələriniz barədə məlumatı çox geniş auditoriyaya çatdırmaq üçün ən gözəl üsüllarından biridir!</p>
                            <p>Siz həm brendinizin tanınmasının əhəmiyyətli dərəcədə artmasına, həm də məhsullarınız barədə məlumatın geniş yayılmasına nail olacaq, və həmçinin şirkətlərinizin internet saytlarının ziyarət edilməsinin sadə üsülla çoxalması imkanını əldə edəcəksiniz.</p>
                            <p>Sizinlə əməkdaşlığa şad olardıq!</p>
                        </p>
                    </div>
                </div>
            </div>
                <Statistica/>        
                <div className="formCont">
                    <form action="" method="post">
                        <p className="formTitle">Reklam üçün müraciət edin</p>
                        <div className="gridContForm">
                            <input type="text" placeholder="Ad və soyad"/>
                            <input type="text" placeholder="Telefon nömrəsi"/>
                            <input type="text" placeholder="Elektron poçt ünvanı"/>
                            <input type="text" placeholder="Şirkətin adı"/>
                        </div>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Müraciət Mətn"></textarea>
                        <Button name="Göndər"/>
                    </form>
                </div>
        </div>
    )
}

export default Addvertise
