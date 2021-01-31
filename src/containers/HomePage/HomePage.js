import React,{useEffect,useState} from 'react'
import ReactDOM from 'react-dom'

import axios from "axios"
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
import electricImg from "../../assets/images/component/element/electric.svg"
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
import VipAd2 from '../../components/VipAd2'
import VipAd3 from '../../components/VipAd3'
import Masters from '../MastersPage/Masters'
import Companies from '../Companies/Companies'
import {Link} from "react-router-dom"
function HomePage(props) {

    const latestAd = []
    const masters = []
    const vipMasters = []
    const companies = []
    const vipCompanies = []
    const santexnika = []
    const electric = []
    const jobCategory = []
    const [latestAdApi, setlatestAdApi] = useState([0])
    const [jobCategoryApi, setJobCategoryApi] = useState([0])
    const [MasterApi, setMasterApi] = useState([0])
    const [CompanyApi, setCompanyApi] = useState([0])
    
   

    useEffect(() => 
    {
        axios.get("http://ustatap.testjed.me/ad") 
             .then((res) =>  (setlatestAdApi(res.data)  ))
        axios.get("http://ustatap.testjed.me/handymen") 
             .then((res) =>  (setMasterApi(res.data) ))
        axios.get("http://ustatap.testjed.me/company") 
             .then((res) =>  (setCompanyApi(res.data) ))
        axios.get("http://ustatap.testjed.me/jobcategory") 
             .then((res) =>  (setJobCategoryApi(res.data) ))

    },[] )

    const  clickHandler = (number) => {
        if (document.getElementById("wD" + number).style.display === "block") {
            document.getElementById("wD" + number).setAttribute("style" , "display:nonne")
        }
        else 
        {
            document.getElementById("wD" + number).setAttribute("style" , "display:block")
        }  
    }
    
    
    

    latestAdApi.map((ad) => latestAd.push(<Ad name={ ad.title} costumer={ad.description} address={"Baku"} date={ad.updated_at} view={1258} image={ad.images} id={ad.id}/>)  ) 
    jobCategoryApi.map((category) => jobCategory.push(category.name))
    latestAdApi.map((ad, index ) => {if(ad.category_id == 3){santexnika.push(<Ad name={ ad.title} costumer={ad.description} address={"Baku"} date={ad.updated_at} view="1258" image={ad.images} id={ad.id}/>)}}) 
    latestAdApi.map((ad, index ) => {if(ad.category_id == 4){electric.push(<Ad name={ ad.title} costumer={ad.description} address={ad.city} date={ad.updated_at} view="1258" image={ad.images} id={ad.id}/>)}}) 
    
    MasterApi.map(master =>  {if(master.vip !== 1){ masters.push(<Ad2 name={master.name} job={master.surname} address={master.city} image={master.image} numberStar={master.rating} id={master.id} rating={master.rating}/>)}})
    MasterApi.map(master =>  {if(master.vip === 1){ vipMasters.push(<VipAd2 name={master.name} job={master.surname} address={master.city} image={master.image} numberStar={master.rating} id={master.id } rating={master.rating}/> )}})
    CompanyApi.map( company =>  { if(company.vip !== 1){ companies.push(<Ad3 id={company.id} numberStar={company.rating} image={company.image} name={company.company_name} location={company.company_adress} description={company.description}/>)}} )
    CompanyApi.map( company =>  {if(company.vip === 1){ vipCompanies.push(<VipAd3 id={company.id} numberStar={company.rating} image={company.image} name={company.company_name} location={company.company_adress} description={company.description}/>)}} )
    
    return (
        <div className="homePage">
            


            <div className="mainBanner">Banner</div>
            
            
            
            <main className="main"> 
                <aside className="aside" id="aside">
                    {/* 1 */}
                    <button className="contForAside" onClick={() => clickHandler(1)}>
                        <div className="workTypeCont">
                            <img src={plumber} alt="santexnik"/>
                            <p>Santexnik</p>
                            <button ><img  src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont" id="wD1" >
                            <p><Link to="/masters/santexnik">Ustalar <span>({23})</span></Link> </p>
                            <p><Link to="/elanlar">Elanlar <span>({22})</span></Link></p>
                            <p><Link to="/companies">Şirkətlər <span>({11})</span></Link></p>
                        </div>
                    </button>
                    
                    {/* 2 */}
                    <button className="contForAside" onClick={() => clickHandler(2)} >
                        <div className="workTypeCont">
                            <img src={electricImg} alt=""/>
                            <p>Elektirik</p>
                            <button ><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont" id="wD2" >
                            <p><Link to="/masters">Ustalar <span>({23})</span></Link></p>
                            <p><Link to="/elanlar">Elanlar <span>({23})</span></Link></p>
                            <p><Link to="/companies">Şirkətlər <span>({23})</span></Link></p>
                        </div>
                    </button>

                    {/* 3 */}
                    <button className="contForAside"  onClick={() => clickHandler(3)} >
                        <div className="workTypeCont">
                            <img src={wallpaper} alt=""/>
                            <p>Divar Kağızı</p>
                            <button><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont" id="wD3" >
                            <p><Link to="/masters">Ustalar <span>({23})</span></Link></p>
                            <p><Link to="/elanlar">Elanlar <span>({23})</span></Link></p>
                            <p><Link to="/companies">Şirkətlər <span>({23})</span></Link></p>
                        </div>
                    </button>

                    {/* 4 */}
                    <button className="contForAside"  onClick={() => clickHandler(4)} >
                        <div className="workTypeCont">
                            <img src={windowDoor} alt=""/>
                            <p>Qapı-Pəncərə</p>
                            <button><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont" id="wD4" >
                            <p><Link to="/masters">Ustalar <span>({23})</span></Link></p>
                            <p><Link to="/elanlar">Elanlar <span>({23})</span></Link></p>
                            <p><Link to="/companies">Şirkətlər <span>({23})</span></Link></p>
                        </div>
                    </button>

                    {/* 5 */}
                    <button className="contForAside"  onClick={() => clickHandler(5)} >
                        <div className="workTypeCont">
                            <img src={welder} alt=""/>
                            <p>Qaynaqçı</p>
                            <button><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont" id="wD5" >
                            <p><Link to="/masters">Ustalar <span>({23})</span></Link></p>
                            <p><Link to="/elanlar">Elanlar <span>({23})</span></Link></p>
                            <p><Link to="/companies">Şirkətlər <span>({23})</span></Link></p>
                        </div>
                    </button>

                    {/* 6 */}
                    <button className="contForAside"  onClick={() => clickHandler(6)} >
                        <div className="workTypeCont">
                            <img src={plasterer} alt=""/>
                            <p>Suvaqçı</p>
                            <button><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont" id="wD6" >
                            <p><Link to="/masters">Ustalar <span>({23})</span></Link></p>
                            <p><Link to="/elanlar">Elanlar <span>({23})</span></Link></p>
                            <p><Link to="/shirketler">Şirkətlər <span>({23})</span></Link></p>
                        </div>
                    </button>

                    {/* 7 */}
                    <button className="contForAside"  onClick={() => clickHandler(7)} >
                        <div className="workTypeCont">
                            <img src={metlag} alt=""/>
                            <p>Metlaq</p>
                            <button><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont" id="wD7" >
                            <p><Link to="/masters">Ustalar <span>({23})</span></Link></p>
                            <p><Link to="/elanlar">Elanlar <span>({23})</span></Link></p>
                            <p><Link to="/companies">Şirkətlər <span>({23})</span></Link></p>
                        </div>
                    </button>

                    {/* 8 */}
                    <button className="contForAside"  onClick={() => clickHandler(8)} >
                        <div className="workTypeCont">
                            <img src={roof} alt=""/>
                            <p>Dam Örtüyü</p>
                            <button><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont" id="wD8" >
                            <p><Link to="/masters">Ustalar <span>({23})</span></Link></p>
                            <p><Link to="/elanlar">Elanlar <span>({23})</span></Link></p>
                            <p><Link to="/companies">Şirkətlər <span>({23})</span></Link></p>
                        </div>
                    </button>

                    {/* 9 */}
                    <button className="contForAside"  onClick={() => clickHandler(9)} >
                        <div className="workTypeCont">
                            <img src={stonemaster} alt=""/>
                            <p>Bənna</p>
                            <button><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont" id="wD9" >
                            <p><Link to="/masters">Ustalar <span>({23})</span></Link></p>
                            <p><Link to="/elanlar">Elanlar <span>({23})</span></Link></p>
                            <p><Link to="/companies">Şirkətlər <span>({23})</span></Link></p>
                        </div>
                    </button>

                    {/* 10 */}
                    <button className="contForAside"  onClick={() => clickHandler(10)} >
                        <div className="workTypeCont">
                            <img src={painter} alt=""/>
                            <p>Malyar</p>
                            <button><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont" id="wD10" >
                            <p><Link to="/masters">Ustalar <span>({23})</span></Link></p>
                            <p><Link to="/elanlar">Elanlar <span>({23})</span></Link></p>
                            <p><Link to="/companies">Şirkətlər <span>({23})</span></Link></p>
                        </div>
                    </button>

                    {/* 11 */}
                    <button className="contForAside"  onClick={() => clickHandler(11)} >
                        <div className="workTypeCont">
                            <img src={floor} alt=""/>
                            <p>Döşəmə</p>
                            <button><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont" id="wD11" >
                            <p><Link to="/masters">Ustalar <span>({23})</span></Link></p>
                            <p><Link to="/elanlar">Elanlar <span>({23})</span></Link></p>
                            <p><Link to="/companies">Şirkətlər <span>({23})</span></Link></p>
                        </div>
                    </button>

                    {/* 12 */}
                    <button className="contForAside"  onClick={() => clickHandler(12)} >
                        <div className="workTypeCont">
                            <img src={window} alt=""/>
                            <p>Şüşə-Güzgü</p>
                            <button><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont" id="wD12" >
                            <p><Link to="/masters">Ustalar <span>({23})</span></Link></p>
                            <p><Link to="/elanlar">Elanlar <span>({23})</span></Link></p>
                            <p><Link to="/companies">Şirkətlər <span>({23})</span></Link></p>
                        </div>
                    </button>

                    {/* 13 */}
                    <button className="contForAside" onClick={() => clickHandler(13)} >
                        <div className="workTypeCont">
                            <img src={carpenter} alt=""/>
                            <p>Dülgər</p>
                            <button ><img src={arrDown} alt=""/></button>
                        </div>
                        <div className="workDescCont" id="wD13" >
                            <p><Link to="/masters">Ustalar <span>({23})</span></Link></p>
                            <p><Link to="/elanlar">Elanlar <span>({23})</span></Link></p>
                            <p><Link to="/companies">Şirkətlər <span>({23})</span></Link></p>
                        </div>
                    </button>

                    {/* 14 */}
                    <button className="contForAside"  onClick={() => clickHandler(14)}  >
                        <div className="workTypeCont">
                            <button><img src={threeDots} alt=""/></button>
                            <p className="differP">Digər</p>
                        </div>
                        <div className="workDescCont " id="wD14" >
                            <p><Link to="/masters">Ustalar <span>({23})</span></Link></p>
                            <p><Link to="/elanlar">Elanlar <span>({23})</span></Link></p>
                            <p><Link to="/companies">Şirkətlər <span>({23})</span></Link></p>
                        </div>
                    </button>
                </aside>



                {/* All Grids  All Grids  All Grids  All Grids  All Grids  All Grids  All Grids */}
                    <div className="allAdsContainer">


                        <div className="typeAddContainer"> 
                            <p className="title">Son Elanlar</p>
                            <div className="line1"></div>
                            <div className="adsContainer">
                                {latestAd}
                            </div>    
                            <Link to="/elanlar"><Button name="Bütün elanlara bax"/></Link>
                        </div>
                    

                        <SubBanner marginTop="60px" marginBottom="78px"/>



                        <div className="typeAddContainer"> 
                            <p className="title">Vip Ustalar</p>
                            <div className="line2"></div>
                            <div className="adsContainer">
                                
                                {vipMasters}
                                
                            </div>  
                            <Link to="/ustalar"><Button name="Bütün ustalara bax" color="linear-gradient(90deg, #F37B29 0%, #F97922 100%)"/></Link>
                        </div>




                        <div className="typeAddContainer"> 
                            <p className="title">Ustalar</p>
                            <div className="line2"></div>
                            <div className="adsContainer">
                                {masters}
                            </div>  
                            <Link to="/ustalar"><Button name="Bütün ustalara bax" color="linear-gradient(90deg, #F37B29 0%, #F97922 100%)"/></Link>
                        </div>

                        <SubBanner marginTop="60px" marginBottom="78px"/>

                        <div className="typeAddContainer"> 
                            <p className="title">Vip Şirkətlər</p>
                            <div className="line3"></div>
                            <div className="adsContainer">
                                {vipCompanies}
                            </div>     
                            <Link to="/shirketler"><Button name="Bütün şirkətlərə bax"/></Link>
                        </div>


                        
                        <div className="typeAddContainer"> 
                            <p className="title">Şirkətlər</p>
                            <div className="line3"></div>
                            <div className="adsContainer">
                                {companies}
                            </div>     
                            <Link to="/shirketler"><Button name="Bütün şirkətlərə bax"/></Link>
                        </div>

                        <div className="typeAddContainer"> 
                            <p className="title">Santexnika elanları</p>
                            <div className="line4"></div>
                            <div className="adsContainer">
                                {santexnika}
                            </div>      
                            <Link to="/elanlar"><Button name="Bütün elanlara bax"/></Link>
                        </div>


                        <SubBanner marginTop="60px" marginBottom="78px"/>


                        <div className="typeAddContainer"> 
                            <p className="title">Elektrik elanları</p>
                            <div className="line5"></div>
                            <div className="adsContainer">
                                {electric}
                            </div>  
                            <Link to="/elanlar"> <Button name="Bütün elanlara bax" color="linear-gradient(90deg, #F37B29 0%, #F97922 100%)"/></Link>
                        </div>

                       

                
                       

                


                    </div> 
                {/* All Grids  All Grids  All Grids  All Grids  All Grids  All Grids  All Grids */}

            </main>

        </div>
    )
    
}

export default (HomePage)

