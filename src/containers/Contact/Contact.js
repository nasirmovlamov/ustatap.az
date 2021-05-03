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

            axios.post('https://ustatap.net/elaqe', {values: values})
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
                <h1>Əlaqə</h1>
                <div className="contactCont">
                    <div className="FrameCont2">
                        <img  alt=""/>
                        <div className="frame" >
                            <div className="overlay" ></div>
                            <div  className="contDetail">

                                <div>
                                    <img className="phoneContact" src={phone} alt="" />
                                    <p><a href="tel:+994505486947"> +994 50 548 69 47 </a></p>
                                    <p><a href="tel:+994124246804"> +994 12 424 68 04 </a></p>
                                </div>

                                <div>
                                    <img className="mailContact" src={mail} alt=""/>
                                    <p><a href="mailto:info@ustatap.net"> info@ustatap.net</a></p>
                                </div>
                                
                                <div>   
                                    <img className="locContact" src={location} alt=""/>
                                    <p><a href="">  N.Nərimanov pr., 127, Bakı , Azərbaycan, AZ1006 </a></p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                   
                    <div className="formCont">
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnChange={true} validateOnBlur={false}>
                            <Form action="" method="post" >
                                <div className="errors">
                                    <Field  type="text" placeholder="Ad və soyad" name="name"/>
                                    <ErrorMessage name="name"/>
                                </div>
                                <div className="errors">
                                    <Field  type="email" placeholder="Elektron poçt ünvanı" name="email"  />
                                    <ErrorMessage name="email"/>
                                </div> 
                                <div className="errors">
                                    <Field  type="text" placeholder="Müraciətin mövzusu" name="topic"  />
                                    <ErrorMessage name="topic"/>
                                </div> 
                                <div className="errors">
                                    <Field  type="text" placeholder="050XXXXXXX" name="phone"  />
                                    <ErrorMessage name="phone"/>
                                </div> 
                                <div className="errors">
                                    <Field as="textarea" name="description" id="" cols="30" rows="10" placeholder="Müraciət Mətn"  />
                                    <ErrorMessage name="description"/>
                                </div>                             
                                <Button name="Göndər"/>
                            </Form>
                        </Formik>
                    </div>
                </div>
        </div>
    )
}

export default Contact
