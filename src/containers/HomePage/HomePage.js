import React from 'react'
import Ad from '../../components/Ad'
import Button from '../../components/Button'
import Footer from '../../components/Footer'
import SubBanner from '../../components/SubBanner'
import Header from '../../components/Header'
import SearchBox from '../../components/SearchBox'

import adImage from "../../assets/images/component/element/adImage.png"
import Ad2 from '../../components/Ad2'
import Ad3 from '../../components/Ad3'
import master from "../../assets/images/component/element/master.png"
import companyLogo from "../../assets/images/component/element/companyLogo.png"
import plumber from "../../assets/images/component/element/plumber.svg"
import electric from "../../assets/images/component/element/electric.svg"
import wallpaper from "../../assets/images/component/element/wallpaper.svg"
import windowDoor from "../../assets/images/component/element/windowDoor.svg"
import welder from "../../assets/images/component/element/welder.svg"
import plasterer from "../../assets/images/component/element/plasterer.svg"
import metlag from "../../assets/images/component/element/metlaq.svg"
import roof from "../../assets/images/component/element/roof.svg"
import stonemaster from "../../assets/images/component/element/stonemaster.svg"
import painter from "../../assets/images/component/element/painter.svg"
import floor from "../../assets/images/component/element/floor.svg"
import window from "../../assets/images/component/element/window.svg"
import carpenter from "../../assets/images/component/element/carpenter.svg"
import threeDots from "../../assets/images/component/element/threeDots.svg"
import arrDown from "../../assets/images/component/element/arrDown.svg"

