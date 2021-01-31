import React from 'react'
import {Formik , Form , Field, ErrorMessage} from "formik"
import axios from 'axios'

import * as Yup from "yup"
import "../../assets/css/componentsCss/addvertise.css"
import {
    Link
  } from "react-router-dom";

import Footer from '../../components/Footer';
import Statistica from '../../components/Statistica';
import manForReklam from "../../assets/images/component/element/manForReklam.svg"
import Button from '../../components/Button';
function Addvertise() {



    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        nameOfCompany: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        phone:  Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required'),
        description: Yup.string().required('Required'),
    })
    const onSubmit =  (values) => {
            axios.post('http://ustatap.testjed.me/elaqe', {values: values})
             .then(res => console.log(res))
             .catch(err => console.log(err))
    }
    
    
    const initialValues = {
        name:'',
        email:'',
        phone:'',
        description:'',
        nameOfCompany: ''
    }
      




    return (
        <div className="addvertise">
            <div className="generalCont">
                
                <div className="linkAndButton">
                    <div className="link">
                        <p>
                        <Link to="/">
                            <a href=""> ustaTap.net</a> 
                        </Link>
                            -&gt;
                        <Link to="/reklam">
                            <a href="">reklam</a> 
                        </Link>
                            
                        </p>
                    </div>
                </div>

                <div className="reklamCont"> 
                    <img src={manForReklam} alt=""/>
                    <div className="reklamText">
                        <p className="reklamTitle">UstaTap.net saytında reklam</p>
                        <p className="reklamDescription">
                            <p>UstaTap.net - Azərbaycanın ən məşhur və stabil artan internet resurslarından biridir. Hər gün bu saytı minlərlə insan ziyarət edir.</p>
                            <p>UstaTap.net saytında reklam sizin brendləriniz, məhsullarınız, xidmətləriniz, aksiyalarınız və əhəmiyyətli hadisələriniz barədə məlumatı çox geniş auditoriyaya çatdırmaq üçün ən gözəl üsüllarından biridir!</p>
                            <p>Siz həm brendinizin tanınmasının əhəmiyyətli dərəcədə artmasına, həm də məhsullarınız barədə məlumatın geniş yayılmasına nail olacaq, və həmçinin şirkətlərinizin internet saytlarının ziyarət edilməsinin sadə üsülla çoxalması imkanını əldə edəcəksiniz.</p>
                            <p>Sizinlə əməkdaşlığa şad olardıq!</p>
                        </p>
                    </div>
                </div>
            </div>
                <Statistica/>  

                <div className="formCont">
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnChange={true} validateOnBlur={false}> 
                        <Form action="" method="post">
                            <p className="formTitle">Reklam üçün müraciət edin</p>
                            <div className="gridContForm">
                                <div className="errors">
                                    <Field type="text" name="name" placeholder="Ad və soyad"/>
                                    <ErrorMessage name="name"/>
                                </div>
                                <div className="errors">
                                    <Field type="text" name="phone" placeholder="Telefon nömrəsi"/>
                                    <ErrorMessage name="phone"/>
                                </div>
                                <div className="errors">
                                    <Field type="text" name="email" placeholder="Elektron poçt ünvanı"/>
                                    <ErrorMessage name="email"/>
                                </div>
                                <div className="errors">
                                    <Field type="text" name="nameOfCompany" placeholder="Şirkətin adı"/>
                                    <ErrorMessage name="nameOfCompany"/>
                                </div>
                            </div>
                            <Field as="textarea" name="description" id="" cols="30" rows="10" placeholder="Müraciət Mətn"/>
                            <div className="errors">
                                <ErrorMessage name="nameOfCompany"/>
                            </div>
                            
                            <Button name="Göndər"/>

                        </Form>
                    </Formik>

                </div>
        </div>
    )
}

export default Addvertise
