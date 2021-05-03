import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../assets/css/PagesCss/MyAds.css"
import Ad from './Ad'
function MySelectedAds(props) {
    var selectedAds = JSON.parse(sessionStorage.getItem('secilmishElan'))

    
    return (
        <div className="myAds">
            {selectedAds?.map((ad) => (<Ad name={ ad.name} desc={ad.desc}  date={ad.date} view={ad.view} image={ad.image} id={ad.id} userId={props.id}/>)  )}
        </div>
    )
}

export default MySelectedAds
