import React, { useEffect, useState } from 'react'
import "../../assets/css/PagesCss/masterRegistration.css"
import master from "../../assets/images/page/background/MasterReg.png"
import TopSelection from '../../components/TopSelection';
import {Formik , Form , Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import axios from 'axios'
import Button from '../../components/Button'
import Cookies from 'js-cookie';

function MasterRegistration() {
    var expanded = false;
    const token = Cookies.get('XSRF-TOKEN') // => 'value'
    const headers = {
        "X-CSRF-TOKEN": token
    }

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
            
            const FD = new FormData()
            FD.append('name' , values.name)
            FD.append('email' , values.email)
            FD.append('phone' , values.phone)
            FD.append('password' , values.password)
            FD.append('categories' , values.selectedTag)
            FD.append('city' , 1)
            FD.append('district' , 1)
            FD.append('profilePhoto' , profilePhoto)
            FD.append('profilePhotoName' , profilePhoto.name)

            axios.post('http://ustatap.testjed.me/public/api/reghandyman', FD , headers)
             .then(res => console.log(res.data))
             .catch(err => console.log(err))
            
    }
    
    
    const initialValues = {
        name:'',
        email:'',
        phone:'',
        password:'',
        confirmPassword:'',
        city:'',
        district:''
    }
      
    const validationSchema = Yup.object({
        name: Yup.string().required('Adınızı daxil edin'),
        email: Yup.string().email('E-lektron poçtunuzu düzgün daxil edin').required('Elektron poçtunuzu daxil edin'),
        phone:  Yup.string().matches(phoneRegExp, 'Telefon nömrənizi düzgün daxil edin').required('Telefon nömrənizi daxil edin'),
        password: Yup.string().required('Şifrəni daxil edin'),
        confirmPassword:    Yup.string()
                            .oneOf([Yup.ref('password'), null], 'Şifrələr uyğun deyil')
    })

    const [tagsApi, settagsApi] = useState([0])
    const tags = []

    useEffect(() => 
    {
        axios.get("http://ustatap.testjed.me/public/api/jobcategory") 
             .then((res) =>  (settagsApi(res.data)  ))
    } ,[])


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

    const [profilePhoto, setprofilePhoto] = useState(null)
    
    const [{alt, src}, setImg] = useState({
        src: "",
        alt: 'Upload an Image'
    });
    const ppchanger = (e) => {
        if(e.target.files[0]) {
            document.getElementById('imgPreview').setAttribute('style' , 'height:100px;border:1px solid gray;')
            setImg({
                src: URL.createObjectURL(e.target.files[0]),
                alt: e.target.files[0].name
            });    
        }   
        setprofilePhoto(e.target.files[0])
    }

    const [city, setcity] = useState("Bakı")
    const citySelect = (e) => {
        setcity(e.target.value)
    }
    const [district, setdistrict] = useState("Ağdərə")
    const districtSelect = (e) => {
        setdistrict(e.target.value)
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

                            <select onChange={citySelect} value={city}  name="city" >
                                <option selected value="Bakı">Bakı</option>
                                <option value="Şuşa">Şuşa</option>
                            </select>

                            

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
                            <button type="button" className="addFile"> <p className="textPhoto">{profilePhoto?.name !== undefined ? profilePhoto.name  : "Şəklinizi yükləyin"}</p><input onChange={ppchanger} type="file" className="addFileInput" name="profile" id=""/></button>

                            <div className="btnAndImg"><img className="imgPreview" id="imgPreview" src={src} width="auto" height="100px" alt=""/>  <Button type="submit" name="Qeydiyatdan keç"/></div>
                        </Form>
                    </Formik>
                    </div>
                </div>
        </div>
    )
}

export default MasterRegistration
