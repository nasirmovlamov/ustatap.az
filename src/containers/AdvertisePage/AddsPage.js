import React,{useState} from 'react'
import  "../../assets/css/PagesCss/addsPage.css"
import {
    Link
  } from "react-router-dom";
import Category from '../../components/Category';
import Button from '../../components/Button';
import adImage from "../../assets/images/component/element/adImage.png"
import Ad from '../../components/Ad';

function AddsPage(props) {
    const [Adds, setAdds] = useState([])
    for (let i = 0; i <= 15; i++) {
        Adds.push(<Ad name="New Ad" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="1258" image={adImage} id={i}/>  ) 
    }
    return (
        <div className="addsPage">
            <div className="generalCont">
                <div className="linkAndButton">
                    <div className="link">
                        <p>
                        <Link to="/">
                            <a href=""> ustaTap.net</a> 
                        </Link>
                            -&gt;
                        <Link to="/elanlar">
                            <a href="">elanlar</a> 
                        </Link>
                            
                        </p>
                    </div>
                    <button className="topButton">Elanlar üzrə Axtarış</button>
                </div>

                <Category type4={undefined} btnColor="#F27B29"/>

                    <div className="adsContainer">
                        {Adds}
                    </div>    


            </div>
        </div>
    )
}

export default AddsPage
