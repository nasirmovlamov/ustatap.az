import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import "../assets/css/PagesCss/MyAds.css"
import Ad2 from './Ad2'

function OneAdRequests(props) {
    const [UserAds, setUserAds] = useState([0])
    const UserAdsArr = []
    let { id } = useParams();
    useEffect(() => {
        axios.post("https://ustatap.net/public/api/gethandysorgu", { elan_id: id })
            .then((res) => (setUserAds(res.data)))
    }, [])
    UserAds?.map((master) => UserAdsArr.push(<Ad2 name={master.name} job={master.surname} address={master.city} image={master.image} numberStar={master.rating} id={master.id} rating={master.rating} />))
    return (
        <div className="myAds">
            {UserAdsArr}
        </div>
    )
}

export default OneAdRequests
