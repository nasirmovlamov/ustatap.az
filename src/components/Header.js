import React,{useState,useEffect} from 'react'
import human from "../assets/images/component/element/human.svg"
import mainLogo from "../assets/images/component/element/mainLogo.svg"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation,
    Redirect
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
import SearchListing from '../containers/HomePage/SearchListing';
import MasterRegistration from '../containers/RegistrationPages/MasterRegistration';
import TopSelection from './TopSelection';
import CompanyRegistration from '../containers/RegistrationPages/CompanyRegistration';
import UserRegistration from '../containers/RegistrationPages/UserRegistration';
import Slider from './Slider';
import ScrolltoTop from './ScrolltoTop';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';
import LoginModal from './LoginModal'
import MemberArea from '../containers/MemberArea/MemberArea';
import { useHistory } from "react-router-dom";
import Cookies from 'js-cookie';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Dropdown, DropdownButton, NavDropdown } from 'react-bootstrap';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Sling as Hamburger } from 'hamburger-react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchIcon from '@material-ui/icons/Search';
import { FormControl, MenuItem } from '@material-ui/core';
import { Select } from '@tensorflow/tfjs-core';
const stylesForSwiper = makeStyles({
  list: {
    width: "auto",
  },
  fullList: {
    width: "auto",
  },
}); 



