import React from 'react'
import "../assets/css/componentsCss/subBanner.css"
import  bannerBg from "../assets/images/component/background/subbanner.jpg"
function SubBanner(props) {
    
    const bgImg = {
        backgroundImage: `url(${bannerBg})`,
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
