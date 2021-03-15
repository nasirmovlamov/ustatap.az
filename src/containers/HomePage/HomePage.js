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
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";
import { useMediaQuery } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Sling as Hamburger } from 'hamburger-react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
const stylesForSwiper1 = makeStyles({
  list: {
    width: "auto",
  },
  fullList: {
    width: "auto",
  },
}); 

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const Accordion = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiAccordion);
  
  const AccordionSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);
  
  const AccordionDetails = withStyles((theme) => ({
    root: {
    },
  }))(MuiAccordionDetails);



function HomePage(props) {
    const asideMQ = useMediaQuery('(max-width:1064px)');
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#5aba42");


    document.title = " Ustatap.net Əsas Səhifə"
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
        axios.get("http://ustatap.testjed.me/public/api/ad") 
             .then((res) =>  (setlatestAdApi(res.data)  ))
        axios.get("http://ustatap.testjed.me/public/api/handymen") 
             .then((res) =>  (setMasterApi(res.data) ))
        axios.get("http://ustatap.testjed.me/public/api/company") 
             .then((res) =>  (setCompanyApi(res.data) ))
        axios.get("http://ustatap.testjed.me/public/api/jobcategory") 
             .then((res) =>  (setJobCategoryApi(res.data) ))

    },[] )
    latestAdApi.map((ad) => latestAd.push(<Ad name={ ad.title} desc={ad.description} address={"Baku"} date={ad.updated_at} view={ad.views} image={ad.images} id={ad?.id} userId={props.UserData?.id}/>)  ) 
    jobCategoryApi.map((category) => jobCategory.push(
        <button className="contForAside" onClick={() => clickHandler(category.id)}>
            <div className="workTypeCont">
                <img  width='30px' height='auto'  src={`http://ustatap.testjed.me/storage/app/public/${category.icon}`} alt={props.name}/>
                <p>{category.name}</p>
                <button ><img  src={arrDown} alt=""/></button>
            </div>
            <div className="workDescCont" id={`wD${category.id}`} >
                <p><Link to={`/elanlar/${category.id}`}>Elanlar <span>({category.post_count})</span></Link></p>
                <p><Link to={`/ustalar/${category.id}`}>Ustalar <span>({category.hand_count})</span></Link> </p>
                <p><Link to={`/shirketler/${category.id}`}>Şirkətlər <span>({category.comp_count})</span></Link></p>
            </div>
        </button>
    ))
        
    latestAdApi.map((ad, index ) => {if(ad.category_id == 3){santexnika.push(<Ad name={ ad.title} desc={ad.description} address={"Baku"} date={ad.updated_at} view={ad.views} image={ad.images} id={ad.id}/>)}}) 
    latestAdApi.map((ad, index ) => {if(ad.category_id == 4){electric.push(<Ad name={ ad.title} desc={ad.description} address={ad.city} date={ad.updated_at} view={ad.views} image={ad.images} id={ad.id}/>)}}) 
    MasterApi.map(master =>  {if(master.vip !== 1){ masters.push(<Ad2 name={master.name} job={master.surname} address={master.city} image={master.image} numberStar={master.rating} id={master.id} rating={master.rating}/>)}})
    MasterApi.map(master =>  {if(master.vip === 1){ vipMasters.push(<VipAd2 name={master.name} job={master.surname} address={master.city} image={master.image} numberStar={master.rating} id={master.id } rating={master.rating}/> )}})
    CompanyApi.map( company =>  { if(company.vip !== 1){ companies.push(<Ad3 id={company.id} numberStar={company.rating} image={company.image} name={company.company_name} location={company.company_adress} description={company.description}/>)}} )
    CompanyApi.map( company =>  {if(company.vip === 1){ vipCompanies.push(<VipAd3 id={company.id} numberStar={company.rating} image={company.image} name={company.company_name} location={company.company_adress} description={company.description}/>)}} )

    const  clickHandler = (number) => {
        if (document.getElementById("wD" + number).style.display === "block") {
            document.getElementById("wD" + number).setAttribute("style" , "display:nonne")
        }
        else 
        {
            document.getElementById("wD" + number).setAttribute("style" , "display:block")
        }  
    }

    const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };



    const stylesForSwiper = stylesForSwiper1();
    const [state2, setState2] = React.useState({
      right: false,
    });

    const toggleDrawer2 = (anchor, open) => (event) => {
      if (event?.type === 'keydown' && (event?.key === 'Tab' || event?.key === 'Shift')) {
        return;
      }

      setState2({ ...state2, [anchor]: open });
    };

    const list = (anchor) => (
        <div
        className={clsx(stylesForSwiper1.list, {
          [stylesForSwiper1.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        >
          <div className="swiperTitle"> <p>Kategoriyalar</p> <button className="btnMenu" onClick={toggleDrawer2(anchor, false)} onKeyDown={toggleDrawer2(anchor, false)}>X</button></div>
          <Divider />
          <div >
          {jobCategoryApi.map( category => 
            <Accordion square >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>{category.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <List>
                    <ListItem button >
                        <p><Link to={`/elanlar/${category.id}`}>Elanlar <span>({category.post_count})</span></Link></p>
                    </ListItem>
                    <ListItem button >
                        <p><Link to={`/ustalar/${category.id}`}>Ustalar <span>({category.hand_count})</span></Link> </p>
                    </ListItem>
                    <ListItem button >
                        <p><Link to={`/shirketler/${category.id}`}>Şirkətlər <span>({category.comp_count})</span></Link></p>    
                    </ListItem>
                </List>
                </AccordionDetails>
            </Accordion>
            
            )}
        </div>
          
        </div>
      );
    
    
    return (
        <div className="homePage">
            


            
            
            
            <main className="main"> 
            
                {
                !asideMQ && 
                    <aside className="aside" id="aside">
                        {jobCategory.length > 1 ? jobCategory.reverse() : <PulseLoader color={color} loading={loading} css={override} size={25} />}
                    </aside>
                }


                {/* All Grids  All Grids  All Grids  All Grids  All Grids  All Grids  All Grids */}
                    <div className="allAdsContainer">
                            
                            {asideMQ && 
                                <React.Fragment >
                                    <Button function={toggleDrawer2('right', true)} name="Kategoriyalar" width="100%" height="40px"/>
                                    <Drawer anchor={'right'} open={state2['right']} onClose={toggleDrawer2('right', false)}>
                                        {list('right')}
                                    </Drawer>
                                </React.Fragment>
                            }
                            <div className="typeAddContainer"> 
                                <p className="title">Son Elanlar</p>
                                <div className="line1"></div>
                                <div className="adsContainer">
                                    {
                                        latestAd.length !== 0 ?
                                            (latestAd.length >= 1 ? latestAd :  <PulseLoader color={color} loading={loading} css={override} size={25} />) : 
                                            ""
                                    }
                                </div>    
                                <Link to="/elanlar"><Button name="Bütün elanlara bax"/></Link>
                            </div>
                            
                    

                        <SubBanner marginTop="60px" marginBottom="78px"/>


                    {
                        props.hideVip &&
                        <div className="typeAddContainer"> 
                            <p className="title">Vip Ustalar</p>
                            <div className="line2"></div>
                            <div className="adsContainer">
                            {
                                vipMasters.length !== 0 ?
                                (vipMasters.length >= 0 ? vipMasters :  <PulseLoader color={color} loading={loading} css={override} size={25} />)
                                : ""
                            }
                            </div>  
                            <Link to="/ustalar"><Button name="Bütün ustalara bax" color="linear-gradient(90deg, #F37B29 0%, #F97922 100%)"/></Link>
                        </div>
                    }



                        <div className="typeAddContainer"> 
                            <p className="title">Ustalar</p>
                            <div className="line2"></div>
                            <div className="adsContainer">
                                {
                                    masters.length !== 0 &&
                                    (masters.length >= 1 ? masters : <PulseLoader className="mastersLoader" color={color} loading={loading} css={override} size={25} />)
                                }
                            </div>
                            <Link to="/ustalar"><Button name="Bütün ustalara bax" color="linear-gradient(90deg, #F37B29 0%, #F97922 100%)"/></Link>
                        </div>

                        <SubBanner marginTop="60px" marginBottom="78px"/>
                    
                        {
                            props.hideVip &&
                            <div className="typeAddContainer"> 
                                <p className="title">Vip Şirkətlər</p>
                                <div className="line3"></div>
                                <div className="adsContainer">
                                    {
                                        vipCompanies.length !== 0 ?
                                            (vipCompanies.length >= 1 ? vipCompanies : <PulseLoader color={color} loading={loading} css={override} size={25} />)
                                        :""
                                    }
                                </div>     
                                <Link to="/shirketler"><Button name="Bütün şirkətlərə bax"/></Link>
                            </div>
                        }

                        <div className="typeAddContainer"> 
                            <p className="title">Şirkətlər</p>
                            <div className="line3"></div>
                            <div className="adsContainer">
                                {
                                        companies.length !== 0 ?
                                            (companies.length > 1 ? companies : <PulseLoader color={color} loading={loading} css={override} size={25} />)
                                        :""
                                }
                            </div>     
                            <Link to="/shirketler"><Button name="Bütün şirkətlərə bax"/></Link>
                        </div>
                        <div className="typeAddContainer"> 
                            <p className="title">Santexnika elanları</p>
                            <div className="line4"></div>
                            <div className="adsContainer">
                                {
                                        santexnika.length !== 0 ?
                                            (santexnika.length >= 1 ? santexnika : <PulseLoader color={color} loading={loading} css={override} size={25} />)
                                        : ""
                                }
                            </div>      
                            <Link to="/elanlar"><Button name="Bütün elanlara bax"/></Link>
                        </div>

                        <div className="typeAddContainer"> 
                            <p className="title">Elektrik elanları</p>
                            <div className="line5"></div>
                            <div className="adsContainer">
                                {
                                        electric.length !== 0 ?
                                            (electric.length >= 1 ? electric : <PulseLoader color={color} loading={loading} css={override} size={25} />)
                                        : ""
                                }
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

