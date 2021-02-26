import React, { useEffect, useState } from 'react'
import "../assets/css/PagesCss/MyAds.css"
function MyAds(props) {
    
    const [UserAdsApi, setUserAdsApi] = useState(0)
    const [UserAds, setUserAds] = useState(0)
    useEffect(() => {
        if (UserAds === 0) {
            setUserAdsApi(JSON.parse(localStorage.getItem('LoginUserData')))
        }
    })

    return (
        <div className="myAds">
            
        </div>
    )
}

export default MyAds
