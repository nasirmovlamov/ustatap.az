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
function MemberArea(props) {
    const imgHandler =  {
        backgroundImage: `url(${cabinetTop})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top'
    }
    let match = useRouteMatch();
    return (
        <div className="memberArea">
            <div className="memberAreaCont">
                <div className="topSide"><img src={logo} alt="" width="92" height="auto" /> <div className="cabinetTop" style={imgHandler}>Şəxsi kabinet <div  className="nameDiv"> <p> Nasir Movlamov  </p></div>  </div> </div>
                <div className="generalPart">
                        <div className="memberCont">

                            { props.loginId === 1 && <UserMemberArea/>}
                            { props.loginId === 2 && <MasterMemberArea/>}
                            { props.loginId === 3 && <CompanyMemberArea/>}
                        </div>
                        <aside className="asideCateg">
                            {
                                props.loginId === 1 &&
                                <div className="outlineAside">  
                                    <Link to={`${match.path}`} className="categoryLink"><button className="category">NASİR  MOVLAMOV</button></Link>
                                    <Link to={`${match.path}profile`} className="categoryLink"><button className="category">ŞƏXSİ MƏLUMATLAR</button></Link>
                                    <Link to={`${match.path}my-ads`} className="categoryLink"><button className="category">ELANLARIM</button></Link>
                                    <Link to={`${match.path}requests`} className="categoryLink"><button className="category">GƏLƏN TƏKLİFLƏR</button></Link>
                                    <Link to={`${match.path}selected-masters`} className="categoryLink"><button className="category">SEÇİLMİŞ USTALAR</button></Link>
                                    <Link to={`${match.path}selected-companies`} className="categoryLink"><button className="category">SEÇİLMİŞ ŞİRKƏTLƏR</button></Link>
                                    <Link to={`${match.path}security`} className="categoryLink"><button className="category">TƏHLÜKƏSİZLİK</button></Link>
                                    <Link to={`/`} className="categoryLink"><button className="category">ƏSAS SƏHİFƏYƏ KEÇ</button></Link>
                                    <Link to={`/`} className="categoryLink"><button className="category">HESABDAN ÇIX</button></Link>
                                </div>
                            }
                            {
                                props.loginId === 2 &&
                                <div className="outlineAside">  
                                    <Link to={`${match.path}`} className="categoryLink"><button className="category">NASİR  MOVLAMOV</button></Link>
                                    <Link to={`${match.path}profile`} className="categoryLink"><button className="category">ŞƏXSİ MƏLUMATLAR</button></Link>
                                    <Link to={`${match.path}sended-requests`} className="categoryLink"><button className="category">GƏLƏN TƏKLİFLƏR</button></Link>
                                    <Link to={`${match.path}selected-ads`} className="categoryLink"><button className="category">SEÇİLMİŞ ELANLAR</button></Link>

                                    <Link to={`${match.path}selected-companies`} className="categoryLink"><button className="category">SEÇİLMİŞ ŞİRKƏTLƏR</button></Link>
                                    <Link to={`${match.path}security`} className="categoryLink"><button className="category">TƏHLÜKƏSİZLİK</button></Link>
                                    <Link to={`/`} className="categoryLink"><button className="category">ƏSAS SƏHİFƏYƏ KEÇ</button></Link>
                                    <Link to={`/`} className="categoryLink"><button className="category">HESABDAN ÇIX</button></Link>
                                </div>
                            }
                            {
                                props.loginId === 3 &&
                                <div className="outlineAside">  
                                    <Link to={`${match.path}`} className="categoryLink"><button className="category">JEDAI</button></Link>
                                    <Link to={`${match.path}profile`} className="categoryLink"><button className="category">ŞƏXSİ MƏLUMATLAR</button></Link>
                                    <Link to={`${match.path}sended-requests`} className="categoryLink"><button className="category">GÖNDƏRİLƏN TƏKLİFLƏR</button></Link>
                                    <Link to={`${match.path}selected-ads`} className="categoryLink"><button className="category">SEÇİLMİŞ ELANLAR</button></Link>
                                    <Link to={`${match.path}selected-masters`} className="categoryLink"><button className="category">SEÇİLMİŞ USTALAR</button></Link>
                                    <Link to={`${match.path}security`} className="categoryLink"><button className="category">TƏHLÜKƏSİZLİK</button></Link>
                                    <Link to={`${match.path}ad-website`} className="categoryLink"><button className="category">REKLAM YERLƏŞDİR</button></Link>
                                    <Link to={`/`} className="categoryLink"><button className="category">ƏSAS SƏHİFƏYƏ KEÇ</button></Link>
                                    <Link to={`/`} className="categoryLink"><button className="category">HESABDAN ÇIX</button></Link>
                                </div>
                            }
                        </aside>        
                </div>
            </div>
            <Footer/>
        </div>

    )
}

export default MemberArea
