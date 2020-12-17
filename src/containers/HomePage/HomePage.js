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
        
    }
    return (
        <div className="homePage">
            <div className="topContainer">
                <Header/>
                <SearchBox/>
            </div>


            <div className="mainBanner">Banner</div>
            
            
            
            <main className="main"> 
                <aside className="aside">
                    {/* 1 */}
                    <div className="contForAside">
                        <div className="workTypeCont">
                            <img src={plumber} alt="santexnik"/>
                            <p>Santexnik</p>
                            <button onFocus={() => focusHandler(1)}><img  src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont" >
                            <p>Ustalar ()</p>
                            <p>Elanlar ()</p>
                            <p>Şirkətlər ()</p>
                        </div>
                    </div>
                    
                    {/* 2 */}
                    <div className="contForAside">
                        <div className="workTypeCont">
                            <img src={electric} alt=""/>
                            <p>Elektirik</p>
                            <button onFocus={() => focusHandler(2)}><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont">
                            <p>Ustalar ()</p>
                            <p>Elanlar ()</p>
                            <p>Şirkətlər ()</p>
                        </div>
                    </div>

                    {/* 3 */}
                    <div className="contForAside">
                        <div className="workTypeCont">
                            <img src={wallpaper} alt=""/>
                            <p>Divar Kağızı</p>
                            <button onFocus={() => focusHandler(3)}><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont">
                            <p>Ustalar ()</p>
                            <p>Elanlar ()</p>
                            <p>Şirkətlər ()</p>
                        </div>
                    </div>

                    {/* 4 */}
                    <div className="contForAside">
                        <div className="workTypeCont">
                            <img src={windowDoor} alt=""/>
                            <p>Qapı-Pəncərə</p>
                            <button onFocus={() => focusHandler(4)}><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont">
                            <p>Ustalar ()</p>
                            <p>Elanlar ()</p>
                            <p>Şirkətlər ()</p>
                        </div>
                    </div>

                    {/* 5 */}
                    <div className="contForAside">
                        <div className="workTypeCont">
                            <img src={welder} alt=""/>
                            <p>Qaynaqçı</p>
                            <button onFocus={() => focusHandler(5)}><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont">
                            <p>Ustalar ()</p>
                            <p>Elanlar ()</p>
                            <p>Şirkətlər ()</p>
                        </div>
                    </div>

                    {/* 6 */}
                    <div className="contForAside">
                        <div className="workTypeCont">
                            <img src={plasterer} alt=""/>
                            <p>Suvaqçı</p>
                            <button onFocus={() => focusHandler(6)}><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont">
                            <p>Ustalar ()</p>
                            <p>Elanlar ()</p>
                            <p>Şirkətlər ()</p>
                        </div>
                    </div>

                    {/* 7 */}
                    <div className="contForAside">
                        <div className="workTypeCont">
                            <img src={metlag} alt=""/>
                            <p>Metlaq</p>
                            <button onFocus={() => focusHandler(7)}><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont">
                            <p>Ustalar ()</p>
                            <p>Elanlar ()</p>
                            <p>Şirkətlər ()</p>
                        </div>
                    </div>

                    {/* 8 */}
                    <div className="contForAside">
                        <div className="workTypeCont">
                            <img src={roof} alt=""/>
                            <p>Dam Örtüyü</p>
                            <button onFocus={() => focusHandler(8)}><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont">
                            <p>Ustalar ()</p>
                            <p>Elanlar ()</p>
                            <p>Şirkətlər ()</p>
                        </div>
                    </div>

                    {/* 9 */}
                    <div className="contForAside">
                        <div className="workTypeCont">
                            <img src={stonemaster} alt=""/>
                            <p>Bənna</p>
                            <button onFocus={() => focusHandler(9)}><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont">
                            <p>Ustalar ()</p>
                            <p>Elanlar ()</p>
                            <p>Şirkətlər ()</p>
                        </div>
                    </div>

                    {/* 10 */}
                    <div className="contForAside">
                        <div className="workTypeCont">
                            <img src={painter} alt=""/>
                            <p>Malyar</p>
                            <button onFocus={() => focusHandler(10)}><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont">
                            <p>Ustalar ()</p>
                            <p>Elanlar ()</p>
                            <p>Şirkətlər ()</p>
                        </div>
                    </div>

                    {/* 11 */}
                    <div className="contForAside">
                        <div className="workTypeCont">
                            <img src={floor} alt=""/>
                            <p>Döşəmə</p>
                            <button onFocus={() => focusHandler(11)}><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont">
                            <p>Ustalar ()</p>
                            <p>Elanlar ()</p>
                            <p>Şirkətlər ()</p>
                        </div>
                    </div>

                    {/* 12 */}
                    <div className="contForAside">
                        <div className="workTypeCont">
                            <img src={window} alt=""/>
                            <p>Şüşə-Güzgü</p>
                            <button onFocus={() => focusHandler(12)}><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont">
                            <p>Ustalar ()</p>
                            <p>Elanlar ()</p>
                            <p>Şirkətlər ()</p>
                        </div>
                    </div>

                    {/* 13 */}
                    <div className="contForAside">
                        <div className="workTypeCont">
                            <img src={carpenter} alt=""/>
                            <p>Dülgər</p>
                            <button onFocus={() => focusHandler(13)}><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont">
                            <p>Ustalar ()</p>
                            <p>Elanlar ()</p>
                            <p>Şirkətlər ()</p>
                        </div>
                    </div>

                    {/* 14 */}
                    <div className="contForAside">
                        <div className="workTypeCont">
                            <button onFocus={() => focusHandler(14)} className="threeDots"><img src={threeDots} alt=""/></button>
                            <p className="differP">Digər</p>
                        </div>
                        <div className="workDescCont ">
                            <p>Ustalar ()</p>
                            <p>Elanlar ()</p>
                            <p>Şirkətlər ()</p>
                        </div>
                    </div>
                </aside>



                {/* All Grids  All Grids  All Grids  All Grids  All Grids  All Grids  All Grids */}
                    <div className="allAdsContainer">


                        <div className="typeAddContainer"> 
                            <p className="title">Son Elanlar</p>
                            <div className="line1"></div>
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
                                <Ad3 numberStar={4} image={companyLogo} name={"Şirkət Adı"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,"}/>
                                <Ad3 numberStar={3} image={companyLogo} name={"Şirkət Adı"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,"}/>
                                <Ad3 numberStar={3.5} image={companyLogo} name={"Şirkət Adı"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,"}/>
                                <Ad3 numberStar={2.5} image={companyLogo} name={"Şirkət Adı"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,"}/>
                                

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
