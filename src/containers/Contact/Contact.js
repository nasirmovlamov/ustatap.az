import React, { useState } from 'react'
import {Formik , Form , Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import "../../assets/css/componentsCss/contact.css"
import phone from "../../assets/images/component/element/greenPhone.svg"
import mail from "../../assets/images/component/element/greenMail.svg"
import location from "../../assets/images/component/element/greenLocation.svg"
import Button from '../../components/Button'
import axios from 'axios'
function Contact(props) {

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        topic: Yup.string().required('Required'),
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
        topic:'',
        phone:'',
        description:'',
    }
      
    
    return (
        <div className="contact">
                <div className="contactCont">
                    <div className="FrameCont2">
                        <img  alt=""/>
                        <div className="frame" >
                            <div className="overlay" ></div>
                            <div  className="contDetail">

                                <div>
                                    <img className="phoneContact" src={phone} alt="" />
                                    <p>+994 55 XXX XX XX</p>
                                    <p>+994  70 XXX XX XX</p>
                                </div>

                                <div>
                                    <img className="mailContact" src={mail} alt=""/>
                                    <p>info@ustatap.net</p>
                                </div>
                                
                                <div>   
                                    <img className="locContact" src={location} alt=""/>
                                    <p>N.Nərimanov pr., 127, Bakı,Azərbaycan, AZ1006</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                   
                    <div className="formCont">
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnChange={true} validateOnBlur={false}>
                            <Form action="" method="post" >
                                <Field  type="text" placeholder="Ad və soyad" name="name"/>
                                <div className="errors"><ErrorMessage name="name"/></div>
                                <Field  type="email" placeholder="Elektron poçt ünvanı" name="email"  />
                                <div className="errors"><ErrorMessage name="email"/></div> 
                                <Field  type="text" placeholder="Müraciətin mövzusu" name="topic"  />
                                <div className="errors"><ErrorMessage name="topic"/></div> 
                                <Field  type="text" placeholder="050XXXXXXX" name="phone"  />
                                <div className="errors"><ErrorMessage name="phone"/></div> 
                                <Field as="textarea" name="description" id="" cols="30" rows="10" placeholder="Müraciət Mətn"  />
                                <div className="errors"><ErrorMessage name="description"/></div>                             
                                <Button name="Göndər"/>
                            </Form>
                        </Formik>
                    </div>
                </div>
        </div>
    )
}

export default Contact
