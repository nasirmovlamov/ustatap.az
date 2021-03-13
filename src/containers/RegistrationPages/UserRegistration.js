import React from 'react'

import {Formik , Form , Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import axios from 'axios'

import "../../assets/css/PagesCss/userRegistration.css"
import user from "../../assets/images/page/background/userRegistration.svg"
import Button from '../../components/Button'
import TopSelection from '../../components/TopSelection'
import Cookies from 'js-cookie'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
toast.configure()
function UserRegistration() {

    const notify = () => toast.success("Hesabınız müvəffəqiyyətlə yaradıldı!");
    const notifyW = () => toast.error("Daxil etdiyiniz məlumatları yanlışdır!");

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const token = Cookies.get("XSRF-TOKEN")
    const headers = {
        'X-CSRF-TOKEN' : token,
        'Content-Type':'multipart/form-data'
    }
    var data = {
        user:""
    }
    const onSubmit =  (values) => {
            const dt = new FormData()
            dt.append('name' , values.name)
            dt.append('email' , values.email)
            dt.append('phone' , values.phone)
            dt.append('password' , values.password)
            dt.append('profilePhoto' , profilePhoto)
            dt.append('profilePhotoName' , profilePhoto?.name)
            axios.post('http://ustatap.testjed.me/public/api/login', dt , headers)
            .then(res => (res.status == 200 && (console.log(res) ,  data.user = res.data  ,localStorage.setItem("LoginUserData" , JSON.stringify(data))  , window.location.href = "/" ) )) 
            .catch(err => console.log(err))
    }
    const [profilePhoto, setprofilePhoto] = useState(null)
    
    const [{alt, src}, setImg] = useState({
        src: "",
        alt: 'Upload an Image'
    });
    
    const ppchanger = (e) => {
        if(e.target.files[0]) {
            document.getElementById('imgPreview').setAttribute('style' , 'height:100px;border:1px solid lightgray;')
            setImg({
                src: URL.createObjectURL(e.target.files[0]),
                alt: e.target.files[0].name
            });    
        }   
        setprofilePhoto(e.target.files[0])
    }

    const initialValues = {
        name:'',
        email:'',
        phone:'',
        password:'',
        confirmPassword:'',
    }
      
    const validationSchema = Yup.object({
        name: Yup.string().required('Adınızı daxil edin'),
        email: Yup.string().email('Invalid email format').required('Emailinizi daxil edin'),
        phone:  Yup.string().matches(phoneRegExp, 'Daxil etdiyiniz nömrə yanlışdır').required('Telefon nömrənizi daxil edin'),
        password: Yup.string().required('Şifrəni daxil edin'),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Şifrələr uyğun deyil')
    })

    return (
        <div className="userRegCont">
            <TopSelection  value1="1"/>
            
            <div className="formAndImg">
                <img src={user} width="auto" height="750" alt="" />
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnChange={true} validateOnBlur={false}>
                    <Form action="" method="post" >
                        <Field type="text" placeholder="Ad və Soyad" name="name"/>
                        <div className="errors"><ErrorMessage name="name"/></div>
                        <Field type="mail" placeholder="Elektron poçt ünvanı" name="email"/>    
                        <div className="errors"><ErrorMessage name="email"/></div>
                        <Field type="text" type="phone" placeholder="Telefon nömrəsi" name="phone"/>
                        <div className="errors" ><ErrorMessage name="phone"/></div>
                        <Field type="password" type="password" placeholder="Şifrə" name="password"/>
                        <div className="errors"><ErrorMessage name="password"/></div>
                        <Field type="password" type="password" placeholder="Təkrar şifrə" name="confirmPassword"/>
                        <div className="errors"><ErrorMessage name="confirmPassword"/></div>
                        <button type="button" className="addFile"> <p className="textPhoto">{profilePhoto?.name !== undefined ? profilePhoto.name  : "Şəklinizi yükləyin"}</p><input onChange={ppchanger} type="file" className="addFileInput" name="profile" id=""/></button>
                        <div className="btnAndImg"><img className="imgPreview" id="imgPreview" src={src} width="auto" height="100px" alt=""/>  <Button type="submit" name="Qeydiyatdan keç"/></div>
                    </Form>
                </Formik>

            </div>
            
        </div>
    )
}

export default UserRegistration
