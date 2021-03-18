import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import "../assets/css/PagesCss/MyAds.css"
import Ad from './Ad'
import Ad2 from './Ad2'
import Ad3 from './Ad3'

function RequestsToElans() {
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
                axios.post("http://ustatap.testjed.me/public/api/getsorgu" , {user_id: UserData?.user?.id  }) 
                .then((res) =>  (setUserAds(res.data) , setregChecker(true) ))
            }
        }
    })

    UserAds?.map((user) => {if(user){UserAdsArr.push(<Ad name={ user.title} desc={user.description}   view={user.views} image={user.images} id={user.id} userId={UserData?.id}/>)}else{}}) 
    return (
        <div className="myAds">
            {UserAdsArr}
        </div>
    )
}

export default RequestsToElans
