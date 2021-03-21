import React,{useState,useEffect} from 'react'
import Ad3 from '../../components/Ad3'
import axios from "axios"
import  "../../assets/css/componentsCss/companies.css"
import {
    Link, useParams
  } from "react-router-dom";
import Category from '../../components/Category';
import Button from '../../components/Button';
import adImage from "../../assets/images/component/element/adImage.png"
import Ad from '../../components/Ad';
import Ad2 from '../../components/Ad2';
import SubBanner from '../../components/SubBanner';
import master from "../../assets/images/component/element/master.png"
import VipAd3 from '../../components/VipAd3';
import companyLogo from "../../assets/images/component/element/companyLogo.png"
import vipCompaniesTop from "../../assets/images/component/element/vipCompaniesTop.png"
import vipTopImg1 from "../../assets/images/component/element/vipTopPartCrown.jpg"
import vipTopImg from "../../assets/images/component/element/vipMastersTop.png"
import { useMediaQuery } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';  



const stylesForSwiper = makeStyles({
    list: {
      width: "auto",
    },
    fullList: {
      width: "auto",
    },
  }); 



function Companies(props) {
    let { asideId } = useParams();

    const btnFilter = useMediaQuery('(max-width:1030px)');
    const crownTopPart = useMediaQuery('(max-width:450px)');

    document.title = " Ustatap.net Şirkətlər"

    var url = window.location.href;
    var id = url.substring(url.lastIndexOf('/masters/') + 1);
    var url = window.location.href;
    var numId = url.substring(url.lastIndexOf('/') + 1 );
    const [jobCategoryApi, setJobCategoryApi] = useState([0])

    var companies = []
    var vipCompanies = []
    const [CompanyApi, setCompanyApi] = useState([0])
    useEffect(() => 
    {
        if(asideId === undefined)
        {
            axios.get("https://ustatap.net/public/api/company") 
            .then((res) =>  (setCompanyApi(res.data) )) 
           
            axios.get("https://ustatap.net/public/api/jobcategory") 
            .then((res) =>  (setJobCategoryApi(res.data) )) 
        }
        else 
        {
            axios.get(`httpss://ustatap.net/public/api/shirket/${asideId}`) 
            .then((res) =>  (setCompanyApi(res.data) )) 
        }

    } , [])
    console.log(numId);
    CompanyApi.map(  company => { if(company.vip !== 0){companies.push(<Ad3 id={company.id} numberStar={company.rating} image={company.image} name={company.name} location={company.city} description={company.description}/>)} else if(company.vip === 1){ vipCompanies.push(<VipAd3 id={company.id} numberStar={company.rating} image={company.image} name={company.name} location={company.city} description={company.description}/>)}else{}} )
    const [filter, setfilter] = useState(0)
    const ListingResult = JSON.parse(localStorage.getItem("ListingResult"))

    if (filter) {
        companies = []
        vipCompanies = []
        setfilter(0)
        axios.post("https://ustatap.net/public/api/sirketfilter" , {category_id:ListingResult.jobcategory , city_id:ListingResult.city  , vip:ListingResult.vip , } ) 
        .then((res) =>  (setCompanyApi(res.data) ))
        CompanyApi.map(  company => { if(company.vip === 0){companies.push(<Ad3 id={company.id} numberStar={company.rating} image={company.image} name={company.company_name} location={company.company_adress} description={company.description}/>)} else if(company.vip === 1){ vipCompanies.push(<VipAd3 id={company.id} numberStar={company.rating} image={company.image} name={company.company_name} location={company.company_adress} description={company.description}/>)}else{}} )
    }
           
    
          
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
      >
         <div className="swiperTitle"> <p>Filtirlə</p> <button className="btnMenu" onClick={toggleDrawer3(anchor, false)} onKeyDown={toggleDrawer3(anchor, false)}>X</button></div>
        <Divider />
        <div className="filtrDW">
            <Category setfilter={setfilter}  type3={0}  type4={1}  color="#F27B29" btnCollor="green"/>
        </div>
        
      </div>
    );


    return (
        <div className="companiesPage">
             <div className="generalCont">
                <div className="linkAndButton">
                    <div className="link">
                        <p>
                        <Link to="/">
                            <a href=""> ustaTap.net</a> 
                        </Link>
                            -&gt;
                        <Link to="/shirketler">
                            <a href="">şirkətlər</a> 
                        </Link>
                            
                        </p>
                    </div>
                    
                    { btnFilter && 
                        <>
                          {
                            <React.Fragment key={'top'}>
                              <div className="contForBtnImg"><button onClick={toggleDrawer3('top', true)} className="topButtonHover" >Filtrlə</button> <div></div></div>
                              <Drawer anchor={'top'} open={stateFiltr['top']} onClose={toggleDrawer3('top', false)}>
                                {listSearch('top')}
                              </Drawer>
                            </React.Fragment>
                          }
                        </>
                  }
                    {!btnFilter && <button className="topButton" disabled>Şirkətlər üzrə Axtarış</button>}
                </div>

                {!btnFilter && <Category setfilter={setfilter}  type3={0}  type4={1}  color="#F27B29" btnCollor="green"/>}

                    <div className="adsContainer">
                        {
                            props.hideVip && <>
                                    {!crownTopPart && <img src={vipCompaniesTop} alt=""/>}
                                    {crownTopPart && <img className="vipCompanyTopMobile" src={vipTopImg1} alt=""/>}
                                    <div className="companiesVipCont">
                                        {vipCompanies}
                                    </div>
                            </>
                        }
                        <SubBanner/>
                        <div className="companiesCont">
                            {companies}
                        </div>
                    </div>    


            </div>
        </div>
    )
}

export default Companies
