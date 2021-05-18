import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../assets/css/PagesCss/MyAds.css"
import Ad2 from './Ad2'
import VipAd2 from './VipAd2'
function SelectedMAMasters(props) {
    
    var selectedMasters = JSON.parse(sessionStorage.getItem('secilmishUsta'))
    var selectedVipMasters = JSON.parse(sessionStorage.getItem('secilmishVipUsta'))

    return (
        <div className="myAds">
                {selectedMasters?.map((master) =>  <Ad2 name={master?.name} job={master?.category_id?.name} address={master?.address} image={master.image} numberStar={master.rating} rating={master.rating_count} id={master.id}/>  ) }
                {selectedVipMasters?.map((master) =>  <VipAd2 name={master?.name} job={master?.category_id?.name} address={master?.address} image={master.image} numberStar={master.rating} rating={master.rating_count} id={master.id} />  ) }
        </div>
    )
}

export default SelectedMAMasters
