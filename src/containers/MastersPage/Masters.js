import React,{useState,useEffect} from 'react'

import  "../../assets/css/componentsCss/masters.css"
import {
    Link, useParams
  } from "react-router-dom";
import Category from '../../components/Category';
import Button from '../../components/Button';
import adImage from "../../assets/images/component/element/adImage.png"
import Ad from '../../components/Ad';
import Ad2 from '../../components/Ad2';
import master from "../../assets/images/component/element/master.png"
import vipTopImg from "../../assets/images/component/element/vipMastersTop.png"
import vipTopImg1 from "../../assets/images/component/element/vipTopPartCrown.jpg"
import VipAd2 from '../../components/VipAd2';
import SubBanner from '../../components/SubBanner';
import axios from 'axios';
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




function Masters(props) {
    let { asideId } = useParams();

    const btnFilter = useMediaQuery('(max-width:1030px)');
    const crownTopPart = useMediaQuery('(max-width:450px)');

    document.title = " Ustatap.net Ustalar"
    var url = window.location.href;
    var numId = url.substring(url.lastIndexOf('/') + 1 );
    useEffect(() => {
        numId = url.substring(url.lastIndexOf('/') + 1 );
    })
    const [jobCategoryApi, setJobCategoryApi] = useState([0])
    const [SelectedMaster, setSelectedMaster] = useState(0)
    const [MasterApi, setMasterApi] = useState([0])
    var masters = []
    var vipMasters = []
    const [Banners, setBanners] = useState([0])
    useEffect(() => {
      axios.get("https://ustatap.net/public/api/banners") 
             .then((res) =>  (setBanners(res.data) ))
    }, [])
    MasterApi.map(master =>  {if(master.vip !== 1){ masters.push(<Ad2 name={master?.name} job={master?.category_id?.name} address={master?.city?.name} image={master.image} numberStar={master.rating} rating={master.rating_count} id={master.id} />)}else if(master.vip === 1){ vipMasters.push(<VipAd2 name={master?.name} job={master?.category_id?.name} address={master?.city?.name} image={master.image} numberStar={master.rating} rating={master.rating_count} id={master.id}/> )}else{}})
    MasterApi.map(master =>  {})
    useEffect(() => 
    {  
      console.log(asideId);
       if(asideId === undefined)
        {
            axios.get("https://ustatap.net/public/api/handymen") 
            .then((res) =>  (setMasterApi(res.data) ))
        }
        else 
        {
            axios.get(`https://ustatap.net/public/api/usta/${asideId}`) 
            .then((res) =>  (setMasterApi(res.data) ))
        }
    } , [])
    
    const [filter, setfilter] = useState(0)
    const ListingResult = JSON.parse(localStorage.getItem("ListingResult"))

    if (filter) {
        masters = []
        vipMasters = []
        setfilter(0)
        axios.post("https://ustatap.net/public/api/ustafilter" , {category_id:ListingResult.jobcategory , city_id:ListingResult.city  , vip:ListingResult.vip } ) 
        .then((res) =>  (setMasterApi(res.data) ))
        MasterApi.map(master =>  {if(master.vip !== 1){ masters.push(<Ad2 name={master?.name} job={master?.category_id?.name} address={master?.city?.name} image={master.image} numberStar={master.rating} rating={master.rating_count} id={master.id}/>)}else if(master.vip === 1){ vipMasters.push(<VipAd2 name={master?.name} job={master?.category_id?.name} address={master?.city?.name} image={master.image} numberStar={master.rating} rating={master.rating_count} id={master.id} /> )}else{}})

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
        <div className="mastersPage">
             <div className="generalCont">
                <div className="linkAndButton">
                    <div className="link">
                        <p>
                          <Link to="/">
                              <a href=""> ustaTap.net</a> 
                          </Link>
                              -&gt;
                          <Link to="/ustalar">
                              <a href="#">ustalar</a> 
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
                    {!btnFilter && <button className="topButton">Ustalar üzrə Axtarış</button>}
                </div>

                    {!btnFilter && <Category setfilter={setfilter}  type3={0}  type4={1}  color="#F27B29" btnCollor="green"/>}
                        <div className="adsContainer">
                        { props.hideVip &&
                                (
                                    vipMasters.length > 0 ?
                                    <>
                                        {!crownTopPart && <img src={vipTopImg} alt=""/>}
                                        {crownTopPart && <img src={vipTopImg1} width='250px'  alt=""/>}
                                        <div className="Vipmasters"> {vipMasters} </div>
                                    </>
                                    : ""
                                )
                        }
                        <SubBanner banner={Banners.bannerone} marginTop="60px" marginBottom="78px"/>
                        {
                          masters.length > 0 ?
                          <>
                              <div className="masters"> {masters} </div>
                          </> : ""
                        }
                    </div>    

            </div>
        </div>
    )
}

export default Masters
