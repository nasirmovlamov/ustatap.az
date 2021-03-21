import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router'
import "../../assets/css/PagesCss/companyRegistration.css"
import Button from '../../components/Button'
import TopSelection from '../../components/TopSelection'
import {Formik , Form , Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import axios from 'axios'
import Cookies from 'js-cookie'

function CompanyRegistration() {

    const token = Cookies.get('XSRF-TOKEN') // => 'value'
    const headers = {
        "X-CSRF-TOKEN": token
    }


    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    
   

    const onSubmit =  (values) => {

                const FD = new FormData()
                FD.append('name' , values.name)
                FD.append('email' , values.email)
                FD.append('phone' , values.phone)
                FD.append('password' , values.password)
                FD.append('voen' , values.voen)
                FD.append('categories' , values.selectedTag)
                FD.append('address' , values.address)
                FD.append('city' , 1)
                FD.append('district' , 1)
                FD.append('profilePhoto' , profilePhoto)
                axios.post('https://ustatap.net/public/api/regcompany',  FD, headers)
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            
    }
    
    
    const initialValues = {
        name:'',
        email:'',
        address:'',
        phone:'',
        password:'',
        confirmPassword:'',
        voen: '',
        address:'',

    }
      
    const validationSchema = Yup.object({
        name: Yup.string().required('Şirkət adını daxil edin'),
        address: Yup.string().required('Ünvanı daxil edin'),
        voen: Yup.string().required('Voen daxil edin'),
        email: Yup.string().email('Elektron poçtunuzu düzgün daxil edin').required('Elektron poçtunuzu daxil edin'),
        phone:  Yup.string().matches(phoneRegExp, 'Telefon nömrənizi dügün daxil edin').required('Telefon nömrənizi daxil edin'),
        password: Yup.string().required('Şifrənizi  daxil edin'),
        confirmPassword:    Yup.string()
                            .oneOf([Yup.ref('password'), null], 'Şifrələr uyğun deyil')
    })


    const [tagsApi, settagsApi] = useState([0])
    const tags = []

    useEffect(() => 
    {
            axios.get("https://ustatap.net/public/api/jobcategory") 
             .then((res) =>  (settagsApi(res.data)  ))
    } ,[])
    const [selectedTag,setSelectedTag] = useState([])
    tagsApi.map((tag) => tags.push(<button  type="button" onClick={() => selectHandler(tag.id)} id={`btn${tag.id}`}>{tag.name}</button>)) 

    




    const selectHandler = (num) => {
        
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
            if(selectedTag.length >= 4)
            {
                document.getElementById(`btn${selectedTag[0]}`).setAttribute('style' , 'background-color: transparent;color: black;border: 1px solid #58BC40;')
                selectedTag.shift()
            }
            console.log(selectedTag)
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
                            <Field type="text" name="name" placeholder="Şirkətin adı" />
                            <div className="errors"><ErrorMessage name="name"/></div>
                            
                            <select onChange={citySelect} value={city}  name="city" >
                                <option selected value="Bakı">Bakı</option>
                                <option value="Şuşa">Şuşa</option>
                            </select>

                            <Field type="text" name="address" placeholder="Ünvanı"/>
                            <div className="errors"><ErrorMessage name="address"/></div>

                            <Field type="tel" name="phone" placeholder="Telefon nömrəsi"/>
                            <div className="errors"><ErrorMessage name="phone"/></div>
                            <Field type="password" name="password" placeholder="Şifrə"/>
                            <div className="errors"><ErrorMessage name="password"/></div>
                            <button type="button" className="addFile"> <p className="textPhoto">{profilePhoto?.name !== undefined ? profilePhoto.name  : "Şəklinizi yükləyin"}</p><input onChange={ppchanger} type="file" className="addFileInput" name="profile" id=""/></button>
                        </div>

                        <div className="formPart2">
                            <Field type="text" name="voen" placeholder="VÖEN" />
                            <div className="errors"><ErrorMessage name="voen"/></div>

                            
                            <select onChange={districtSelect} value={district}  name="district"  placeholder="Rayon">
                                <option selected value="İsmayıllı">İsmayıllı</option>
                                <option value="Ağdərə">Ağdərə</option>
                            </select>
                            <div className="selections">
                                <p className="titleSelections">Hansı işləri görürsünüz ? (maksimum 3 ədəd seçə bilərsiniz)</p>
                                <p className="buttons">
                                    {tags}
                                </p>
                            </div>

                            <Field type="email" name="email" placeholder="Elektron poçt ünvanı"/>
                            <div className="errors"><ErrorMessage name="email"/></div>

                            <Field type="password" name="confirmPassword" placeholder="Təkrar şifrə" />
                            <div className="errors"><ErrorMessage name="confirmPassword"/></div>

                        </div>
                        </div>
                        <div className="btnAndImg"><img className="imgPreview" id="imgPreview" src={src} width="auto" height="100px" alt=""/>  <Button type="submit" name="Qeydiyatdan keç"/></div>

                </Form>
            </Formik>

        </div>
    )
}

export default CompanyRegistration
