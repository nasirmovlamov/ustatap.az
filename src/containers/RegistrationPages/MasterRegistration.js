import React, { useEffect, useState } from 'react'
import "../../assets/css/PagesCss/masterRegistration.css"
import master from "../../assets/images/page/background/masterReg.png"
import TopSelection from '../../components/TopSelection';
import {Formik , Form , Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import axios from 'axios'
import Button from '../../components/Button'
function MasterRegistration() {
    var expanded = false;
    

    function showCheckboxes() {
        var checkboxes = document.getElementById("checkboxes");
        if (!expanded) {
            checkboxes.style.display = "block";
            expanded = true;
        } else {
            checkboxes.style.display = "none";
            expanded = false;
        }
    }


    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    

    const onSubmit =  (values) => {
        
            axios.post('http://ustatap.testjed.me/usta-qeydiyyati', {values: values , categories:selectedTag})
             .then(res => console.log(res))
             .catch(err => console.log(err))
            
    }
    
    
    const initialValues = {
        name:'',
        email:'',
        phone:'',
        password:'',
        confirmPassword:'',
    }
      
    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
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
        axios.get("http://ustatap.testjed.me/jobcategory") 
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
            console.log(selectedTag)
            if(selectedTag.length >= 4)
            {
                document.getElementById(`btn${selectedTag[0]}`).setAttribute('style' , 'background-color: transparent;color: black;border: 1px solid #58BC40;')
                selectedTag.shift()
            }
        }


    }

    
    return (
        <div className="masterRegistrationCont">
            
            <TopSelection  value2="1"/>


            <div className="registration">
                <img src={master} alt="" width="200" height="auto" className="masterImg"/>
                <div className="formContReg">
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnChange={true} validateOnBlur={false}>
                        <Form action="" method="post">
                            <Field type="text" name="name" placeholder="Ad və soyad"/>
                            <div className="errors"><ErrorMessage name="name"/></div>

                            <Field as="select" name="city" >
                                <option selected value="Bakı">Bakı</option>
                                <option value="Şuşa">Şuşa</option>
                            </Field>
                            <Field as="select" name="district"  placeholder="Rayon">
                                <option selected value="İsmayıllı">İsmayıllı</option>
                                <option value="Ağdərə">Ağdərə</option>
                            </Field>
                            <Field placeholder="Elektron poçt ünvanı" name="email" />
                            <div className="errors"><ErrorMessage name="email"/></div>

                            <Field placeholder="Telefon nömrəsi" name="phone" />
                            <div className="errors"><ErrorMessage name="phone"/></div>

                        

                            <div className="selections">
                                <p className="titleSelections">Hansı işləri görürsünüz ? (maksimum 3 ədəd seçə bilərsiniz)</p>
                                <p className="buttons">
                                    {tags}
                                </p>
                            </div>
                            <Field name="password" type="password" placeholder="Şifrə"/>
                            <div className="errors"><ErrorMessage name="password"/></div>

                            <Field name="confirmPassword" type="password" placeholder="Təkrar şifrə" />
                            <div className="errors"><ErrorMessage name="confirmPassword"/></div>

                            <Button type="submit" name="Qeydiyyatdan kecin" />
                        </Form>
                    </Formik>
                    </div>
                </div>
        </div>
    )
}

export default MasterRegistration
