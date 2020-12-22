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
function Header() {
    const [Ad, setAd] = useState([15,15,15])
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
            <Route path={`/elanlar/secilmish-son-elan-:id`}>
              <SelectedAd />
            </Route>
            <Route path="/">
              <HomePage numberOfLatestAd={Ad[0]}/>
            </Route>
            <Route path="/elanlar">
            </Route>
            
          </Switch>
      </Router>
    )
}

export default Header
