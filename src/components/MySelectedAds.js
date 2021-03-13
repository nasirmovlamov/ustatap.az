import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../assets/css/PagesCss/MyAds.css"
import Ad from './Ad'
function MySelectedAds() {
    const [UserAds, setUserAds] = useState([0])
    const UserAdsArr = []
    useEffect(() => 
    {
        axios.post("http://ustatap.testjed.me/public/api/getselectedads" , {id:props.UserData.user.id}) 
             .then((res) =>  (setUserAds(res.data.elan)  ))
    }, [])
    UserAds?.map((ad) => UserAdsArr.push(<Ad name={ ad.title} desc={ad.description}  date={ad.updated_at} view={ad.views} image={ad.images} id={ad.id} userId={props.UserData?.id}/>)  ) 
    
    return (
        <div className="myAds">
            {UserAdsArr} 
        </div>
    )
}

export default MySelectedAds
