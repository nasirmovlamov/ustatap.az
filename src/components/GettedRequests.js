import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import "../assets/css/PagesCss/MyAds.css"
import AdSorguLink from './AdSorguLink'

function GettedRequests(props) {
    const [UserAds, setUserAds] = useState([0])
    const UserAdsArr = []
    useEffect(() => 
    {
        axios.post("https://ustatap.net/public/api/user/ads" , {id:props.UserData.user.id}) 
             .then((res) =>  (setUserAds(res.data.elan)))
    }, [])
    UserAds?.map((ad) => UserAdsArr.push(<AdSorguLink  name={ ad.title} desc={ad.description}  date={ad.updated_at} view={ad.views} image={ad.images} id={ad.id} userId={props.UserData?.id}/>)  ) 
    return (
        <div className="myAds">
            {UserAdsArr}
        </div>
    )
}

export default GettedRequests
