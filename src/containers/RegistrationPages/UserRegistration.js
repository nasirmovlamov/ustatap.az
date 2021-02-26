import React from 'react'

import {Formik , Form , Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import axios from 'axios'

import "../../assets/css/PagesCss/userRegistration.css"
import user from "../../assets/images/page/background/userRegistration.svg"
import Button from '../../components/Button'
import TopSelection from '../../components/TopSelection'
import Cookies from 'js-cookie'
function UserRegistration() {

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const token = Cookies.get("XSRF-TOKEN")
    const headers = {
        'X-CSRF-TOKEN' : token
    }

    const onSubmit =  (values) => {
            axios.post('http://ustatap.testjed.me/public/api/login', {name: values.name , email: values.email ,  phone: values.phone , password: values.password } , headers)
             .then(res => console.log(res))
             .catch(err => console.log(err))
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
                        <Field type="text" placeholder="Telefon nömrəsi" name="phone"/>
                        <div className="errors"><ErrorMessage name="phone"/></div>
                        <Field type="password" placeholder="Şifrə" name="password"/>
                        <div className="errors"><ErrorMessage name="password"/></div>
                        <Field type="password" placeholder="Təkrar şifrə" name="confirmPassword"/>
                        <div className="errors"><ErrorMessage name="confirmPassword"/></div>
                        <Button  name="Qeydiyatdan keç"/>
                    </Form>
                </Formik>

            </div>
            
        </div>
    )
}

export default UserRegistration
