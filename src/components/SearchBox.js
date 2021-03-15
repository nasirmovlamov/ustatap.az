import React , {useEffect, useState,useRef} from 'react'
import axios from 'axios'
import "../assets/css/componentsCss/searchBox.css"
import drpLogo1 from "../assets/images/component/element/drpLogo1.svg" 
import drpLogo2 from "../assets/images/component/element/drpLogo2.svg" 
import drpLogo3 from "../assets/images/component/element/drpLogo3.svg" 
import lupa from "../assets/images/component/element/lupa.svg" 
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Cookies from 'js-cookie'
import TextField from '@material-ui/core/TextField';
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

function SearchBox(props) {
    const [checker, setchecker] = useState(0)
    const btn1 = useRef(null)
    const [jobCategoryApi, setJobCategoryApi] = useState([0])
    const [cityCategoryApi, setCityCategoryApi] = useState([0])
    const [districtCategoryApi, setDistrictCategoryApi] = useState([0])
    const [dateCategoryApi, setDateCategoryApi] = useState([0])
    const jobCategory = []
    const cityCategory = []
    const districtCategory = []
    const dateCategory = []
    const classes = useStyles();
    
    
    const handleChange = (event) => {
        props.settype(event.target.value);
    };
    
    const handleChangeJ = (event) => {
        props.setjobcategory(event.target.value);
    };
    
    const handleChangeC = (event) => {
        props.setcity(event.target.value);
    };

    useEffect(() => 
    {
        axios.get("http://ustatap.testjed.me/public/api/jobcategory") 
             .then((res) =>  (setJobCategoryApi(res.data) ))
        axios.get("http://ustatap.testjed.me/public/api/cities") 
             .then((res) =>  (setCityCategoryApi(res.data) ))
    } , [])

    const searchClick = () => {
        console.log(props.type)
        console.log(props.jobcategory)
        console.log(props.city)
        const obj =  {type:props.type , jobcategory:props.jobcategory , city:props.city } 
        localStorage.setItem("SearchResult" , JSON.stringify(obj))
        window.location.href = '/search'
    }

    const categoriesOptions = [];
    const cityOptions = [];
    jobCategoryApi.map(element => categoriesOptions.push({title:element.name , id:element.id}))
    cityCategoryApi.map(element => cityOptions.push({title:element.name , id:element.id})) 
    const [inputValue, setInputValue] = React.useState('');
    const [inputValue2, setInputValue2] = React.useState('');
    const [jobcategory, setjobcategory] = useState(categoriesOptions[0].id);
    const [city, setcity] = useState(cityOptions[0].id);


    
    return (
        <div className="searchbox">
            {/* title Subtitle */}
            <p className="title">UstaTap.net</p>
            <p className="subTitle">Usta Axtarışı Portalı</p>
            {/* Dropdown */}

                <div className="searchCont">  
                    <div className="dropdownCont">
                        <div class="dropbtn" >
                            <img src={drpLogo1} alt=""/>
                            <FormControl className={classes.formControl}>
                                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={props.type} onChange={handleChange}>
                                    <MenuItem value={"elan"}>Elan</MenuItem>
                                    <MenuItem value={"handyman"}>Usta</MenuItem>
                                    <MenuItem value={"company"}>Şirkət</MenuItem>
                                </Select>
                            </FormControl>
                            
                        </div>

                        <div class="dropbtn" >
                            <img src={drpLogo2} alt=""/>
                            <div className="selectMaterial">
                                <Autocomplete
                                    value={jobcategory}
                                    onChange={(event, newValue , newValue2 , category) => {
                                        setjobcategory(category?.option?.id);
                                    }}
                                    inputValue={inputValue}
                                    onInputChange={(event, newInputValue) => {
                                    setInputValue(newInputValue);
                                    console.log(newInputValue)
                                    }}
                                    id="combo-box-demo"
                                    options={categoriesOptions}
                                    getOptionLabel={(option) => (option.title)}
                                    style={{ width: "130px", height: "60px" }}
                                    renderInput={(params) => <TextField {...params}  label="Kategoriya seçin"  />}
                                />  
                            </div>
                            
                        </div>

                        <div  class="dropbtn dropbtn3">
                            <img src={drpLogo3} alt=""/>
                            <div className="selectMaterial">
                                <Autocomplete
                                    value={jobcategory}
                                    onChange={(event, newValue , newValue2 , category) => {
                                        setcity(category?.option?.id);
                                        console.log(category?.option?.id)
                                    }}
                                    inputValue={inputValue2}
                                    onInputChange={(event, newInputValue) => {
                                    setInputValue2(newInputValue);
                                    }}
                                    id="combo-box-demo"
                                    options={cityOptions}
                                    getOptionLabel={(option) => (option.title)}
                                    style={{ width: "130px" , height: "60px"}}
                                    renderInput={(params) => <TextField {...params} label="Şəhər seçin"  />}
                                />  
                            </div>
                        </div>
                    </div>
                    <button onClick={() => searchClick()} class="searchButton"> <img src={lupa} />axtar</button>
                </div>

            {/* Dropdown */}

        </div>  
    )
}

export default SearchBox
