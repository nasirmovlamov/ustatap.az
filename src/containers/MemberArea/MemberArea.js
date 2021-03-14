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
function MemberArea(props) {

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
    
    for (let index = 0; index < 8; index++) {
        document?.querySelector(`.btn${index}`)?.setAttribute("style" , "background-color:white;color:rgba(0, 0, 0, 0.5);border-radius:10px;")
    }
    
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
        else if (url === "add-elan")
        {
            document?.getElementById("addelan")?.setAttribute("style" , "background-color:#58bc40;color:white;border-radius:10px;")
        }
        else if (url === "selected-masters")
        {
            document?.getElementById("selectedMasters")?.setAttribute("style" , "background-color:#58bc40;color:white;border-radius:10px;")
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

    return (
        <div className="memberArea">
            n
            <div className="memberAreaCont">
                <div className="topSide"><img src={logo} alt="" width="92" height="auto" /> <div className="cabinetTop" style={imgHandler}>Şəxsi kabinet <div  className="nameDiv"> <p> {props.UserData.user.name}  </p></div>  </div> </div>
                <div className="generalPart">
                        <div className="memberCont">
                            {  props.loginId === 'user'        &&     <UserMemberArea UserData={props.UserData}/>       }
                            {  props.loginId === 'handyman'    &&     <MasterMemberArea UserData={props.UserData}/>     }
                            {  props.loginId === 'company'     &&     <CompanyMemberArea UserData={props.UserData}/>    }
                        </div>
                        <aside className="asideCateg">
                            {
                                props.loginId === 'user' &&
                                <div className="outlineAside" id="outlineAside">  
                                    <Link to={`${match.path}`} className="categoryLink" ><button className="category btn1" id="categoryName" >{props.UserData.user.name.toUpperCase()}</button></Link>
                                    <Link to={`${match.path}profile`} className="categoryLink" ><button className="category btn2 "  id="categoryProfile">ŞƏXSİ MƏLUMATLAR</button></Link>
                                    <Link to={`${match.path}add-elan`} className="categoryLink" ><button className="category btn3"  id="addelan">ELAN ƏLAVƏ ET</button></Link>
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
                        </aside>        
                </div>
            </div>
        </div>

    )
}

export default MemberArea
