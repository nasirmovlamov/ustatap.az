import React, { useEffect, useState } from 'react'
import "../../assets/css/PagesCss/masterRegistration.css"
import master from "../../assets/images/page/background/MasterReg.png"
import TopSelection from '../../components/TopSelection';
import {Formik , Form , Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import axios from 'axios'
import Button from '../../components/Button'
import Cookies from 'js-cookie';
import { useMediaQuery } from '@material-ui/core';

import PulseLoader from "react-spinners/PulseLoader";
import { css } from "@emotion/core";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
function MasterRegistration() {
    const masterImgMQ = useMediaQuery('(min-width:1240px)');
    const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/

    var expanded = false;
    const token = Cookies.get('XSRF-TOKEN') // => 'value'
    const headers = {
        "X-CSRF-TOKEN": token
    }

    function showCheckboxes() {
        var checkboxes = document.getElementById("checkboxes");
        if (!expanded) {
            checkboxes.style.display = "block";
            expanded = true;
        } else {
            checkboxes.style.display = "none";
            expanded = false;
        }
    }


    
    const [tagError, settagError] = useState(false)
    const [ImageError, setImageError] = useState(false)
    const [UserExistError, setUserExistError] = useState(false)
    const [loader, setloader] = useState(false)
    
    var data = {
        user:""
    }
    const onSubmit =  (values) => {
            if(profilePhoto !== null)
            {
                setImageError(false)
                if (selectedTag.length >= 1) 
                {
                    setUserExistError("")
                    settagError(false)
                    setloader(true)
                    const FD = new FormData()
                    FD.append('name' , values.name)
                    FD.append('email' , values.email)
                    FD.append('phone' , values.phone)
                    FD.append('password' , values.password)
                    FD.append('categories' , values.selectedTag)
                    FD.append('city' , city)
                    FD.append('district' , 1)
                    FD.append('profilePhoto' , profilePhoto)
                    axios.post('https://ustatap.net/public/api/reghandyman', FD , headers)
                    .then(res => (res.status == 200 && (console.log(res) ,  data.user = res.data , localStorage.setItem("LoginUserData" , JSON.stringify(data))  , window.location.href = "/" ) , setloader(false)))
                    .catch(err => (setUserExistError(err.response.data.message[0]) ,  setloader(false)))
                }
                else 
                {
                    settagError(true)
                }
            }
            else 
            {
                setImageError(true)
            }
            
    }
    
    
    const initialValues = {
        name:'',
        email:'',
        phone:'',
        password:'',
        confirmPassword:'',
        city:'',
        district:''
    }
      
    const validationSchema = Yup.object({
        name: Yup.string().required('Adınızı daxil edin'),
        email: Yup.string().email('E-lektron poçtunuzu düzgün daxil edin').required('Elektron poçtunuzu daxil edin'),
        phone:  Yup.string().matches(phoneRegExp, 'Telefon nömrənizi düzgün daxil edin').required('Telefon nömrənizi daxil edin'),
        password: Yup.string().matches(passRegex ,'Şifrəniz ən az 8 simvol 1 böyük hərf 1 kiçik hərf və 1 rəqəm təşkil etməlidir').required('Şifrənizi daxil edin'),
        confirmPassword:    Yup.string()
                            .oneOf([Yup.ref('password'), null], 'Şifrələr uyğun deyil')
    })

    const [tagsApi, settagsApi] = useState([0])
    const [cityCategoryApi, setCityCategoryApi] = useState([0])
    const tags = []
    const cityCategory = []

    useEffect(() => 
    {
        axios.get("https://ustatap.net/public/api/jobcategory") 
             .then((res) =>  (settagsApi(res.data)  ))
        axios.get("https://ustatap.net/public/api/cities") 
            .then((res) =>  (setCityCategoryApi(res.data) ))
    } ,[])


    const [selectedTag,setSelectedTag] = useState([])
    tagsApi.map((tag) => tags.push(<button  type="button" onClick={() => selectHandler(tag.id)} id={`btn${tag.id}`}>{tag.name}</button>)) 

    
    const selectHandler = (num) => {
        if (selectedTag.length >= 1) {
            settagError(false)
        }
        else 
        {
            settagError(true)
        }
        if(selectedTag.includes(num))
        {
            document.getElementById(`btn${num}`).setAttribute('style' , 'background-color: transparent;color: black;border: 1px solid #58BC40;')
            for( let i = 0; i < selectedTag.length; i++){ 
                if ( selectedTag[i] === num) { 
                    selectedTag.splice(i, 1); 
                }
            } 
            if(selectedTag.length >= 4)
            {
                document.getElementById(`btn${selectedTag[0]}`).setAttribute('style' , 'background-color: transparent;color: black;border: 1px solid #58BC40;')
                selectedTag.shift()
            }

        }
        else
        {
            document.getElementById(`btn${num}`).setAttribute('style' , 'background-color: #58BC40;color: white;')
            selectedTag.push(num)
            console.log(selectedTag)
            if(selectedTag.length >= 4)
            {
                document.getElementById(`btn${selectedTag[0]}`).setAttribute('style' , 'background-color: transparent;color: black;border: 1px solid #58BC40;')
                selectedTag.shift()
            }
        }


    }

    const [profilePhoto, setprofilePhoto] = useState(null)
    
    const [{alt, src}, setImg] = useState({
        src: "",
        alt: 'Upload an Image'
    });
    const ppchanger = (e) => {
        
        if(e.target.files[0]) {
            document.getElementById('imgPreview').setAttribute('style' , 'height:100px;border:1px solid gray;')
            setImg({
                src: URL.createObjectURL(e.target.files[0]),
                alt: e.target.files[0].name
            });    
        }   
        setprofilePhoto(e.target.files[0])
        if(profilePhoto !== null)
        {
            setImageError(false)
        }
    }

    const [city, setcity] = useState(1)
    const citySelect = (e) => {
        setcity(e.target.value)
    }
    const [district, setdistrict] = useState("Ağdərə")
    const districtSelect = (e) => {
        setdistrict(e.target.value)
    }
    return (
        <div className="masterRegistrationCont">
            
            <TopSelection  value2="1"/>


            <div className="registration">
                {masterImgMQ && <img src={master} alt="" width="200" height="auto" className="masterImg"/>}
                <div className="formContReg">
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnChange={true} validateOnBlur={false}>
                        <Form action="" method="post">
                            <div className="errors">
                                <Field type="text" name="name" placeholder="Ad və soyad"/>
                                <ErrorMessage name="name"/>
                            </div>

                            <select onChange={citySelect} name="city">
                                {cityCategoryApi.map(element => <option selected value={element.id}>{element.name}</option> )}
                            </select>

                            
                            <div className="errors">
                                <Field placeholder="Elektron poçt ünvanı" name="email" />
                                <ErrorMessage name="email"/>
                            </div>

                            <div className="errors">
                                <Field placeholder="Telefon nömrəsi" name="phone" />
                                <ErrorMessage name="phone"/>
                            </div>

                        

                            <div className="selections">
                                <p className="titleSelections">Hansı işləri görürsünüz ? (maksimum 3 ədəd seçə bilərsiniz)</p>
                                <p className="buttons">
                                    {tags}
                                </p>
                            </div>

                            <div className="errors">
                                <Field name="password" type="password" placeholder="Şifrə"/>
                                <ErrorMessage name="password"/>
                            </div>

                            <div className="errors">
                                <Field name="confirmPassword" type="password" placeholder="Təkrar şifrə" />
                                <ErrorMessage name="confirmPassword"/>
                            </div>

                            <button type="button" className="addFile"> <p className="textPhoto">{profilePhoto?.name !== undefined ? profilePhoto.name  : "Şəklinizi yükləyin"}</p><input onChange={ppchanger} type="file" className="addFileInput" name="profile" id=""/></button>
                            <div className="btnAndImg"><img className="imgPreview" id="imgPreview" src={src} width="auto" height="100px" alt=""/>  <Button type="submit" name="Qeydiyatdan keç"/></div>
                            {UserExistError &&  <p className="errorsDown"> {UserExistError}</p> }
                            {tagError && <p className="errorsDown"> Ən az 1 kategoriya seçin</p>}
                            {ImageError &&<p className="errorsDown">  Profil şəkli yükləyin</p>}
                            {loader && <div className="errorsDown"><PulseLoader  color={"#5aba42"} loading={loader} css={override} size={25} /></div>}
                        </Form>
                    </Formik>
                    </div>
                </div>
        </div>
    )
}

export default MasterRegistration
