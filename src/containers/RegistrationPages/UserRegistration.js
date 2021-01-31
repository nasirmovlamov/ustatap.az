import React from 'react'

import {Formik , Form , Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import axios from 'axios'

import "../../assets/css/PagesCss/userRegistration.css"
import user from "../../assets/images/page/background/userRegistration.svg"
import Button from '../../components/Button'
import TopSelection from '../../components/TopSelection'
function UserRegistration() {

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    

    const onSubmit =  (values) => {
            axios.post('http://ustatap.testjed.me/istifadeci-qeydiyyati', {values: values})
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
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        phone:  Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required'),
        password: Yup.string().required('Required'),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
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
