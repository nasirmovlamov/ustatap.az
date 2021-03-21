import React from 'react'
import "../assets/css/componentsCss/security.css"
import { ErrorMessage, Field, Form, Formik } from 'formik'
import axios from 'axios'
import Cookies from 'js-cookie'
import * as Yup from "yup"
import { useState } from 'react'
import Button from './Button'
function Security(props) {

    const validationSchema = Yup.object({
        oldPassword: Yup.string().required('Köhnə şifrəni daxil edin'),
        password: Yup.string().required('Yeni şifrəni daxil edin'),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Şifrələr uyğun deyil').required('Şifrəni daxil edin'),
    })

    
    const token = Cookies.get('XSRF-TOKEN') // => 'value'

    const headers = {
        "X-CSRF-TOKEN": token
    }
    
    const [Error, setError] = useState(false)

    const onSubmit =  (values) => {
        axios.post('https://ustatap.net/public/api/user/pass', { id:141, password:values.password , oldPassword:values.oldPassword  } , headers )
        .then(res => console.log(res))
        .catch(err => setError(true))
    }
    
    const initialValues = {
        oldPassword:'',
        password:'',
        confirmPassword:'',
    }

    return (
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnChange={true} validateOnBlur={false}>
                <Form className="priceCont security" method="POST"> 
                        <div className="gridContt">
                            <div className="key">Köhnə şifrə <span className="redMaker">*</span> </div> <Field type="password" className="value"  placeholder="Köhnə şifrə" name="oldPassword" className="value" />
                            <div className="key"> <span className="redMaker"></span> </div> <div  className="errors"><ErrorMessage className="value"  name="oldPassword"  /></div>
                            <div className="key">Yeni şifrə <span className="redMaker">*</span> </div> <Field type="password"   className="value" placeholder="Yeni şifrə" name="password" className="value" />
                            <div className="key"><span className="redMaker"></span> </div> <div className="errors"><ErrorMessage className="value"  name="password"  /></div>
                            <div className="key">Şifrəni təsdiqlə <span className="redMaker">*</span> </div> <Field type="password"   className="value" placeholder="Şifrəni təsdiqlə" name="confirmPassword" className="value" />
                            <div className="key"><span className="redMaker"></span> </div> <div className="errors"><ErrorMessage className="value"  name="confirmPassword"  /></div>
                        </div>
                        <Button type="submit" name="Şifrəni yenilə" color="rgb(88 188 64)"/>
                </Form>
            </Formik>
    )
}

export default Security
