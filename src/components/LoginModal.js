import React from 'react'
import x from '../assets/images/component/element/x.png'
import "../assets/css/componentsCss/loginModal.css"
import Input from './Input'
import Button from './Button'
import { Link } from 'react-router-dom'
import {Formik , Form , Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import axios from 'axios'
function LoginModal(props) {
    const clickHandler = () => {
        props.modalCloser()
    }
    
    const clickHandlerForClose = () => {
        props.modalCloser()
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().required('Required'),
    })

    const onSubmit =  (values) => {
            axios.post('http://ustatap.testjed.me/public/api/check', {email: values.email , password:values.password})
            .then(res => console.log(res))
             .catch(err => console.log(err))
            
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
                    </Form>
               </Formik>
               <p className="link"> Hesabınız yoxdur ? <Link to="/istifadeci-qeydiyyati"><button onClick={() => clickHandler()}>Qeydiyyatdan Keçin</button></Link></p>
        </div>
    )
}

export default LoginModal
