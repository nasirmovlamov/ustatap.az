import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router'
import "../../assets/css/PagesCss/companyRegistration.css"
import Button from '../../components/Button'
import TopSelection from '../../components/TopSelection'
import {Formik , Form , Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import axios from 'axios'

function CompanyRegistration() {

    

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    

    const onSubmit =  (values) => {
        
                axios.post('http://ustatap.testjed.me/public/api/company', {values: values , categories:selectedTag})
                 .then(res => console.log(res))
                 .catch(err => console.log(err))
            
    }
    
    
    const initialValues = {
        name:'',
        email:'',
        phone:'',
        password:'',
        confirmPassword:'',
        voen: '',
        city:'',
        district:'',
        address:'',

    }
      
    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        city: Yup.string().required('Required'),
        district: Yup.string().required('Required'),
        voen: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        phone:  Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required'),
        password: Yup.string().required('Required'),
        confirmPassword:    Yup.string()
                            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    })


    const [tagsApi, settagsApi] = useState([0])
    const tags = []

    useEffect(() => 
    {
            axios.get("http://ustatap.testjed.me/public/api/jobcategory") 
             .then((res) =>  (settagsApi(res.data)  ))
    })
    const [selectedTag,setSelectedTag] = useState([])
    tagsApi.map((tag) => tags.push(<button  type="button" onClick={() => selectHandler(tag.id)} id={`btn${tag.id}`}>{tag.name}</button>)) 

    




    const selectHandler = (num) => {
        
        if(selectedTag.includes(num))
        {
            document.getElementById(`btn${num}`).setAttribute('style' , 'background-color: transparent;color: black;border: 1px solid #58BC40;')
            for( let i = 0; i < selectedTag.length; i++){ 
                if ( selectedTag[i] === num) { 
                    selectedTag.splice(i, 1); 
                }
            } 
            if(selectedTag.length >= 4)
            {
                document.getElementById(`btn${selectedTag[0]}`).setAttribute('style' , 'background-color: transparent;color: black;border: 1px solid #58BC40;')
                selectedTag.shift()
            }

        }
        else
        {
            document.getElementById(`btn${num}`).setAttribute('style' , 'background-color: #58BC40;color: white;')
            selectedTag.push(num)
            if(selectedTag.length >= 4)
            {
                document.getElementById(`btn${selectedTag[0]}`).setAttribute('style' , 'background-color: transparent;color: black;border: 1px solid #58BC40;')
                selectedTag.shift()
            }
            console.log(selectedTag)
        }


    }



    return (
        <div className="companyRegCont" >
            
            <TopSelection value3="1"/>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnChange={true} validateOnBlur={false}>

                <Form action="" method="post">
                    <div className="inputSelectCont">
                        <div className="formPart1">
                            <Field type="text" name="name" placeholder="Şirkətin adı" />
                            <div className="errors"><ErrorMessage name="name"/></div>
                            <Field as="select" name="city" >
                                <option selected value="baki">Bakı</option>
                                <option value="gence">Gəncə</option>
                            </Field>
                            <Field type="text" name="address" placeholder="Ünvanı"/>
                            <div className="errors"><ErrorMessage name="address"/></div>

                            <Field type="tel" name="phone" placeholder="Telefon nömrəsi"/>
                            <div className="errors"><ErrorMessage name="phone"/></div>
                            <Field type="password" name="password" placeholder="Şifrə"/>
                            <div className="errors"><ErrorMessage name="password"/></div>

                        </div>

                        <div className="formPart2">
                            <Field type="text" name="voen" placeholder="VÖEN" />
                            <div className="errors"><ErrorMessage name="voen"/></div>

                            <Field as="select" name="district" id="" >
                                <option selected value="ismayilli"> İsmayıllı</option>
                                <option value="qax"> Qax</option>
                            </Field>

                            <div className="selections">
                                <p className="titleSelections">Hansı işləri görürsünüz ? (maksimum 3 ədəd seçə bilərsiniz)</p>
                                <p className="buttons">
                                    {tags}
                                </p>
                            </div>

                            <Field type="email" name="email" placeholder="Elektron poçt ünvanı"/>
                            <div className="errors"><ErrorMessage name="email"/></div>

                            <Field type="password" name="confirmPassword" placeholder="Təkrar şifrə" />
                            <div className="errors"><ErrorMessage name="confirmPassword"/></div>

                        </div>
                        </div>
                        <Button type="submit" name="Qeydiyyatdan keç"/>
                </Form>
            </Formik>

        </div>
    )
}

export default CompanyRegistration
