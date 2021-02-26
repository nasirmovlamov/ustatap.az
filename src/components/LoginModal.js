import React, { useState } from 'react'
import x from '../assets/images/component/element/x.png'
import "../assets/css/componentsCss/loginModal.css"
import Input from './Input'
import Button from './Button'
import { Link } from 'react-router-dom'
import {Formik , Form , Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import axios from 'axios'
import Cookies from 'js-cookie'
function LoginModal(props) {
    const clickHandler = () => {
        props.modalCloser()
    }
    const token = Cookies.get('XSRF-TOKEN') // => 'value'
    const headers = {
        "X-CSRF-TOKEN": token
    }
    const clickHandlerForClose = () => {
        props.modalCloser()
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Emailinizi düz formatda daxil edin').required('Emailinizi daxil edin'),
        password: Yup.string().required('Şifrənizi daxil edin'),
    })
    const [Error, setError] = useState(false)
    const onSubmit =  (values) => {
            axios.post('http://ustatap.testjed.me/public/api/check', {email: values.email , password:values.password} , headers)
            .then((res) => (localStorage.setItem("LoginUserData" , JSON.stringify(res.data))  , clickHandlerForClose() ))
            .catch((err) => setError(true))
    }
    const initialValues = {
        email:'',
        password:'',
    }
    
    return (
        <div className="loginModal" >
               <button onClick={() => clickHandlerForClose()} className="closeImg" ><img  src={x} alt="" width="19" height="auto" /></button>
               <p className="title">Daxil Olun</p> 
               <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnChange={true} validateOnBlur={true}>
                    <Form action="" method="post" >
                        <Field type="email" placeholder="Emailinizi daxil edin" name="email" />    
                        <div className="errors"><ErrorMessage name="email"/></div>
                        <Field type="password" placeholder="Şifrənizi daxil edin"  name="password" />    
                        <div className="errors"><ErrorMessage name="password"/></div>
                        <Button type="submit" name="Daxil Ol"  backgroundColor="#3D92A7" only={1} only2={2} />
                        <p className="errorsDown">{Error && "Daxil etdiyiniz Məlumatlar yanlışdır"}</p>
                    </Form>
               </Formik>
               <p className="link"> Hesabınız yoxdur ? <Link to="/istifadeci-qeydiyyati"><button onClick={() => clickHandler()}>Qeydiyyatdan Keçin</button></Link></p>
        </div>
    )
}

export default LoginModal
