import React,{useState} from 'react'
import human from "../assets/images/component/element/human.svg"
import mainLogo from "../assets/images/component/element/mainLogo.svg"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import "../assets/css/componentsCss/header.css"
import HomePage from './../containers/HomePage/HomePage';
import SearchBox from './SearchBox';
import SelectedAd from './../containers/HomePage/SelectedAd';
import SelectedMaster from '../containers/HomePage/SelectedMaster';
import SelectedCompany from '../containers/HomePage/SelectedCompany';
import AddsPage from '../containers/AdvertisePage/AddsPage';
import Masters from '../containers/MastersPage/Masters';
function Header() {
    const [Ad, setAd] = useState([12,12])
    const [Master, setMaster] = useState([12,12])
    const [Company, setCompany] = useState([12,12])
    function SelectedLatestAd(id) {
      for (let i = 0; i < Ad[0]; i++) {

      }
    }
    return (
        
        <Router>
        <div className="topContainer">
          <navbar className="navbar">
              <img src={mainLogo}  alt=""/>
              <div className="text"> 
                  <Link to="/"><p>Əsas Səhifə</p></Link>
                  <Link to="/elanlar"><p>Elanlar</p> </Link>
                  <Link to="/ustalar"><p>Ustalar</p> </Link>
                  <Link to="/shirketler"> <p>Şirkətlər</p> </Link>
                  <Link to="/haqqimizda"><p>Haqqımızda</p> </Link>
                  <Link to="/reklam"><p>Reklam</p> </Link>
                  <Link to="/elaqe"><p>Əlaqə</p> </Link>
                  <button className="login"><p ><img src={human} alt=""/> <p>Daxil ol</p></p></button>
                  <button className="putAd"><span>+</span> Elan Yerləşdir</button> 
              </div>
          </navbar>
          <SearchBox/>
        </div>


          <Switch>
            <Route path={`/elanlar/secilmish-son-elan/:id`}>
              <SelectedAd/>
            </Route>
            <Route path={`/masters/:id`}>
              <SelectedMaster/>
            </Route>
            <Route path={`/companies/:id`}>
              <SelectedCompany/>
            </Route>
            <Route path="/elanlar">
              <AddsPage/>
            </Route>
            <Route path="/ustalar">
              <Masters/>
            </Route>
            <Route path="/">
              <HomePage numberOfLatestAd={Ad[0]} numberOfMasters={Master[0]} numberOfCompanies={Company[0]}/>
            </Route>
            
            
          </Switch>
      </Router>
    )
}

export default Header
