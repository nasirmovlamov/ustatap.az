import React,{useState} from 'react'
import  "../../assets/css/componentsCss/masters.css"
import {
    Link
  } from "react-router-dom";
import Category from '../../components/Category';
import Button from '../../components/Button';
import adImage from "../../assets/images/component/element/adImage.png"
import Ad from '../../components/Ad';
import Ad2 from '../../components/Ad2';
import master from "../../assets/images/component/element/master.png"

function Masters() {

    const [Masters, setMasters] = useState([])
    for (let i = 0; i <= 15; i++) {
        Masters.push(<Ad2 name="Şahin Zeynallı" job="malyar" address="Bakı ş, Yasamal ray" image={master} numberStar={2} id={i}/> )
    }    
    return (
        <div className="mastersPage">
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
                    <button className="topButton">Ustalar üzrə Axtarış</button>
                </div>

                <Category/>

                    <div className="adsContainer">
                        {Masters}
                    </div>    


            </div>
        </div>
    )
}

export default Masters
