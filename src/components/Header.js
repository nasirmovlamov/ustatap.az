import React from 'react'
import human from "../assets/images/component/element/human.svg"
import mainLogo from "../assets/images/component/element/mainLogo.svg"

import "../assets/css/componentsCss/header.css"
function Header() {
    return (
        <navbar className="navbar">
            <img src={mainLogo} alt=""/>
            <div className="text"> 
                <p>Əsas Səhifə</p>  
                <p>Elanlar</p>  
                <p>Ustalar</p>  
                <p>Şirkətlər</p>  
                <p>Haqqımızda</p>  
                <p>Reklam</p>  
                <p>Əlaqə</p>
                <button className="login"><p ><img src={human} alt=""/> <p>Daxil ol</p></p></button>
                <button className="putAd"><span>+</span> Elan Yerləşdir</button> 
            </div>
        </navbar>
    )
}

export default Header
