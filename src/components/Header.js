import React,{useState,useEffect} from 'react'
import human from "../assets/images/component/element/human.svg"
import mainLogo from "../assets/images/component/element/mainLogo.svg"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
  } from "react-router-dom";
import "../assets/css/componentsCss/header.css"
import HomePage from './../containers/HomePage/HomePage';
import SearchBox from './SearchBox';
import SelectedAd from './../containers/HomePage/SelectedAd';
import SelectedMaster from '../containers/HomePage/SelectedMaster';
import SelectedCompany from '../containers/HomePage/SelectedCompany';
import AddsPage from '../containers/AdvertisePage/AddsPage';
import Masters from '../containers/MastersPage/Masters';
import Companies from '../containers/Companies/Companies';
import AboutUs from '../containers/AboutUsPage/AboutUs';
import Footer from './Footer';
import Addvertise from '../containers/AdvertisePage/Addvertise';
import Contact from '../containers/Contact/Contact';
import Page404 from '../containers/ErrorsPage/Page404';
import MasterRegistration from '../containers/RegistrationPages/MasterRegistration';
import TopSelection from './TopSelection';
import CompanyRegistration from '../containers/RegistrationPages/CompanyRegistration';
import UserRegistration from '../containers/RegistrationPages/UserRegistration';
import Slider from './Slider';
import ScrolltoTop from './ScrolltoTop';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import LoginModal from './LoginModal'



function Header() {
    const [Ad, setAd] = useState([12,12])
    const [Master, setMaster] = useState([12,12])
    const [Company, setCompany] = useState([12,12])
    function SelectedLatestAd(id) {
      for (let i = 0; i < Ad[0]; i++) {

      }
  }
  
  const useStyles = makeStyles((theme) => ({
        paper: {
          position: 'absolute',
          width: 400,
          backgroundColor: "red",
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
        },
      }));
  const classes = useStyles();
  
    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
    setOpen(false);
    };

    const hideVip = 1;
   
    
    window.addEventListener("scroll", function(){
      if (window.scrollY > 50)
      {
        document.getElementById('navbar').setAttribute('style' , 'background:rgba(0,0,0,0.8);transition:0.5s background;box-shadow: 10px 10px 10px rgba(0,0,0,0.3);')
      }
      else if (window.scrollY < 50)
      {
        document.getElementById('navbar').setAttribute('style' , 'background:transparent;transition:0.5s background;box-shadow: transparent;')

      } 
    });
    return (
        
        <Router>
          
        <ScrolltoTop />
        
        
        <Modal  
                  style={{display:"flex", justifyContent:"center",overflow:"auto",backgroundColor:"rgba(0,0,0,0.5)",}}
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description">
                  {<LoginModal modalOpener={handleOpen} modalCloser={handleClose}/>}
        </Modal>

          <div className="topContainer" >
            <navbar className="navbar" id="navbar">
                <Link to="/"><img className="navlogo" src={mainLogo} width="90px" alt=""/></Link>
                <div className="text"> 
                    <a href="/"><p>Əsas Səhifə</p></a>
                    <a href="/elanlar"><p>Elanlar</p> </a>
                    <a href="/ustalar"><p>Ustalar</p> </a>
                    <a href="/shirketler"> <p>Şirkətlər</p> </a>
                    <a href="/haqqimizda"><p>Haqqımızda</p> </a>
                    <a href="/reklam"><p>Reklam</p> </a>
                    <a href="/elaqe"><p>Əlaqə</p> </a>
                    <button className="login" onClick={() => handleOpen()}  ><p ><img src={human} alt=""/> <p>Daxil ol</p></p></button>
                    <a href="/istifadeci-qeydiyyati"><button className="putAd"><span>+</span> Elan Yerləşdir</button></a> 
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
                <Masters hideVip={hideVip}/>
              </Route>
              <Route path="/shirketler">
                <Companies hideVip={hideVip}/>
              </Route>
              <Route path="/haqqimizda">
                <AboutUs/>
              </Route>
              <Route path="/reklam">
                <Addvertise/>
              </Route>
              <Route path="/elaqe">
                <Contact/>
              </Route>
              <Route path="/404">
                <Page404/>
              </Route>
              <Route path="/usta-qeydiyyati">
                <MasterRegistration/>
              </Route>
              <Route path="/shirket-qeydiyyati">
                <CompanyRegistration/>
              </Route>
              <Route path="/istifadeci-qeydiyyati">
                <UserRegistration/>
              </Route>
              <Route path="/sliderTest">
                <Slider/>
              </Route>
              <Route path="/">
                <HomePage hideVip={hideVip} numberOfLatestAd={Ad[0]} numberOfMasters={Master[0]} numberOfCompanies={Company[0]}/>
              </Route>
              
              
            </Switch>
            <Footer/>

      </Router>
    )
}

export default Header
