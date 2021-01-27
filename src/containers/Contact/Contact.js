import React from 'react'
import {useFormik } from "formik"
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

    var formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            topic:'',
            phone:'',
            description:'',

        },
        onSubmit: values => {
            if(formik.errors)
            {
                axios.post('https://jsonplaceholder.typicode.com/posts', {values: values})
                 .then(res => console.log(res))
                 .catch(err => console.log(err))
            }
        },
        validationSchema
    })

   console.log('Visited' , formik.touched)

      
    
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
                        <form action="" method="post" onSubmit={formik.handleSubmit}>
                            <input onBlur={formik.handleBlur} type="text" placeholder="Ad və soyad" name="name" onChange={formik.handleChange} value={formik.values.name}/>
                            {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
                            <input onBlur={formik.handleBlur} type="email" placeholder="Elektron poçt ünvanı" name="email"  onChange={formik.handleChange} value={formik.values.email}/>
                            {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                            <input onBlur={formik.handleBlur} type="text" placeholder="Müraciətin mövzusu" name="topic"  onChange={formik.handleChange} value={formik.values.topic}/>
                            {formik.touched.topic && formik.errors.topic ? <div>{formik.errors.topic}</div> : null}
                            <input onBlur={formik.handleBlur} type="text" placeholder="Telefon nömrəsi" name="phone"  onChange={formik.handleChange} value={formik.values.phone}/>
                            {formik.touched.phone && formik.errors.phone ? <div>{formik.errors.phone}</div> : null}
                            <textarea onBlur={formik.handleBlur} name="" id="" cols="30" rows="10" placeholder="Müraciət Mətn" name="description"  onChange={formik.handleChange} value={formik.values.description}></textarea>
                            {formik.touched.description && formik.errors.description ? <div>{formik.errors.description}</div> : null}
                            
                            <Button name="Göndər"/>
                        </form>
                    </div>
                </div>
        </div>
    )
}

export default Contact
