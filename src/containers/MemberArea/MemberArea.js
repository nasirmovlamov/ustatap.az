import React from 'react'
import '../../assets/css/PagesCss/memberArea.css'
import UserMemberArea from './UserMemberArea'
import CompanyMemberArea from './CompanyMemberArea'
import MasterMemberArea from './MasterMemberArea'
import logo from "../../assets/images/component/element/ustatapLogo.png"
import cabinetTop from "../../assets/images/component/element/cabinetTop.png"
import Footer from '../../components/Footer'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import { useEffect } from 'react'
import { useMediaQuery } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';  
import Hamburger from 'hamburger-react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Alert from '@material-ui/lab/Alert';
import { useState } from 'react'
import axios from 'axios'
const alertStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
const stylesForSwiper = makeStyles({
    list: {
      width: "auto",
    },
    fullList: {
      width: "auto",
    },
  }); 



function MemberArea(props) {
    const asideMQ = useMediaQuery('(max-width:1170px)');
    const cabinetLogoMQ = useMediaQuery('(max-width:852px)');
    const [UserData, setUserData] = useState(0)
    useEffect(() => {
        if (UserData?.user?.id === undefined) 
        {
            setUserData(JSON.parse(localStorage.getItem('LoginUserData')))
        }
    })
    var [status, setstatus] = useState(null)
    
    useEffect(() => {
        if ( props.UserData !== undefined ) {
            axios.get(`http://ustatap.testjed.me/public/api/checkstatus/${props.userId}`) 
                .then( (res) =>  setstatus(res.data)  )
            localStorage.setItem("LoginUserData" , JSON.stringify(props.UserData))
        }
    }, [])

    const imgHandler =  {
        backgroundImage: `url(${cabinetTop})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top'
    }
    let match = useRouteMatch();
    const logOut = () => {
        localStorage.clear()
    }
    var url = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
    
    for (let index = 0; index < 9; index++) {
        document?.querySelector(`.btn${index}`)?.setAttribute("style" , "background-color:white;color:rgba(0, 0, 0, 0.5);border-radius:10px;")
    }
    const notify = (rate) => toast.success(`${rate === null ? 5 : rate}   Ulduz göndərildi` , {draggable: true,});
    
    useEffect(() => {
        if (url === "member-area" || url === "") {
            document?.getElementById("categoryName")?.setAttribute("style" , "background-color:#58bc40;color:white;border-radius:10px;")
            console.log(url)
        }
        else if (url === "profile")
        {
            document?.getElementById("categoryProfile")?.setAttribute("style" , "background-color:#58bc40;color:white;border-radius:10px;")
        }
        else if (url === "my-ads")
        {
            document?.getElementById("myads")?.setAttribute("style" , "background-color:#58bc40;color:white;border-radius:10px;")
        }
        else if (url === "elan-add")
        {
            document?.getElementById("addelan")?.setAttribute("style" , "background-color:#58bc40;color:white;border-radius:10px;")
        }
        else if (url === "selected-masters")
        {
            document?.getElementById("selectedMasters")?.setAttribute("style" , "background-color:#58bc40;color:white;border-radius:10px;")
        }
        else if (url === "requests-ad")
        {
            document?.getElementById("requestToElan")?.setAttribute("style" , "background-color:#58bc40;color:white;border-radius:10px;")
        }
        else if (url === "selected-companies")
        {
            document?.getElementById("selectedCompanies")?.setAttribute("style" , "background-color:#58bc40;color:white;border-radius:10px;")
        }
        else if (url === "security")
        {
            document?.getElementById("security")?.setAttribute("style" , "background-color:#58bc40;color:white;border-radius:10px;")
        }
    })



     
    const searchDrawer = stylesForSwiper();
    const [stateFiltr, setStateFiltr] = React.useState({
      top: false,
    });

    const toggleDrawer3 = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }

      setStateFiltr({ ...stateFiltr, [anchor]: open });
    };
    const listSearch = (anchor) => (
      <div
      className={clsx(searchDrawer.list, {
        [searchDrawer.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer3(anchor, false)}
      onKeyDown={toggleDrawer3(anchor, false)}
      >
         <div className="swiperTitle"> <p>Filtirlə</p> <button className="btnMenu" onClick={toggleDrawer3(anchor, false)} onKeyDown={toggleDrawer3(anchor, false)}>X</button></div>
        <Divider />
        <div className="asideSW">
            {
                props.loginId === 'user' &&
                <div className="outlineAside" id="outlineAside">  
                    <Link to={`${match.path}`} className="categoryLink" ><button className="category btn1" id="categoryName" >{props.UserData.user.name.toUpperCase()}</button></Link>
                    <Link to={`${match.path}profile`} className="categoryLink" ><button className="category btn2 "  id="categoryProfile">ŞƏXSİ MƏLUMATLAR</button></Link>
                    <Link to={`${match.path}elan-add`} className="categoryLink" ><button className="category btn3"  id="addelan">ELAN ƏLAVƏ ET</button></Link>
                    <Link to={`${match.path}my-ads`} className="categoryLink" ><button className="category btn4"  id="myads">ELANLARIM</button></Link>
                    <Link to={`${match.path}selected-masters`} className="categoryLink"><button className="category btn5" id="selectedMasters">SEÇİLMİŞ USTALAR</button></Link>
                    <Link to={`${match.path}selected-companies`} className="categoryLink"><button className="category btn6" id="selectedCompanies">SEÇİLMİŞ ŞİRKƏTLƏR</button></Link>
                    <Link to={`${match.path}security`} className="categoryLink"><button className="category btn7" id="security">TƏHLÜKƏSİZLİK</button></Link>
                    <Link to={`/`} className="categoryLink"><button className="category btn7">ƏSAS SƏHİFƏYƏ KEÇ</button></Link>
                    <a href='/' className="categoryLink"><button onClick={logOut} className="category btn8">HESABDAN ÇIX</button></a>
                </div>
            }
            {
                props.loginId === 'handyman' &&
                <div className="outlineAside">  
                    <Link to={`${match.path}`} className="categoryLink"><button className="category">NASİR  MOVLAMOV</button></Link>
                    <Link to={`${match.path}profile`} className="categoryLink"><button className="category">ŞƏXSİ MƏLUMATLAR</button></Link>
                    <Link to={`${match.path}sended-requests`} className="categoryLink"><button className="category">GƏLƏN TƏKLİFLƏR</button></Link>
                    <Link to={`${match.path}selected-ads`} className="categoryLink"><button className="category">SEÇİLMİŞ ELANLAR</button></Link>
                    <Link to={`${match.path}selected-companies`} className="categoryLink"><button className="category">SEÇİLMİŞ ŞİRKƏTLƏR</button></Link>
                    <Link to={`${match.path}security`} className="categoryLink"><button className="category">TƏHLÜKƏSİZLİK</button></Link>
                    <Link to={`/`} className="categoryLink"><button className="category">ƏSAS SƏHİFƏYƏ KEÇ</button></Link>
                    <a href={`/`} className="categoryLink"><button onClick={logOut}  className="category">HESABDAN ÇIX</button></a>
                </div>
            }
            {
                props.loginId === 'company' &&
                <div className="outlineAside">  
                    <Link to={`${match.path}`} className="categoryLink"><button className="category">JEDAI</button></Link>
                    <Link to={`${match.path}profile`} className="categoryLink"><button className="category">ŞƏXSİ MƏLUMATLAR</button></Link>
                    <Link to={`${match.path}sended-requests`} className="categoryLink"><button className="category">GÖNDƏRİLƏN TƏKLİFLƏR</button></Link>
                    <Link to={`${match.path}selected-ads`} className="categoryLink"><button className="category">SEÇİLMİŞ ELANLAR</button></Link>
                    <Link to={`${match.path}selected-masters`} className="categoryLink"><button className="category">SEÇİLMİŞ USTALAR</button></Link>
                    <Link to={`${match.path}security`} className="categoryLink"><button className="category">TƏHLÜKƏSİZLİK</button></Link>
                    <Link to={`${match.path}ad-website`} className="categoryLink"><button className="category">REKLAM YERLƏŞDİR</button></Link>
                    <Link to={`/`} className="categoryLink"><button className="category">ƏSAS SƏHİFƏYƏ KEÇ</button></Link>
                    <a href={`/`} className="categoryLink"><button onClick={logOut}  className="category">HESABDAN ÇIX</button></a>
                </div>
            }
        </div>
        
      </div>
    );
    








    return (
        <div className="memberArea">
            <div className="memberAreaCont">
            { parseInt(status) === 0 ? <Alert className="alertVerify"  severity="error">Hesabınızı elektron poçtunuza daxil olaraq aktiv edin</Alert> : ""}
                <div className="topSide">
                   {!cabinetLogoMQ && <img src={logo} alt="" width="92" height="auto" /> }
                    <div className="cabinetTop" style={imgHandler}>Şəxsi kabinet <div  className="nameDiv"> <p> {props.UserData?.user?.name}  </p></div>  </div> 
                    {
                            <React.Fragment key={'top'}>
                            <Hamburger color="#58bc41" toggled={stateFiltr['left']} toggle={toggleDrawer3('top', true)} />
                            <Drawer anchor={'top'} open={stateFiltr['top']} onClose={toggleDrawer3('top', false)}>
                                {listSearch('top')}
                            </Drawer>
                            </React.Fragment>
                    }    
                </div>
                <div className="generalPart">
                        <div className="memberCont">
                            {  props.loginId === 'user'        &&     <UserMemberArea  status={status} UserData={props.UserData}/>       }
                            {  props.loginId === 'handyman'    &&     <MasterMemberArea status={status} UserData={props.UserData}/>     }
                            {  props.loginId === 'company'     &&     <CompanyMemberArea status={status} UserData={props.UserData}/>    }
                        </div>
                        
                        {
                            !asideMQ &&
                                <aside className="asideCateg">
                                    {
                                        props.loginId === 'user' &&
                                        <div className="outlineAside" id="outlineAside">  
                                            <Link to={`${match.path}`} className="categoryLink" ><button className="category btn1" id="categoryName" >{props.UserData.user.name.toUpperCase()}</button></Link>
                                            <Link to={`${match.path}profile`} className="categoryLink" ><button className="category btn2 "  id="categoryProfile">ŞƏXSİ MƏLUMATLAR</button></Link>
                                            <Link to={`${match.path}elan-add`} className="categoryLink" ><button className="category btn3"  id="addelan">ELAN ƏLAVƏ ET</button></Link>
                                            <Link to={`${match.path}requests-ad`} className="categoryLink" ><button className="category btn4"  id="requestToElan">GƏLƏN SORĞULAR</button></Link>
                                            <Link to={`${match.path}my-ads`} className="categoryLink" ><button className="category btn5"  id="myads">ELANLARIM</button></Link>
                                            <Link to={`${match.path}selected-masters`} className="categoryLink"><button className="category btn6" id="selectedMasters">SEÇİLMİŞ USTALAR</button></Link>
                                            <Link to={`${match.path}selected-companies`} className="categoryLink"><button className="category btn7" id="selectedCompanies">SEÇİLMİŞ ŞİRKƏTLƏR</button></Link>
                                            <Link to={`${match.path}security`} className="categoryLink"><button className="category btn8" id="security">TƏHLÜKƏSİZLİK</button></Link>
                                            <Link to={`/`} className="categoryLink"><button className="category btn9">ƏSAS SƏHİFƏYƏ KEÇ</button></Link>
                                            <a href='/' className="categoryLink"><button onClick={logOut} className="category btn10">HESABDAN ÇIX</button></a>
                                        </div>
                                    }
                                    {
                                        props.loginId === 'handyman' &&
                                        <div className="outlineAside">  
                                            <Link to={`${match.path}`} className="categoryLink"><button className="category">NASİR  MOVLAMOV</button></Link>
                                            <Link to={`${match.path}profile`} className="categoryLink"><button className="category">ŞƏXSİ MƏLUMATLAR</button></Link>
                                            <Link to={`${match.path}sended-requests`} className="categoryLink"><button className="category">GÖNDƏRİLƏN SORĞULAR</button></Link>
                                            <Link to={`${match.path}selected-ads`} className="categoryLink"><button className="category">SEÇİLMİŞ ELANLAR</button></Link>
                                            <Link to={`${match.path}selected-companies`} className="categoryLink"><button className="category">SEÇİLMİŞ ŞİRKƏTLƏR</button></Link>
                                            <Link to={`${match.path}security`} className="categoryLink"><button className="category">TƏHLÜKƏSİZLİK</button></Link>
                                            <Link to={`/`} className="categoryLink"><button className="category">ƏSAS SƏHİFƏYƏ KEÇ</button></Link>
                                            <a href={`/`} className="categoryLink"><button onClick={logOut}  className="category">HESABDAN ÇIX</button></a>
                                        </div>
                                    }
                                    {
                                        props.loginId === 'company' &&
                                        <div className="outlineAside">  
                                            <Link to={`${match.path}`} className="categoryLink"><button className="category">JEDAI</button></Link>
                                            <Link to={`${match.path}profile`} className="categoryLink"><button className="category">ŞƏXSİ MƏLUMATLAR</button></Link>
                                            <Link to={`${match.path}sended-requests`} className="categoryLink"><button className="category">GÖNDƏRİLƏN SORĞULAR</button></Link>
                                            <Link to={`${match.path}selected-ads`} className="categoryLink"><button className="category">SEÇİLMİŞ ELANLAR</button></Link>
                                            <Link to={`${match.path}selected-masters`} className="categoryLink"><button className="category">SEÇİLMİŞ USTALAR</button></Link>
                                            <Link to={`${match.path}security`} className="categoryLink"><button className="category">TƏHLÜKƏSİZLİK</button></Link>
                                            <Link to={`${match.path}ad-website`} className="categoryLink"><button className="category">REKLAM YERLƏŞDİR</button></Link>
                                            <Link to={`/`} className="categoryLink"><button className="category">ƏSAS SƏHİFƏYƏ KEÇ</button></Link>
                                            <a href={`/`} className="categoryLink"><button onClick={logOut}  className="category">HESABDAN ÇIX</button></a>
                                        </div>
                                    }
                                </aside>       
                        } 
                </div>
            </div>
        </div>

    )
}

export default MemberArea
