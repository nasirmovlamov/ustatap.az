import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../assets/css/PagesCss/MyAds.css"
import Ad from './Ad'
function MySelectedAds(props) {
    const [UserAds, setUserAds] = useState([0])
    const UserAdsArr = []
    useEffect(() =>
    {
        axios.post("https://ustatap.net/public/api/getselectedads" , {user_id:props.UserData.user.id})
        .then((res) =>  (setUserAds(res.data)  ))
    }, [])
    UserAds?.map((ad) => UserAdsArr.push(<Ad name={ ad.title} desc={ad.description}  date={ad.updated_at} view={ad.views} image={ad.images} id={ad.id} userId={props.UserData?.id}/>)  )

    return (
        <div className="myAds">
            {UserAdsArr}
        </div>
    )
}

export default MySelectedAds
