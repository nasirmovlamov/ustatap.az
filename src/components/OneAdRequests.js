import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import "../assets/css/PagesCss/MyAds.css"
import Ad2 from './Ad2'

function OneAdRequests(props) {
    const [UserAds, setUserAds] = useState([    ])
    const UserAdsArr = []
    let { id } = useParams();
    useEffect(() => {
        axios.post("https://ustatap.net/public/api/gethandysorgu", { elan_id: id })
            .then((res) => (setUserAds(res.data)))
    }, [])
    if (UserAds.length > 0 ) {
        UserAds?.map((master) => UserAdsArr.push(<Ad2 name={master?.name} job={master?.category_id?.name} address={master?.city?.name} image={master.image} numberStar={master.rating} rating={master.rating_count} id={master.id}/>))
    }
    return (
        <div className="myAds">
            {UserAdsArr}
        </div>
    )
}

export default OneAdRequests
