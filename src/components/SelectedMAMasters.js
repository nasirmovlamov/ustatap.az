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
                {selectedMasters?.map((master) =>  <Ad2 name={master.name} job={master.job} address={master.address} image={master.image} numberStar={master.numberStar} id={master.id} rating={master.rating}/>  ) }
                {selectedVipMasters?.map((master) =>  <VipAd2 id={master.id} name={master?.name} job={master?.job} address={master?.address} image={master.image} numberStar={master.numberStar} rating={master.rating}  />  ) }
        </div>
    )
}

export default SelectedMAMasters
