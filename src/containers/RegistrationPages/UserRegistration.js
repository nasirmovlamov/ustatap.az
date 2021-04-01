import React from 'react'

import {Formik , Form , Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import axios from 'axios'
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";
import "../../assets/css/PagesCss/userRegistration.css"
import user from "../../assets/images/page/background/userRegistration.jpg"
import Button from '../../components/Button'
import TopSelection from '../../components/TopSelection'
import Cookies from 'js-cookie'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import { useMediaQuery } from '@material-ui/core'
toast.configure()
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
function UserRegistration() {
    const controlImg = useMediaQuery('(min-width:1028px)');

    const notify = () => toast.success("Hesabınız müvəffəqiyyətlə yaradıldı!");
    const notifyW = () => toast.error("Daxil etdiyiniz məlumatları yanlışdır!");

    const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
    const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

    const token = Cookies.get("XSRF-TOKEN")
    const headers = {
        'X-CSRF-TOKEN' : token,
        'Content-Type':'multipart/form-data'
    }
    var data = {
        user:""
    }
    const [UserExistError, setUserExistError] = useState("")
    const [loader, setloader] = useState(false)
    const onSubmit =  (values) => {
        setloader(true)
        const dt = new FormData()
        dt.append('name' , values.name)
        dt.append('email' , values.email)
        dt.append('phone' , values.phone)
        dt.append('password' , values.password)
        if(profilePhoto !== null)
        {
            dt.append('profilePhoto' , profilePhoto)
        }
        axios.post('https://ustatap.net/public/api/login', dt , headers)
        .then(res => (res.status == 200 && (console.log(res) ,  data.user = res.data , localStorage.setItem("LoginUserData" , JSON.stringify(data))  , window.location.href = "/" ) , setloader(false) )) 
        .catch(err => (setUserExistError(err.response.data.message[0]) , setloader(false)) )
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
        password: Yup.string().matches(passRegex ,'Şifrəniz ən az 8 simvol 1 böyük hərf 1 kiçik hərf və 1 rəqəm təşkil etməlidir').required('Şifrənizi daxil edin'),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Şifrələr uyğun deyil')
    })

    const uploadedImg = {
        backgroundImage: `url(${src})`,
    }

    return (
        <div className="userRegCont">
            <TopSelection  value1="1"/>
            
            <div className="formAndImg">
               {controlImg && <img src={user} width="auto" height="750" alt="" />}
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnChange={true} validateOnBlur={false}>
                    <Form action="" method="post" >
                        <div className="errors">
                            <Field type="text" placeholder="Ad və Soyad" name="name"/>
                            <ErrorMessage name="name"/>
                        </div>
                        <div className="errors">
                            <Field type="mail" placeholder="Elektron poçt ünvanı" name="email"/>    
                            <ErrorMessage name="email"/>
                        </div>
                        
                        <div className="errors" >
                            <Field type="text" type="phone" placeholder="Telefon nömrəsi" name="phone"/>
                            <ErrorMessage name="phone"/>
                        </div>

                        <div className="errors">
                            <Field type="password" type="password" placeholder="Şifrə" name="password"/>
                            <ErrorMessage name="password"/>
                        </div>

                        <div className="errors">
                            <Field type="password" type="password" placeholder="Təkrar şifrə" name="confirmPassword"/>
                            <ErrorMessage name="confirmPassword"/>
                        </div>

                        <button type="button" className="addFile"> <p className="textPhoto">{profilePhoto?.name !== undefined ? profilePhoto.name  : "Şəklinizi yükləyin"}</p><input onChange={ppchanger} type="file" className="addFileInput" name="profile" id=""/></button>
                        <div className="btnAndImg"><div className="imgPreview" id="imgPreview" style={uploadedImg}></div>  <Button type="submit" name="Qeydiyatdan keç"/></div>
                        <div className="errors">{UserExistError}</div>
                        <PulseLoader className="mastersLoader" color={"#5aba42"} loading={loader} css={override} size={25} />
                    </Form>
                </Formik>

            </div>
            
        </div>
    )
}

export default UserRegistration
