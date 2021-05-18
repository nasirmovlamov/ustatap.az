import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import "../assets/css/PagesCss/MyAds.css"
import Ad from './Ad'
import Ad2 from './Ad2'
import Ad3 from './Ad3'

function RequestsToElans(props) {
    const [UserData, setUserData] = useState(0)
    const [UserAds, setUserAds] = useState([0])
    const UserAdsArr = []
    useEffect(() => {
        if (UserData?.user?.id === undefined) 
        {
            setUserData(JSON.parse(localStorage.getItem('LoginUserData')))
        }
        
      } )
      console.log(UserData?.user?.id);
      
    const [regChecker, setregChecker] = useState(false)
    useEffect(() => {
        if (UserData?.user?.id !== undefined) 
        {
            if (!regChecker) {
                axios.post("https://ustatap.net/public/api/getsorgu" , {user_id: UserData?.user?.id  }) 
                .then((res) =>  (setUserAds(res.data) , setregChecker(true) ))
            }
        }
    })

    UserAds?.map((ad) => {if(ad){UserAdsArr.push(<Ad name={ ad.title} desc={ad?.user_name} address={ad?.city_id?.name} date={ad.tarix} view={ad.views} image={ad.images} id={ad?.id} userId={UserData?.id}/>)}else{}}) 
    return (
        <div className="myAds">
            {UserAdsArr}
        </div>
    )
}

export default RequestsToElans