import "../../assets/css/PagesCss/HomePage.css"
function HomePage() {
    const focusHandler = (number) => {
            document.getElementById("wD" + number).setAttribute("style" , "display:block")
            document.getElementById("aside").setAttribute("style" , "height:95vh")
            
    }
    const blurHandler = (number) => {
            document.getElementById("wD" + number).setAttribute("style" , "display:none")
            document.getElementById("aside").setAttribute("style" , "height:83vh")
    } 
    const clickHandler = () => {
    }
    return (
        <div className="homePage">
            


            <div className="mainBanner">Banner</div>
            
            
            
            <main className="main"> 
                <aside className="aside" id="aside">
                    {/* 1 */}
                    <button className="contForAside" onClick={() => clickHandler(1)} onFocus={() => focusHandler(1)}  onBlur={() => blurHandler(1)} >
                        <div className="workTypeCont">
                            <img src={plumber} alt="santexnik"/>
                            <p>Santexnik</p>
                            <button ><img  src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont" id="wD1" >
                            <p>Ustalar <span>({23})</span></p>
                            <p>Elanlar <span>({22})</span></p>
                            <p>Şirkətlər <span>({11})</span></p>
                        </div>
                    </button>
                    
                    {/* 2 */}
                    <button className="contForAside" onFocus={() => focusHandler(2)} onBlur={() => blurHandler(2)}>
                        <div className="workTypeCont">
                            <img src={electric} alt=""/>
                            <p>Elektirik</p>
                            <button ><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont" id="wD2" >
                            <p>Ustalar <span>({23})</span></p>
                            <p>Elanlar <span>({23})</span></p>
                            <p>Şirkətlər <span>({23})</span></p>
                        </div>
                    </button>

                    {/* 3 */}
                    <button className="contForAside"  onFocus={() => focusHandler(3)} onBlur={() => blurHandler(3)}>
                        <div className="workTypeCont">
                            <img src={wallpaper} alt=""/>
                            <p>Divar Kağızı</p>
                            <button><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont" id="wD3" >
                            <p>Ustalar <span>({23})</span></p>
                            <p>Elanlar <span>({23})</span></p>
                            <p>Şirkətlər <span>({23})</span></p>
                        </div>
                    </button>

                    {/* 4 */}
                    <button className="contForAside"  onFocus={() => focusHandler(4)} onBlur={() => blurHandler(4)}>
                        <div className="workTypeCont">
                            <img src={windowDoor} alt=""/>
                            <p>Qapı-Pəncərə</p>
                            <button><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont" id="wD4" >
                            <p>Ustalar <span>({23})</span></p>
                            <p>Elanlar <span>({23})</span></p>
                            <p>Şirkətlər <span>({23})</span></p>
                        </div>
                    </button>

                    {/* 5 */}
                    <button className="contForAside"  onFocus={() => focusHandler(5)} onBlur={() => blurHandler(5)}>
                        <div className="workTypeCont">
                            <img src={welder} alt=""/>
                            <p>Qaynaqçı</p>
                            <button><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont" id="wD5" >
                            <p>Ustalar <span>({23})</span></p>
                            <p>Elanlar <span>({23})</span></p>
                            <p>Şirkətlər <span>({23})</span></p>
                        </div>
                    </button>

                    {/* 6 */}
                    <button className="contForAside"  onFocus={() => focusHandler(6)} onBlur={() => blurHandler(6)}>
                        <div className="workTypeCont">
                            <img src={plasterer} alt=""/>
                            <p>Suvaqçı</p>
                            <button><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont" id="wD6" >
                            <p>Ustalar <span>({23})</span></p>
                            <p>Elanlar <span>({23})</span></p>
                            <p>Şirkətlər <span>({23})</span></p>
                        </div>
                    </button>

                    {/* 7 */}
                    <button className="contForAside"  onFocus={() => focusHandler(7)} onBlur={() => blurHandler(7)}>
                        <div className="workTypeCont">
                            <img src={metlag} alt=""/>
                            <p>Metlaq</p>
                            <button><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont" id="wD7" >
                            <p>Ustalar <span>({23})</span></p>
                            <p>Elanlar <span>({23})</span></p>
                            <p>Şirkətlər <span>({23})</span></p>
                        </div>
                    </button>

                    {/* 8 */}
                    <button className="contForAside"  onFocus={() => focusHandler(8)} onBlur={() => blurHandler(8)}>
                        <div className="workTypeCont">
                            <img src={roof} alt=""/>
                            <p>Dam Örtüyü</p>
                            <button><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont" id="wD8" >
                            <p>Ustalar <span>({23})</span></p>
                            <p>Elanlar <span>({23})</span></p>
                            <p>Şirkətlər <span>({23})</span></p>
                        </div>
                    </button>

                    {/* 9 */}
                    <button className="contForAside"  onFocus={() => focusHandler(9)} onBlur={() => blurHandler(9)}>
                        <div className="workTypeCont">
                            <img src={stonemaster} alt=""/>
                            <p>Bənna</p>
                            <button><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont" id="wD9" >
                            <p>Ustalar <span>({23})</span></p>
                            <p>Elanlar <span>({23})</span></p>
                            <p>Şirkətlər <span>({23})</span></p>
                        </div>
                    </button>

                    {/* 10 */}
                    <button className="contForAside"  onFocus={() => focusHandler(10)} onBlur={() => blurHandler(10)}>
                        <div className="workTypeCont">
                            <img src={painter} alt=""/>
                            <p>Malyar</p>
                            <button><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont" id="wD10" >
                            <p>Ustalar <span>({23})</span></p>
                            <p>Elanlar <span>({23})</span></p>
                            <p>Şirkətlər <span>({23})</span></p>
                        </div>
                    </button>

                    {/* 11 */}
                    <button className="contForAside"  onFocus={() => focusHandler(11)} onBlur={() => blurHandler(11)}>
                        <div className="workTypeCont">
                            <img src={floor} alt=""/>
                            <p>Döşəmə</p>
                            <button><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont" id="wD11" >
                            <p>Ustalar <span>({23})</span></p>
                            <p>Elanlar <span>({23})</span></p>
                            <p>Şirkətlər <span>({23})</span></p>
                        </div>
                    </button>

                    {/* 12 */}
                    <button className="contForAside"  onFocus={() => focusHandler(12)} onBlur={() => blurHandler(12)}>
                        <div className="workTypeCont">
                            <img src={window} alt=""/>
                            <p>Şüşə-Güzgü</p>
                            <button><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont" id="wD12" >
                            <p>Ustalar <span>({23})</span></p>
                            <p>Elanlar <span>({23})</span></p>
                            <p>Şirkətlər <span>({23})</span></p>
                        </div>
                    </button>

                    {/* 13 */}
                    <button className="contForAside" onFocus={() => focusHandler(13)} onBlur={() => blurHandler(13)}>
                        <div className="workTypeCont">
                            <img src={carpenter} alt=""/>
                            <p>Dülgər</p>
                            <button ><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont" id="wD13" >
                            <p>Ustalar <span>({23})</span></p>
                            <p>Elanlar <span>({23})</span></p>
                            <p>Şirkətlər <span>({23})</span></p>
                        </div>
                    </button>

                    {/* 14 */}
                    <button className="contForAside"  onFocus={() => focusHandler(14)}  onBlur={() => blurHandler(14)}>
                        <div className="workTypeCont">
                            <button><img src={threeDots} alt=""/></button>
                            <p className="differP">Digər</p>
                        </div>
                        <div className="workDescCont " id="wD14" >
                            <p>Ustalar <span>({23})</span></p>
                            <p>Elanlar <span>({23})</span></p>
                            <p>Şirkətlər <span>({23})</span></p>
                        </div>
                    </button>
                </aside>



                {/* All Grids  All Grids  All Grids  All Grids  All Grids  All Grids  All Grids */}
                    <div className="allAdsContainer">


                        <div className="typeAddContainer"> 
                            <p className="title">Son Elanlar</p>
                            <div className="line1"></div>
                            <div className="adsContainer">
                                
                                <Ad name={"Görüləcək İşin Adı"} costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="1258" image={adImage}/>  
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>  
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>  
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>  
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/> 
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>  
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>  
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>  
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>  
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>  
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>  
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>  
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>  
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>  
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>   
                            </div>    
                            <Button name="Bütün elanlara bax"/>
                        </div>
                    

                        <SubBanner marginTop="60px" marginBottom="78px"/>



                        <div className="typeAddContainer"> 
                            <p className="title">Ustalar</p>
                            <div className="line2"></div>
                            <div className="adsContainer">
                                <Ad2 name="Şahin Zeynallı" job="malyar" address="Bakı ş, Yasamal ray" image={master} numberStar={1}/>
                                <Ad2 name="Şahin Zeynallı" job="malyar" address="Bakı ş, Yasamal ray" image={master} numberStar={2}/>
                                <Ad2 name="Şahin Zeynallı" job="malyar" address="Bakı ş, Yasamal ray" image={master} numberStar={3}/>
                                <Ad2 name="Şahin Zeynallı" job="malyar" address="Bakı ş, Yasamal ray" image={master} numberStar={4}/>
                                <Ad2 name="Şahin Zeynallı" job="malyar" address="Bakı ş, Yasamal ray" image={master} numberStar={5}/>
                                <Ad2 name="Şahin Zeynallı" job="malyar" address="Bakı ş, Yasamal ray" image={master} numberStar={0.5}/>
                                <Ad2 name="Şahin Zeynallı" job="malyar" address="Bakı ş, Yasamal ray" image={master} numberStar={1.5}/>
                                <Ad2 name="Şahin Zeynallı" job="malyar" address="Bakı ş, Yasamal ray" image={master} numberStar={2.5}/>
                                <Ad2 name="Şahin Zeynallı" job="malyar" address="Bakı ş, Yasamal ray" image={master} numberStar={3.5}/>
                                <Ad2 name="Şahin Zeynallı" job="malyar" address="Bakı ş, Yasamal ray" image={master} numberStar={4.5}/>
                                <Ad2 name="Şahin Zeynallı" job="malyar" address="Bakı ş, Yasamal ray" image={master} numberStar={5}/>
                                <Ad2 name="Şahin Zeynallı" job="malyar" address="Bakı ş, Yasamal ray" image={master} numberStar={1}/>
                                <Ad2 name="Şahin Zeynallı" job="malyar" address="Bakı ş, Yasamal ray" image={master} numberStar={2}/>
                                <Ad2 name="Şahin Zeynallı" job="malyar" address="Bakı ş, Yasamal ray" image={master} numberStar={3}/>
                                <Ad2 name="Şahin Zeynallı" job="malyar" address="Bakı ş, Yasamal ray" image={master} numberStar={4}/>
                            </div>  
                            <Button name="Bütün ustalara bax" color="linear-gradient(90deg, #F37B29 0%, #F97922 100%)"/>
                        </div>

                
                        <SubBanner marginTop="60px" marginBottom="78px"/>

                
                        <div className="typeAddContainer"> 
                            <p className="title">Şirkətlər</p>
                            <div className="line3"></div>
                            <div className="adsContainer">
                                <Ad3 numberStar={4} image={companyLogo} name={"Şirkət Adı"} location={"Bakı şəhəri "} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,"}/>
                                <Ad3 numberStar={3} image={companyLogo} name={"Şirkət Adı"} location={"Bakı şəhəri "} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,"}/>
                                <Ad3 numberStar={3.5} image={companyLogo} name={"Şirkət Adı"} location={"Bakı şəhəri "} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,"}/>
                                <Ad3 numberStar={2.5} image={companyLogo} name={"Şirkət Adı"} location={"Bakı şəhəri "} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,"}/>
                                

                            </div>     
                            <Button name="Bütün şirkətlərə bax"/>
                        </div>


                        <SubBanner marginTop="60px" marginBottom="78px"/>


                        <div className="typeAddContainer"> 
                            <p className="title">Santexnika elanları</p>
                            <div className="line4"></div>
                            <div className="adsContainer">
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>  
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>    
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>   
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>   
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>   
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>   
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>   
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>   
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>   
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>   
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>   
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>   
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>   
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>   
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>   
                            </div>      
                            <Button name="Bütün elanlara bax"/>
                        </div>


                        <SubBanner marginTop="60px" marginBottom="78px"/>


                        <div className="typeAddContainer"> 
                            <p className="title">Elektrik elanları</p>
                            <div className="line5"></div>
                            <div className="adsContainer">
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>  
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>    
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>   
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>   
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>   
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>   
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>   
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>   
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>   
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>   
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>   
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>   
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>   
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/>   
                                <Ad name="Görüləcək İşin Adı" costumer="Sifarişçi: Orxan Zeynallı" address="Bakı ş., Yasamal ray" date="13.03.2020" view="58" image={adImage}/> 
                            </div>  
                            <Button name="Bütün elanlara bax" color="linear-gradient(90deg, #F37B29 0%, #F97922 100%)"/>
                        </div>
                    </div> 
                {/* All Grids  All Grids  All Grids  All Grids  All Grids  All Grids  All Grids */}

            </main>

            <Footer/>
        </div>
    )
}

export default HomePage
