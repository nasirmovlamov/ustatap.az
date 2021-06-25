import React, { useEffect, useState } from 'react'
import {Formik , Form , Field, ErrorMessage} from "formik"
import axios from 'axios'

import * as Yup from "yup"
import "../../assets/css/componentsCss/addvertise.css"
import {
    Link
  } from "react-router-dom";

import Footer from '../../components/Footer';
import Statistica from '../../components/Statistica';
import manForReklam from "../../assets/images/component/element/manForReklam.jpg"
import Button from '../../components/Button';
import img from '../../assets/images/component/element/manForReklam.jpg'
import { useMediaQuery } from '@material-ui/core'
function Addvertise() {
    const [latestAdApi, setlatestAdApi] = useState([0])
    const [MasterApi, setMasterApi] = useState([0])
    const [CompanyApi, setCompanyApi] = useState([0])
    
    useEffect(() => 
    {
        axios.get("https://ustatap.net/public/api/ad") 
             .then((res) =>  (setlatestAdApi(res.data)  ))
        axios.get("https://ustatap.net/public/api/handymen") 
             .then((res) =>  (setMasterApi(res.data) ))
        axios.get("https://ustatap.net/public/api/company") 
             .then((res) =>  (setCompanyApi(res.data) ))
    },[] )






    const controlImgMQ = useMediaQuery('(max-width:1170px)');



    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const validationSchema = Yup.object({
        name: Yup.string().required('Adınızı daxil edin'),
        nameOfCompany: Yup.string().required('Şirkət adını daxil edin'),
        email: Yup.string().email('Elektron poçtunuzu düzgün daxil edin').required('Elektron poçtunuzu daxil edin'),
        phone:  Yup.string().matches(phoneRegExp, 'Telefon nömrənizi düzgün daxil edin').required('Telefon nömrənizi düzgün daxil edin'),
        description: Yup.string().required('Müraciət mətnini daxil edin'),
    })
    const onSubmit =  (values) => {
            axios.post('https://ustatap.net/elaqe', {values: values})
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
                    {!controlImgMQ && <img src={img} alt=""/>}
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
            
                <Statistica latestAdApi={latestAdApi.length} CompanyApi={CompanyApi.length} MasterApi={MasterApi.length}/>        

                <div className="formCont">
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnChange={true} validateOnBlur={false}> 
                        <Form action="" method="post">
                            <p className="formTitle">Reklam üçün müraciət edin</p>
                            <div className="gridContForm">
                                <div className="tg">
                                    <div className="errors">
                                        <Field type="text" name="name" placeholder="Ad və soyad"/>
                                        <ErrorMessage name="name"/>
                                    </div>
                                    <div className="errors">
                                        <Field type="text" name="phone" placeholder="Telefon nömrəsi"/>
                                        <ErrorMessage name="phone"/>
                                    </div>
                                </div>
                                <div className="tg">
                                    <div className="errors">
                                        <Field type="text" name="email" placeholder="Elektron poçt ünvanı"/>
                                        <ErrorMessage name="email"/>
                                    </div>
                                    <div className="errors">
                                        <Field type="text" name="nameOfCompany" placeholder="Şirkətin adı"/>
                                        <ErrorMessage name="nameOfCompany"/>
                                    </div>
                                </div>
                            <div className="errors errorsTx">
                                <Field as="textarea" name="description" id="" cols="30" rows="10" placeholder="Müraciət Mətn"/>
                                <ErrorMessage name="nameOfCompany"/>
                            </div>
                            </div>
                            <Button name="Göndər"/>
                        </Form>
                    </Formik>

                </div>
        </div>
    )
}

export default Addvertise
