import React from 'react'
import Ad from '../../components/Ad'
import Button from '../../components/Button'
import Footer from '../../components/Footer'
import SubBanner from '../../components/SubBanner'
import Header from '../../components/Header'

import adImage from "../../assets/images/component/element/adImage.png"
import Ad2 from '../../components/Ad2'
import Ad3 from '../../components/Ad3'
import master from "../../assets/images/component/element/master.png"
import companyLogo from "../../assets/images/component/element/companyLogo.png"
import SearchBox from '../../components/SearchBox'
import "../../assets/css/PagesCss/HomePage.css"

function HomePage() {
    return (
        <div className="homePage">
            <div className="topContainer">
                <Header/>
                <SearchBox/>
            </div>


            <div className="mainBanner">Banner</div>
            
            
            
            <main className="main"> 
                <aside className="aside"></aside>



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
