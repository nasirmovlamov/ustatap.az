import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../assets/css/PagesCss/MyAds.css"
import Ad from './Ad'
function MySelectedAds(props) {
    var selectedAds = JSON.parse(sessionStorage.getItem('secilmishElan'))

    
    return (
        <div className="myAds">
            {selectedAds?.map((ad) => (<Ad name={ ad.title} desc={ad?.user_name} address={ad?.city_id?.name} date={ad.tarix} view={ad.views} image={ad.images} id={ad?.id} userId={props.UserData?.id} />)  )}
        </div>
    )
}

export default MySelectedAds
