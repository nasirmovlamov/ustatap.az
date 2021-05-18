import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router'
import "../../assets/css/PagesCss/companyRegistration.css"
import Button from '../../components/Button'
import TopSelection from '../../components/TopSelection'
import {Formik , Form , Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import axios from 'axios'
import Cookies from 'js-cookie'
import PulseLoader from "react-spinners/PulseLoader";
import { css } from "@emotion/core";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function CompanyRegistration() {

    const token = Cookies.get('XSRF-TOKEN') // => 'value'
    const headers = {
        "X-CSRF-TOKEN": token
    }


    const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
    const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    
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
                const FD = new FormData()
                FD.append('name' , values.name)
                FD.append('email' , values.email)
                FD.append('phone' , values.phone)
                FD.append('description' , values.description)
                FD.append('password' , values.password)
                FD.append('voen' , values.voen)
                FD.append('categories1' , selectedTag[0])
                FD.append('categories2' , selectedTag[1])
                FD.append('categories3' , selectedTag[2])
                FD.append('address' , values.address)
                FD.append('city' , 1)
                FD.append('district' , 1)
                FD.append('profilePhoto' , profilePhoto)
                console.log(selectedTag)
                axios.post('https://ustatap.net/public/api/regcompany',  FD, headers)
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
        address:'',
        description:'',
        phone:'',
        password:'',
        confirmPassword:'',
        voen: '',
        address:'',

    }
      
    const validationSchema = Yup.object({
        name: Yup.string().required('Şirkət adını daxil edin'),
        description: Yup.string().required('Haqqınızda qeyd edin'),
        address: Yup.string().required('Ünvanı daxil edin'),
        voen: Yup.string().required('Voen daxil edin'),
        email: Yup.string().email('Elektron poçtunuzu düzgün daxil edin').required('Elektron poçtunuzu daxil edin'),
        phone:  Yup.string().matches(phoneRegExp, 'Telefon nömrənizi dügün daxil edin').required('Telefon nömrənizi daxil edin'),
        password: Yup.string().matches(passRegex ,'Şifrəniz ən az 8 simvol 1 böyük hərf 1 kiçik hərf və 1 rəqəm təşkil etməlidir').required('Şifrənizi daxil edin'),
        confirmPassword:    Yup.string()
                            .oneOf([Yup.ref('password'), null], 'Şifrələr uyğun deyil')
    })


    const [tagsApi, settagsApi] = useState([0])
    const tags = []
    const [cityCategoryApi, setCityCategoryApi] = useState([0])

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
        var myArray = selectedTag
        if(myArray.includes(num))
        {
            document.getElementById(`btn${num}`).setAttribute('style' , 'background-color: transparent;color: black;border: 1px solid #58BC40;')
            for( let i = 0; i < myArray.length; i++){ 
                if ( myArray[i] === num) { 
                    myArray.splice(i, 1); 
                    setSelectedTag(myArray)
                }
            } 
            if(myArray.length >= 4)
            {
                document.getElementById(`btn${myArray[0]}`).setAttribute('style' , 'background-color: transparent;color: black;border: 1px solid #58BC40;')
                myArray.shift()
                setSelectedTag(myArray)
            }
        }
        else
        {
            document.getElementById(`btn${num}`).setAttribute('style' , 'background-color: #58BC40;color: white;')
            myArray.push(num)
            if(myArray.length >= 4)
            {
                document.getElementById(`btn${myArray[0]}`).setAttribute('style' , 'background-color: transparent;color: black;border: 1px solid #58BC40;')
                myArray.shift()
                setSelectedTag(myArray)
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
    }

    const [city, setcity] = useState("Bakı")
    const citySelect = (e) => {
        setcity(e.target.value)
    }
    const [district, setdistrict] = useState("Ağdərə")
    const districtSelect = (e) => {
        setdistrict(e.target.value)
    }


    return (
        <div className="companyRegCont" >
            
            <TopSelection value3="1"/>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnChange={true} validateOnBlur={false}>
                <Form action="" method="post">
                    <div className="inputSelectCont">
                        <div className="formPart1">
                            <div className="errors">
                                <Field type="text" name="name" placeholder="Şirkətin adı" />
                                <ErrorMessage name="name"/>
                            </div>
                            
                            <select onChange={citySelect} name="city">
                                {cityCategoryApi.map(element => <option selected value={element.id}>{element.name}</option> )}
                            </select>

                            <div className="errors">
                                <Field type="text" name="address" placeholder="Ünvanı"/>
                                <ErrorMessage name="address"/>
                            </div>
                            
                            <div className="errors">
                                <Field type="text" name="description" placeholder="Haqqınızda"/>
                                <ErrorMessage name="description"/>
                            </div>

                            <div className="errors">
                                <Field type="tel" name="phone" placeholder="Telefon nömrəsi"/>
                                <ErrorMessage name="phone"/>
                            </div>
                            
                            <div className="errors">
                                <Field type="password" name="password" placeholder="Şifrə"/>
                                <ErrorMessage name="password"/>
                            </div>

                            <div className="errors">
                                <Field type="password" name="confirmPassword" placeholder="Təkrar şifrə" />
                                <ErrorMessage name="confirmPassword"/>
                            </div>
                        </div>

                        <div className="formPart2">
                            <div className="errors">
                            <Field type="text" name="voen" placeholder="VÖEN" />
                            <ErrorMessage name="voen"/>
                            </div>
                            <div className="selections">
                                <p className="titleSelections">Hansı işləri görürsünüz ? (maksimum 3 ədəd seçə bilərsiniz)</p>
                                <p className="buttons">
                                    {tags}
                                </p>
                            </div>
                            <div className="errors">
                                <Field type="email" name="email" placeholder="Elektron poçt ünvanı"/>
                                <ErrorMessage name="email"/>
                            </div>
                            <button type="button" className="addFile"> <p className="textPhoto">{profilePhoto?.name !== undefined ? profilePhoto.name  : "Şəklinizi yükləyin"}</p><input onChange={ppchanger} type="file" className="addFileInput" name="profile" id=""/></button>
                            
                            <div className="btnAndImg"><img className="imgPreview" id="imgPreview" src={src} width="auto" height="100px" alt=""/>  <Button type="submit" name="Qeydiyatdan keç"/></div>
                            {UserExistError &&  <p className="errorsDown"> {UserExistError}</p> }
                            {tagError && <p className="errorsDown"> Ən az 1 kategoriya seçin</p>}
                            {ImageError &&<p className="errorsDown">  Profil şəkli yükləyin</p>}
                            {loader && <div className="errorsDown"><PulseLoader  color={"#5aba42"} loading={loader} css={override} size={25} /></div>}
                        </div>
                        </div>

                </Form>
            </Formik>

        </div>
    )
}

export default CompanyRegistration
