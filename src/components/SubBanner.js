import React from 'react'
import "../assets/css/componentsCss/subBanner.css"
import  bannerBg from "../assets/images/component/background/subBannerBg.jpg"
function SubBanner(props) {
    
    const bgImg = {
        backgroundImage: `url(https://ustatap.net/storage/app/public/${props?.banner?.image})`,
        backgroundRepeat: 'no-repeat',  
        backgroundSize: '100%',  
        backgroundPosition: 'center',  
    }
    
    return (
        <div className="subBanner" style={bgImg}>
        </div>
    )
}

export default SubBanner
