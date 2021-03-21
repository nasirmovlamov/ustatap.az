import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../assets/css/PagesCss/MyAds.css"
import Ad2 from './Ad2'
function SelectedMAMasters(props) {
    const [Masters, setMasters] = useState([0])
    const MastersArr = []
    useEffect(() => 
    {
        axios.post("https://ustatap.net/public/api/getselecteds" , {user_id:props.UserData.user.id}) 
             .then((res) =>  (setMasters(res.data)  ))
    }, [])
    Masters?.map((master) => MastersArr.push(<Ad2 name={master.name} job={master.surname} address={master.city} image={master.image} numberStar={master.rating} id={master.id} rating={master.rating}/>)  ) 
    
    return (
        <div className="myAds">
            {MastersArr}
        </div>
    )
}

export default SelectedMAMasters
