import React,{useState,useEffect} from 'react'
import  "../../assets/css/PagesCss/addsPage.css"
import axios from "axios"
import {
    Link, useParams
  } from "react-router-dom";
import Category from '../../components/Category';
import Button from '../../components/Button';
import adImage from "../../assets/images/component/element/adImage.png"
import Ad from '../../components/Ad';
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



function AddsPage(props) {
    const btnFilter = useMediaQuery('(max-width:1030px)');
    let { asideId } = useParams();



    document.title = " Ustatap.net Elanlar"
    const [Adds, setAdds] = useState([])
    var url = window.location.href;
    var id = url.substring(url.lastIndexOf('/') + 1 );
    var numId = url.substring(url.lastIndexOf('/') + 1 );
    const [jobCategoryApi, setJobCategoryApi] = useState([0])
    const [SelectedAd, setSelectedAd] = useState(0)
    const [latestAdApi, setlatestAdApi] = useState([0])
     const jobCategory = []

    var AllAd = []
    jobCategoryApi.map((category) => jobCategory.push(category.category_id))
    console.log(asideId);
    useEffect(() => 
    {
        if(asideId === undefined)
        {
              axios.get("https://ustatap.net/public/api/ad") 
              .then((res) =>  (setlatestAdApi(res.data) ))
              url = window.location.href;
        }
        else 
        {
          axios.get(`https://ustatap.net/public/api/elan/${asideId}`) 
          .then((res) =>  (setlatestAdApi(res.data) ))
          url = window.location.href;
        }
    } , [])
    latestAdApi.map(ad => { AllAd.push(<Ad name={ ad.title} desc={ad.description} address={ad.city} date={ad.created_at} view={ad.views} image={ad.images} id={ad.id}/>)   } ) 
    const [filterCategory, setFilterCategory] = useState(0)
    const [filterCity, setFilterCity] = useState(0)
    const [filterDistrict, setFilterDistrict] = useState(0)
    const [filterDate, setFilterDate] = useState(0)
    const [filter, setfilter] = useState(0)
    const ListingResult = JSON.parse(localStorage.getItem("ListingResult"))

    if (filter) {
        AllAd = []
        setfilter(0)
        axios.post("https://ustatap.net/public/api/elanfilter" , {category_id:ListingResult.jobcategory , city_id:ListingResult.city  , date:ListingResult.date , } ) 
        .then((res) =>  (setlatestAdApi(res.data) ))
        latestAdApi.map(ad => { AllAd.push(<Ad name={ ad.title} desc={ad.description} address={ad.city} date={ad.created_at} view={ad.views} image={ad.images} id={ad.id}/>)   } ) 
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
            <Category type3={1} setfilter={setfilter}   setFilterCategory={setFilterCategory} setFilterDistrict={setFilterDistrict} setFilterCity={setFilterCity} setFilterDate={setFilterDate} type4={undefined} btnColor="#F27B29"/>
        </div>
        
      </div>
    );
    
    
    


    return (
        <div className="addsPage">
            <div className="generalCont">
                <div className="linkAndButton">
                    <div className="link">
                        <p>
                        <Link to="/">
                            <a href=""> ustaTap.net</a> 
                        </Link>
                            -&gt;
                        <Link to="/elanlar">
                            <a href="">elanlar</a> 
                        </Link>
                            
                        </p>
                    </div>
                   {!btnFilter && <button className="topButton" disabled>Elanlar üzrə Axtarış</button>}
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
                </div>

                {!btnFilter && <Category type3={1} setfilter={setfilter}   setFilterCategory={setFilterCategory} setFilterDistrict={setFilterDistrict} setFilterCity={setFilterCity} setFilterDate={setFilterDate} type4={undefined} btnColor="#F27B29"/>}

                    <div className="adsContainer">
                        {AllAd}
                    </div>    


            </div>
        </div>
    )
}

export default (AddsPage )
