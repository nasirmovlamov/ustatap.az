import React , {useEffect, useState} from 'react'
import axios from 'axios'
import "../assets/css/componentsCss/category.css"
import Button from './Button'
import lupa from "../assets/images/component/element/lupa2.svg"
import {Link} from 'react-router-dom'
import { FormControl, MenuItem } from '@material-ui/core'
import Select from '@material-ui/core/Select';

import { makeStyles } from '@material-ui/core/styles';
import { SettingsVoiceTwoTone } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: "auto",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

function Category(props) {
    
    const [type, settype] = useState('elan');
    const [jobcategory, setjobcategory] = useState('12');
    const [city, setcity] = useState('1');
    const [date, setdate] = useState('0');
    const [vip, setvip] = useState('1');
    const [jobCategoryApi, setJobCategoryApi] = useState([0])
    const [cityCategoryApi, setCityCategoryApi] = useState([0])
    const [districtCategoryApi, setDistrictCategoryApi] = useState([0])
    const classes = useStyles();
    const dateAr = [{id:0 , name:"Bütün tarixlər"} , {id:30 , name:"Son 30 gün"} , {id:90 , name:"Son 90 gün"}]
    const vipAr = [{vip:0 , name:"Sadə"} , {vip:1 , name:"Vip"} ]

    const handleChangeJ = (event) => {
        setjobcategory(event.target.value);
    };
    const handleChangeC = (event) => {
        setcity(event.target.value);
    };
    const handleChangeD = (event) => {
        setdate(event.target.value);
    };
    const handleChangeV = (event) => {
        setvip(event.target.value);
    };

    useEffect(() => 
    {
        axios.get("http://ustatap.testjed.me/public/api/jobcategory") 
             .then((res) =>  (setJobCategoryApi(res.data) ))
        axios.get("http://ustatap.testjed.me/public/api/cities") 
             .then((res) =>  (setCityCategoryApi(res.data) ))
    } , [])

    const styleForBg = {
        backgroundColor: props.color ,
        
    }

    const searchClick = () => {
        props.setfilter(1)
        const obj =  {date:date , jobcategory:jobcategory , city:city , vip:vip  } 
        localStorage.setItem("ListingResult" , JSON.stringify(obj))
    }


    return (
        <div className="categoryCont" style={styleForBg}>
            <div className="divider">
                <div className="ctgryGrid">
                    <div className="part1">
                        <p>
                            <p>Kateqoriya</p>
                        </p>    
                        <p>Şəhər</p>    
                        { props.type3 === 1 && <p>Tarixə Görə</p>}
                        { props.type4 === 1 && <p>Elanın növü</p>}
                    </div>

                    <div className="part2">
                        <div className="categCont">
                            <FormControl className={classes.formControl}>
                                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={jobcategory} onChange={handleChangeJ}>
                                    {jobCategoryApi.map(category =>  <MenuItem value={category.id}>{category.name}</MenuItem> )}
                                </Select>
                            </FormControl>
                        </div>
                        
                        <div className="categCont">
                            <FormControl className={classes.formControl}>
                                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={city} onChange={handleChangeC}>
                                    {cityCategoryApi.map(city =>  <MenuItem value={city.id}>{city.name}</MenuItem> )}
                                </Select>
                            </FormControl>
                        </div>
                        
                        { props.type3 === 1 &&
                            <div className="categCont">
                                <FormControl className={classes.formControl}>
                                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={date} onChange={handleChangeD}>
                                        {dateAr.map(date =>  <MenuItem value={date.id}>{date.name}</MenuItem> )}
                                    </Select>
                                </FormControl>
                            </div>
                        }
                        { props.type4 === 1 &&
                            <div className="categCont">
                                <FormControl className={classes.formControl}>
                                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={vip} onChange={handleChangeV}>
                                        {vipAr.map(vip =>  <MenuItem value={vip.vip}>{vip.name}</MenuItem> )}
                                    </Select>
                                </FormControl>
                            </div>
                        }
                    </div>
                </div>
                <Button function={searchClick} name="axtar"  image2={lupa} color={props.btnColor}/>
            </div> 
        </div>
    )
}

export default Category
