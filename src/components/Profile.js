import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import '../assets/css/PagesCss/Profile.css'
import * as Yup from "yup"
import axios from 'axios'
import Cookies from 'js-cookie'
import Button from '../components/Button'
function Profile(props) {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const token = Cookies.get("XSRF-TOKEN")
    const headers = {
        'X-CSRF-TOKEN' : token
    }

    const onSubmit =  (values) => {
            axios.post('http://ustatap.testjed.me/public/api/user/info', {id: props.UserData.user.id, name: values.name  ,  phone: values.phone} , headers)
             .then(res => window.location.reload() , localStorage.clear())
             .catch(err => console.log(err))
    }
    
    const initialValues = {
        name:'',
        phone:'',
    }
    
    const validationSchema = Yup.object({
        name: Yup.string().required('Adınızı daxil edin'),
        phone:  Yup.string().matches(phoneRegExp, 'Daxil etdiyiniz nömrə yanlışdır').required('Telefon nömrənizi daxil edin'),
    })
    
    return (
        <div className="profileUser">
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnChange={true} validateOnBlur={false}>
                <Form action="" method="post">
                    <Field type="text" placeholder={props.UserData.user.name} name="name"/>
                    <Field type="mail" value={props.UserData.user.email} name="email"/>
                    <Field type="text" placeholder={props.UserData.user.phone} name="phone" />
                    <div className="errors"><ErrorMessage name="phone"/></div>
                    <Button type="submit" name="Yadda Saxla"/>
                </Form>
            </Formik>
        </div>
    )
}

export default Profile
