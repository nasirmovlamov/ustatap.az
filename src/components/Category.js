import React , {useEffect, useState} from 'react'
import axios from 'axios'
import "../assets/css/componentsCss/category.css"
import Button from './Button'
import lupa from "../assets/images/component/element/lupa2.svg"
import {Link} from 'react-router-dom'
import { FormControl, MenuItem, TextField } from '@material-ui/core'
import Select from '@material-ui/core/Select';

import { makeStyles } from '@material-ui/core/styles';
import { SettingsVoiceTwoTone } from '@material-ui/icons'
import Autocomplete from '@material-ui/lab/Autocomplete';

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
    
    
    const handleChangeJ = (value) => {
        setjobcategory(value);
    };
    const handleChangeC = (value) => {
        setcity(value);
    };
    const handleChangeD = (event) => {
        setdate(event.target.value);
    };
    const handleChangeV = (event) => {
        setvip(event.target.value);
    };
    
    useEffect(() => 
    {
        axios.get("https://ustatap.net/public/api/jobcategory") 
        .then((res) =>  (setJobCategoryApi(res.data) ))
        axios.get("https://ustatap.net/public/api/cities") 
        .then((res) =>  (setCityCategoryApi(res.data) ))
    } , [])
    
    const styleForBg = {
        backgroundColor: props.color ,
        
    }
    
    const searchClick = () => {
        if(date !== undefined || vip !== undefined )
        {
            console.log(city);
            console.log(jobcategory);
            props.setfilter(1)
            const obj =  {date:date , jobcategory:jobcategory , city:city , vip:vip  } 
            localStorage.setItem("ListingResult" , JSON.stringify(obj))
        }
    }
    const [jobCategoryApi, setJobCategoryApi] = useState([0])
    const [cityCategoryApi, setCityCategoryApi] = useState([0])
    const [districtCategoryApi, setDistrictCategoryApi] = useState([0])
    const categoriesOptions = [];
    const cityOptions = [];
    const [inputValue, setInputValue] = React.useState('');
    const [inputValue2, setInputValue2] = React.useState('');
    const [inputValue3, setInputValue3] = React.useState('');
    const [inputValue4, setInputValue4] = React.useState('');
    const [inputValue6, setInputValue6] = React.useState('');
    const [inputValue5, setInputValue5] = React.useState('');
    cityCategoryApi.map(element => cityOptions.push({title:element.name , id:element.id})) 
    jobCategoryApi.map(element => categoriesOptions.push({title:element.name , id:element.id}))
    
    
    const classes = useStyles();
    const dateAr = [{ vip:0 ,  title:"Bütün tarixlər"   } , {vip:30 ,  title:"Son 30 gün"    } , {vip:90 ,  title:"Son 90 gün"}]
    const vipAr = [{vip:0 , title:"Sadə"} , {vip:1 , title:"Vip"} ]
    
    const [type, settype] = useState('elan');
    const [jobcategory, setjobcategory] = useState(categoriesOptions[0].id);
    const [city, setcity] = useState(cityOptions[0].id);
    const [date, setdate] = useState(dateAr[0].id);
    const [vip, setvip] = useState(vipAr[0].id);
    
    
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
                                <Autocomplete
                                    value={jobcategory}
                                    onChange={(event, newValue , newValue2 , category) => {
                                        handleChangeJ(category?.option?.id);
                                    }}
                                    inputValue={inputValue}
                                    onInputChange={(event, newInputValue) => {
                                        setInputValue(newInputValue);
                                        console.log(newInputValue)
                                    }}
                                    id="combo-box-demo"
                                    options={categoriesOptions}
                                    getOptionLabel={(option) => (option.title)}
                                    style={{ width: "186px", height: "40px", color:"white" , textAlign:"center" }}
                                    renderInput={(params) => <TextField {...params} placeholder="Kategoriya seçin"/>}
                                />  
                        </div>
                        
                        <div className="categCont">
                            <Autocomplete
                                value={jobcategory}
                                onChange={(event, newValue , newValue2 , category) => {
                                    handleChangeC(category?.option?.id);
                                }}
                                inputValue={inputValue2}
                                onInputChange={(event, newInputValue) => {
                                    setInputValue2(newInputValue);
                                    console.log(newInputValue)
                                }}
                                id="combo-box-demo"
                                options={cityOptions}
                                getOptionLabel={(option) => (option.title)}
                                style={{ width: "186px", height: "40px", color:"white" }}
                                renderInput={(params) => <TextField {...params}  placeholder="Şəhər seçin"  />}
                            />  
                        </div>
                        
                        { props.type3 === 1 &&
                            <div className="categCont">
                                {/* <FormControl className={classes.formControl}>
                                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={date} onChange={handleChangeD}>
                                        {dateAr.map(date =>  <MenuItem value={date.id}>{date.name}</MenuItem> )}
                                    </Select>
                                </FormControl> */}
                                <Autocomplete
                                    value={date}
                                    onChange={(event, newValue , newValue2 , category) => {
                                        setdate(category?.option.vip)
                                        console.log(category?.option.vip)
                                    }}
                                    inputValue={inputValue6}
                                    onInputChange={(event, newInputValue) => {
                                        setInputValue6(newInputValue);
                                        console.log(newInputValue);
                                    }}
                                    id="combo-box-demo"
                                    options={dateAr}
                                    getOptionLabel={(option) => (option.title)}
                                    style={{ width: "186px", height: "40px", color:"white" }}
                                    renderInput={(params) => <TextField {...params}  placeholder="Tarix seçin"  />}
                                /> 
                            </div>
                        }
                        { props.type4 === 1 &&
                            <div className="categCont">
                                {/* <FormControl className={classes.formControl}>
                                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={vip} onChange={handleChangeV}>
                                        {vipAr.map(vip =>  <MenuItem value={vip.vip}>{vip.name}</MenuItem> )}
                                    </Select>
                                </FormControl> */}
                                <Autocomplete
                                    value={vip}
                                    onChange={(event, newValue , newValue2 , category) => {
                                        setvip(category?.option?.vip)
                                        console.log(category?.option?.vip)
                                    }}
                                    inputValue={inputValue5}
                                    onInputChange={(event, newInputValue) => {
                                        setInputValue5(newInputValue);
                                    }}
                                    id="combo-box-demo"
                                    options={vipAr}
                                    getOptionLabel={(option) => (option.title)}
                                    style={{ width: "186px", height: "40px", color:"white" }}
                                    renderInput={(params) => <TextField {...params}  placeholder="Sadə , Vip"  />}
                                /> 
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
