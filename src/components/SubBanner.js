import React from 'react'
import "../assets/css/componentsCss/subBanner.css"
import  bannerBg from "../assets/images/component/background/subBannerBg.jpg"
function SubBanner(props) {
    const margin = {
        marginTop: props.marginTop,
        marginBottom: props.marginBottom
    }
    return (
        <div className="subBanner" style={margin}>
            Banner
        </div>
    )
}

export default SubBanner
