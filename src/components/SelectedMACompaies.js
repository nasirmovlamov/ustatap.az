import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../assets/css/PagesCss/MyAds.css"
import Ad3 from './Ad3'
function SelectedMACompaies(props) {
    const [Companies, setCompanies] = useState([0])
    const CompaniesArr = []
    console.log(props.UserData.user.id);
    useEffect(() => 
    {
        axios.post("http://ustatap.testjed.me/public/api/getselectedshirket" , {user_id:props.UserData.user.id}) 
             .then((res) =>  (setCompanies(res.data)  ))
    }, [])
    Companies?.map((company) => CompaniesArr.push(<Ad3 id={company.id} numberStar={company.rating} image={company.image} name={company.company_name} location={company.company_adress} description={company.description}/>)  ) 
    
    return (
        <div className="myAds">
            {CompaniesArr}
        </div>
    )
}

export default SelectedMACompaies
