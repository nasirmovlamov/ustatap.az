import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../assets/css/PagesCss/MyAds.css"
import Ad3 from './Ad3'
import VipAd3 from './VipAd3'
function SelectedMACompaies(props) {
    var selectedCompanies = JSON.parse(sessionStorage.getItem('secilmishShirket'))
    var selectedVipCompanies = JSON.parse(sessionStorage.getItem('secilmishVipShirket'))
    
    return (
        <div className="myAds">
            {    selectedCompanies?.map((company) => (<Ad3 id={company.id} numberStar={company.numberStar} image={company.image} name={company.name} location={company.location} description={company.description}/>)  ) }
            {    selectedVipCompanies?.map((company) => (<VipAd3 id={company.id} numberStar={company.rating} image={company.image} name={company.name} location={company.location} description={company.description} rating={company.rating}/>)  ) }
        </div>
    )
}

export default SelectedMACompaies
