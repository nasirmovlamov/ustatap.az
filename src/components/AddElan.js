import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import '../assets/css/PagesCss/AddElan.css'
import * as Yup from "yup"
import axios from 'axios'
import Cookies from 'js-cookie'
import Button from '../components/Button'
import { useEffect } from 'react'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PulseLoader from "react-spinners/PulseLoader";
import { css } from "@emotion/core";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function AddElan(props) {
  const classes = useStyles();
  const notify = (rate) => toast.success(`Elan əlavə olundu!`, { draggable: true, });
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const token = Cookies.get("XSRF-TOKEN")
  const headers = {
    'X-CSRF-TOKEN': token
  }
  const [UserData, setUserData] = useState(0)
  useEffect(() => {
    if (UserData?.user?.id === undefined) {
      setUserData(JSON.parse(localStorage.getItem('LoginUserData')))
    }

  })
  const [jobCategoryApi, setJobCategoryApi] = useState([0])
  const [cityCategoryApi, setCityCategoryApi] = useState([0])
  const [districtCategoryApi, setDistrictCategoryApi] = useState([0])
  const [ppError, setppError] = useState(false)
  useEffect(() => {

    axios.get("https://ustatap.net/public/api/jobcategory")
      .then((res) => (setJobCategoryApi(res.data)))
    axios.get("https://ustatap.net/public/api/cities")
      .then((res) => (setCityCategoryApi(res.data)))
    axios.get("https://ustatap.net/public/api/districts")
      .then((res) => (setDistrictCategoryApi(res.data)))

  }, [])

  const onSubmit = (values) => {
    console.log(thumb);
    if (thumb === 0 && profilePhoto2 === 0 && profilePhoto3 === 0 && profilePhoto4 === 0) {
      setppError(true)
    }
    else {
      setloaderSubmit(true)
      setppError(false)
      const fd = new FormData()
      fd.append("user_id", props.UserData.user.id)
      fd.append("title", values.elanname)
      fd.append("description", values.elandesc)
      fd.append("category_id", jobcategory)
      fd.append("city_id", city)
      fd.append("thumb", thumb)
      fd.append("sliderImages", [profilePhoto2, profilePhoto3, profilePhoto4])
      axios.post('https://ustatap.net/public/api/postad', fd, headers)
        .then(res => (console.log(res), setloaderSubmit(false), res.status === 200 ? window.location.href = "/" : console.log("")))
        .catch(err => console.log(err))

    }
  }

  const initialValues = {
    elanname: '',
    elandesc: '',
  }

  const validationSchema = Yup.object({
    elanname: Yup.string().required('Elanın adını daxil edin'),
    elandesc: Yup.string().required('Elanın haqqımda daxil edin'),
  })
  const categoriesOptions = [];
  const cityOptions = [];
  jobCategoryApi.map(element => categoriesOptions.push({ title: element.name, id: element.id }))
  cityCategoryApi.map(element => cityOptions.push({ title: element.name, id: element.id }))
  const [inputValue, setInputValue] = React.useState('');
  const [inputValue2, setInputValue2] = React.useState('');
  const [jobcategory, setjobcategory] = useState(categoriesOptions[0].id);
  const [city, setcity] = useState(cityOptions[0].id);
  const [district, setdistrict] = useState(1);

  const handleChangeJ = (event) => {
    setjobcategory(event);
    console.log(event)
  };
  const handleChangeC = (event) => {
    setcity(event.target.value);
  };
  const handleChangeD = (event) => {
    setdistrict(event.target.value);
  };


  const [thumb, setprofilethumb] = useState(0)
  const [profilePhoto2, setprofilePhoto2] = useState(0)
  const [profilePhoto3, setprofilePhoto3] = useState(0)
  const [profilePhoto4, setprofilePhoto4] = useState(0)

  const [{ alt, src }, setImg] = useState({
    src: "",
    alt: 'Upload an Image'
  });
  const [{ alt2, src2 }, setImg2] = useState({
    src2: "",
    alt2: 'Upload an Image'
  });
  const [{ alt3, src3 }, setImg3] = useState({
    src3: "",
    alt3: 'Upload an Image'
  });
  const [{ alt4, src4 }, setImg4] = useState({
    src4: "",
    alt4: 'Upload an Image'
  });

  const ppchanger1 = (e) => {
    if (e.target.files[0]) {
      setImg({
        src: URL.createObjectURL(e.target.files[0]),
        alt: e.target.files[0].name
      });
    }
    setprofilethumb(e.target.files[0])

  }
  const ppchanger2 = (e) => {
    if (e.target.files[0]) {
      setImg2({
        src2: URL.createObjectURL(e.target.files[0]),
        alt2: e.target.files[0].name
      });
    }
    setprofilePhoto2(e.target.files[0])

  }
  const ppchanger3 = (e) => {
    if (e.target.files[0]) {
      setImg3({
        src3: URL.createObjectURL(e.target.files[0]),
        alt3: e.target.files[0].name
      });
    }
    setprofilePhoto3(e.target.files[0])

  }
  const ppchanger4 = (e) => {
    if (e.target.files[0]) {
      setImg4({
        src4: URL.createObjectURL(e.target.files[0]),
        alt4: e.target.files[0].name
      });
    }
    setprofilePhoto4(e.target.files[0])

  }


  const btn1Bg = {
    backgroundImage: `url(${src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
  }
  const btn2Bg = {
    backgroundImage: `url(${src2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
  }
  const btn3Bg = {
    backgroundImage: `url(${src3})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
  }
  const btn4Bg = {
    backgroundImage: `url(${src4})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
  }
  const [loaderSubmit, setloaderSubmit] = useState(false)
  console.log(props.status);
  return (
    <div className="addElan">
      <h2>Elan əlavə edin</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnChange={true} validateOnBlur={false}>
        <Form action="" method="post">
          <Field disabled={parseInt(props.status) === 1 ? false : true} type="text" className="input" placeholder={"Elan adını daxil edin"} name="elanname" />
          <div className="errors"><ErrorMessage name="elanname" /></div>
          <Field as="textarea" disabled={parseInt(props.status) === 1 ? true : false} className="textarea input" type="text" placeholder={"Elan haqqında ətraflı daxil edin"} name="elandesc" />
          <div className="errors"><ErrorMessage name="elandesc" /></div>
          <div className="selectMaterial">
            <Autocomplete
              value={jobcategory}
              onChange={(event, newValue, newValue2, category) => {
                setjobcategory(category?.option?.id);
              }}
              disabled={parseInt(props.status) === 1 ? false : true}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
                console.log(newInputValue)
              }}
              id="combo-box-demo"
              options={categoriesOptions}
              getOptionLabel={(option) => (option.title)}
              style={{ width: "auto" }}
              renderInput={(params) => <TextField {...params} label="Kategoriya seçin" />}
            />
          </div>


          <div className="selectMaterial">
            <Autocomplete
              value={jobcategory}
              disabled={parseInt(props.status) === 1 ? false : true}
              onChange={(event, newValue, newValue2, category) => {
                setcity(category?.option?.id);
                console.log(category?.option?.id)
              }}
              inputValue={inputValue2}
              onInputChange={(event, newInputValue) => {
                setInputValue2(newInputValue);
              }}
              id="combo-box-demo"
              options={cityOptions}
              getOptionLabel={(option) => (option.title)}
              style={{ width: "auto" }}
              renderInput={(params) => <TextField {...params} label="Şəhər seçin" />}
            />
          </div>
          <div className="imgGrid">
            <button type="button" className="addFile" style={btn1Bg}><p className="textPhoto">{thumb?.name !== undefined ? setprofilethumb.name : "Əsas Şəkil"}</p><input disabled={parseInt(props.status) === 1 ? false : true} multiple onChange={ppchanger1} type="file" className="addFileInput" name="profile" id="" /> </button>
            <button type="button" className="addFile" style={btn2Bg}> <p className="textPhoto">{profilePhoto2?.name !== undefined ? profilePhoto2.name : "2ci Şəkil"}</p><input disabled={parseInt(props.status) === 1 ? false : true} multiple onChange={ppchanger2} type="file" className="addFileInput" name="profile" id="" /></button>
            <button type="button" className="addFile" style={btn3Bg}> <p className="textPhoto">{profilePhoto3?.name !== undefined ? profilePhoto3.name : "3cü Şəkil"}</p><input disabled={parseInt(props.status) === 1 ? false : true} multiple onChange={ppchanger3} type="file" className="addFileInput" name="profile" id="" /></button>
            <button type="button" className="addFile" style={btn4Bg}> <p className="textPhoto">{profilePhoto4?.name !== undefined ? profilePhoto4.name : "4cü Şəkil"}</p><input disabled={parseInt(props.status) === 1 ? false : true} multiple onChange={ppchanger4} type="file" className="addFileInput" name="profile" id="" /></button>
          </div>

          <Button disabled={parseInt(props.status) === 1 ? false : true} type="submit" name="Elan əlavə et" />
          <PulseLoader color={"#5aba42"} loading={loaderSubmit} css={override} size={25} />
          {ppError && <div className="errors">Elana ən az 1 şəkil əlavə edin</div>}

        </Form>
      </Formik>
    </div>
  )
}

export default AddElan