function Header() {
    const navTextMQ = useMediaQuery('(min-width:1175px)');
    const navDropdownMQ = useMediaQuery('(max-width:1170px)');
    const elanAddBtnMQ = useMediaQuery('(max-width:1170px)');
    const loginMQ = useMediaQuery('(max-width:1170px)');
    const searchMQ = useMediaQuery('(max-width:650px)');
    const navLogoMQ = useMediaQuery('(max-width:1170px)');
    const menuMQ = useMediaQuery('(max-width:1170px)');
    var SelectedThings = ['salam']
    Cookies.set('SelectedThings' , SelectedThings)
    const [UserData, setUserData] = useState(0)

    useEffect(() => {
      if (UserData?.user?.id === undefined) 
      {
          setUserData(JSON.parse(localStorage.getItem('LoginUserData')))
      }
    } )
  console.log(UserData)
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
    
    const [open, setOpen] = useState(false);
    const history = useHistory();
    const handleClose = () => {
      setOpen(false);
      window.location.reload()
    };

    const hideVip = 1;
    window.addEventListener("scroll", function(){
      if (window.scrollY > 50 &&  document.getElementById('navbar') !== null)
      {
        document.getElementById('navbar').setAttribute('style' , 'background:rgba(0,0,0,0.5);transition:0.5s background;box-shadow: 10px 10px 10px rgba(0,0,0,0.3);')
      }
      else if (window.scrollY < 50 && document.getElementById('navbar') !== null)
      {
        document.getElementById('navbar').setAttribute('style' , 'background:transparent;transition:0.5s background;box-shadow: transparent;')
      } 
    });
    const handleOpen = () => {
          UserData?.user?.id !== undefined ? history.push('/member-area')  : setOpen(true)  
    };
    const putAd = () => {
         UserData?.user?.id !== undefined ? history.push('/member-area/elan-add')  : window.location.href = "/login"  
    }
    useEffect(() => {
      if(window.location.href.substring(window.location.href.lastIndexOf('/') + 1) === "login")
      {
        handleOpen()
      }
    }, [])
    const [type, settype] = useState('elan');
    const [jobcategory, setjobcategory] = useState('12');
    const [city, setcity] = useState('1');


    const userImg = {
      backgroundImage: `url(http://ustatap.testjed.me/${UserData?.user?.image})`,
      backgroundRepeat: 'no-repeat',  
      backgroundSize: 'cover',  
      backgroundPosition: 'top center',  
  }


    const classes = stylesForSwiper();
    const [state, setState] = React.useState({
      left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
      <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      >
        <div className="swiperTitle"><button className="login" onClick={() => handleOpen()}>{ UserData?.user?.image === undefined ? <img src={human } alt=""/> : <div className="userImgCont" style={userImg}></div> }   { UserData?.user?.id !== undefined ?<p className="nameL">{UserData?.user?.name}</p> : <p >Daxil ol</p> }</button>  <button className="btnMenu">x</button></div>
        <Divider />
        <List>
            <ListItem button >
                <Link to="/"><p>Əsas Səhifə</p></Link>
            </ListItem>
            <ListItem button >
                <a href="/elanlar"><p>Elanlar</p> </a>
            </ListItem>
            <ListItem button >
                <a href="/ustalar"><p>Ustalar</p> </a>
            </ListItem>
            <ListItem button >
                <a href="/shirketler"> <p>Şirkətlər</p> </a>
            </ListItem>
            <ListItem button >
                <Link to="/haqqimizda"><p>Haqqımızda</p> </Link>
            </ListItem>
            <ListItem button >
                <Link to="/reklam"><p>Reklam</p> </Link>
            </ListItem>
            <ListItem button >
                <Link to="/elaqe"><p>Əlaqə</p> </Link>
            </ListItem>
            { UserData?.user?.image === undefined ? "" :
            <ListItem button >
                <a href="/"><button onClick={logOut}> <ExitToAppIcon/> Çıxış</button> </a>
            </ListItem>}

        </List>
        
      </div>
    );
    
    


    const searchDrawer = stylesForSwiper();
    const [state3, setState3] = React.useState({
      top: false,
    });

    const toggleDrawer3 = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }

      setState3({ ...state3, [anchor]: open });
    };
    const listSearch = (anchor) => (
      <div
      className={clsx(searchDrawer.list, {
        [searchDrawer.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      >
         <div className="swiperTitle"> <p>Axtarış</p> <button className="btnMenu" onClick={toggleDrawer3(anchor, false)} onKeyDown={toggleDrawer3(anchor, false)}>X</button></div>
        <Divider />
        <div className="searchDW">
            <SearchBox settype={settype} setjobcategory={setjobcategory} setcity={setcity} type={type} jobcategory={jobcategory} city={city}/>
        </div>
        
      </div>
    );
    
    
    
    
    const logOut = () => {localStorage.clear()}




    return (
        
      <>
          
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
                  <Link to="/" className="imgAndLink"><img className="navlogo" src={mainLogo} width="90px" alt=""/> {navLogoMQ && "Ustatap.net"}</Link>
                   <div className="text" >
                   { navTextMQ &&
                    <>
                      <Link to="/"><p>Əsas Səhifə</p></Link>
                      <a href="/elanlar"><p>Elanlar</p> </a>
                      <a href="/ustalar"><p>Ustalar</p> </a>
                      <a href="/shirketler"> <p>Şirkətlər</p> </a>
                      <Link to="/haqqimizda"><p>Haqqımızda</p> </Link>
                      <Link to="/reklam"><p>Reklam</p> </Link>
                      <Link to="/elaqe"><p>Əlaqə</p> </Link>
                    </>
                  }
                  { searchMQ && 
                          <div>
                          {
                            <React.Fragment key={'top'}>
                              <button onClick={toggleDrawer3('top', true)} className="searchNavIco"><SearchIcon/></button>
                              <Drawer anchor={'top'} open={state3['top']} onClose={toggleDrawer3('top', false)}>
                                {listSearch('top')}
                              </Drawer>
                            </React.Fragment>
                          }
                        </div>
                  }
                  { menuMQ && 
                          <div>
                          {
                            <React.Fragment key={'left'}>
                              <Hamburger color="#FFFFFF" toggled={state['left']} toggle={toggleDrawer('left', true)} />
                              <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                                {list('left')}
                              </Drawer>
                            </React.Fragment>
                          }
                        </div>
                  }



                  {!loginMQ && <button className="login" onClick={() => handleOpen()}><p>{ UserData?.user?.image === undefined ? <img src={human } alt=""/> : <div className="userImgCont" style={userImg}></div> }   { UserData?.user?.id !== undefined ?<p className="nameL">{UserData?.user?.name}</p> : <p >Daxil ol</p> }</p></button>}
                  {!elanAddBtnMQ &&<button className="putAd" onClick={putAd}><span>+</span> Elan Yerləşdir</button> }
                </div>
            </navbar>
            {!searchMQ && <SearchBox settype={settype} setjobcategory={setjobcategory} setcity={setcity} type={type} jobcategory={jobcategory} city={city}/>}
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
              <Route path="/search">
                <SearchListing type={type} jobcategory={jobcategory} city={city}/>
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
              <Route  path={`/member-area/`}>
                { JSON.parse(localStorage.getItem('LoginUserData'))?.user?.id === undefined  ?  <Redirect to="/login"/>  :  <MemberArea loginId={UserData?.user?.user_type} UserData={UserData}/> }
              </Route>
              <Route path="/istifadeci-qeydiyyati">
                <UserRegistration/>
              </Route>
              <Route path="/sliderTest">
                <Slider/>
              </Route>
              <Route path="/">
                <HomePage hideVip={hideVip} UserData={UserData?.user} numberOfLatestAd={Ad[0]} numberOfMasters={Master[0]} numberOfCompanies={Company[0]}/>
              </Route>
            </Switch>
              
            <Footer/>
            </>

    )
}

export default Header
