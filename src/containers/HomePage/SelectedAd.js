import React,{useState,useEffect} from 'react'
import {
    Link
} from "react-router-dom";
import axios from "axios"
import "../../assets/css/componentsCss/selectedAd.css"
import Frame from './../../components/Frame';
import selectedAd1 from '../../assets/images/component/element/selectedAdJpg.jpg';
import mainImg from '../../assets/images/component/element/selectedAdJpg.jpg';
import selectedAd2 from '../../assets/images/component/element/selectedAdJpg2.jpg';
import selectedAd3 from '../../assets/images/component/element/selectedAdJpg3.jpg';
import selectedAd4 from '../../assets/images/component/element/selectedAdJpg4.jpg';
import selectedAd5 from '../../assets/images/component/element/selectedAdJpg5.jpg';
import locationCity from '../../assets/images/component/element/locationCity.svg';
import noavailable from '../../assets/images/component/element/noavailable.png';
import heart from '../../assets/images/component/element/heart.svg';
import locationDistrict from '../../assets/images/component/element/locationDistrict.svg';
import humanSelectedAd from '../../assets/images/component/element/humanSelectedAd.svg';
import selectedAdEye from '../../assets/images/component/element/selectedAdEye.svg';
import Button from './../../components/Button';
import mainLogo from "../../assets/images/component/element/mainLogo.svg"
import Comments from '../../components/Comments';
import OurSlider from '../../components/OurSlider';
import Ad from '../../components/Ad';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import ButtonM from '@material-ui/core/Button';
import { useMediaQuery } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FavoriteIcon from '@material-ui/icons/Favorite';

const stpperSytle = makeStyles((theme) => ({
    root: {
    maxWidth: "100%",
    flexGrow: 1,
},

img: {
    height: "auto",
    maxWidth: "100%",
    overflow: 'hidden',
    display: 'block',
    width: '100%',
},
}));



function SelectedAd(props) {
    const notify1 = (rate) => toast.success(`Sorğunuz Göndərilmişdir` , {draggable: true,});

    const frameContMQ = useMediaQuery('(min-width:566px)');
    const [image, setimage] = useState([selectedAd1,selectedAd2,selectedAd3,selectedAd4,selectedAd5 ])
    var url = window.location.href;
    var id = url.substring(url.lastIndexOf('/') + 1 );
    const [SelectedAd, setSelectedAd] = useState(0)
    const [latestAdApi, setlatestAdApi] = useState([0])
    const latestAd = []
    latestAd.push( latestAdApi.map(ad => <Ad name={ ad.title} costumer={ad.description} address={ad.city} date={ad.updated_at} view="1258" image={ad.images} id={ad.id}/>)  ) 
    const [UserData, setUserData] = useState(0)
    useEffect(() => {
        if (UserData?.user?.id === undefined) 
        {
            setUserData(JSON.parse(localStorage.getItem('LoginUserData')))
        }
    } )
    
    useEffect(() => 
    {
        axios.get(`https://ustatap.net/public/api/singlead/${id}`) 
        .then((res) =>  (setSelectedAd(res.data)))
        
        axios.get("https://ustatap.net/public/api/ad") 
        .then((res) =>  (setlatestAdApi(res.data) ))        
    } , [])
    
    const functionApply = () => {
        axios.post("https://ustatap.net/public/api/offer" , {user_id : UserData?.user?.id , vacancy_id:SelectedAd.id} ,  ) 
        .then((res) =>  (console.log(res.data) , notify1() ))  
    }   
    useEffect(() => {
        if (JSON.parse(sessionStorage.getItem('secilmishElan')) !== null) {
            var selecteds = JSON.parse(sessionStorage.getItem('secilmishElan'))
            var index = selecteds.findIndex(x=> x.id === props.id)
            if (index !== -1) {
                document.getElementById(`icon${props.id}`).setAttribute('style' , 'color:red;')
            }
        }
    }, [])

    // image2: "uploads/testHjK3z.jpg"
    // image3: "uploads/testOowEK.jpg"
    // image4: "uploads/testK4zD1.jpg"
    // images: "uploads/test.jpg"
    const tutorialSteps = [
        {
            imgPath:
            `https://ustatap.net/${SelectedAd.images}`,
        },
        {
            imgPath:
            SelectedAd.image2 !== null ? `https://ustatap.net/${SelectedAd.image2}` : noavailable ,
        },
        {
            imgPath:
            SelectedAd.image3 !== null ? `https://ustatap.net/${SelectedAd.image3}` : noavailable ,
        },
        {
            imgPath:
            SelectedAd.image4 !== null ? `https://ustatap.net/${SelectedAd.image4}` : noavailable ,
        },
        
    ];
    
    const stpperSytle1 = stpperSytle();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };



    const selectItem = (num) => {
        const notify2 = (rate) => toast.success(`Seçilmişlərdən çıxarıldı` , {draggable: true,});
        const notify1 = (rate) => toast.success(`Seçilmişlərə Əlavə olundu` , {draggable: true,});
        if(UserData?.user?.id !== undefined)
        {
            if(sessionStorage.getItem('secilmishElan') === null)
            {
                sessionStorage.setItem('secilmishElan' , JSON.stringify(selecteds))
                var selecteds = []
                selecteds = [...selecteds , {id:num , name: props.name ,  desc: props.desc , image:props.image,  address:props.address , date: props.date, view: props.view  }]
                sessionStorage.setItem('secilmishElan' , JSON.stringify(selecteds))
                document.getElementById(`icon${props.id}`).setAttribute('style' , 'color:red;')
                notify1()
                return 0 
            }        
            else 
            {
                var selecteds = JSON.parse(sessionStorage.getItem('secilmishElan'))
            }

            var index = selecteds.findIndex(x=> x.id === num)
            console.log(index);
            if (index === -1) {
                selecteds = [...selecteds , {id:num , name: props.name ,  desc: props.desc  , image:props.image, address:props.address , date: props.date, view: props.view}]
                sessionStorage.setItem('secilmishElan' , JSON.stringify(selecteds))
                document.getElementById(`icon${props.id}`).setAttribute('style' , 'color:red;')
                notify1()
            }
            else 
            {
                var newArr = selecteds.filter((item) => item.id !== num)
                sessionStorage.setItem('secilmishElan' , JSON.stringify(newArr))
                document.getElementById(`icon${props.id}`).setAttribute('style' , 'color:gray;')
                notify2()
            }
        }
        else 
        {
            window.location.href = "/login"
        }
    }

    return (
        
        <div className="selectedAd">
            <div className="generalCont">
                <div className="link">
                    <p>
                    <Link to="/">
                        <a href=""> ustaTap.net</a> 
                    </Link>
                        -&gt;
                    <Link to="/elanlar">
                        <a href="">elanlar</a> 
                    </Link>
                    
                    </p>
                </div>
                <div className="frameAndText">
                    {frameContMQ &&<Frame noBullet={true} image1={SelectedAd.images !== null ? SelectedAd.images : null} image2={SelectedAd.image2 !== null ? `https://ustatap.net/${SelectedAd.image2}` : null} image3={SelectedAd.image3 !== null ? `https://ustatap.net/${SelectedAd.image3}` : null} image4={SelectedAd.image4 !== null ?`https://ustatap.net/${SelectedAd.image4}` : null} mainImg={SelectedAd.images !== null ?`https://ustatap.net/public/${SelectedAd.images}` : null} height="420px" heightImg="282px" widthImg="458px"/>}

                    {/* Mobile Slider */}
                    {!frameContMQ && <div className={stpperSytle1.root}>
                        
                        <img
                            className={stpperSytle1.img}
                            src={tutorialSteps[activeStep].imgPath}
                            alt={tutorialSteps[activeStep].label}
                        />
                        <MobileStepper
                            steps={maxSteps}
                            position="static"
                            variant="text"
                            activeStep={activeStep}
                            nextButton={
                            <ButtonM size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                                Irəli
                                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                            </ButtonM>
                            }
                            backButton={
                            <ButtonM size="small" onClick={handleBack} disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                Geri
                            </ButtonM>
                            }
                        />
                    </div>}
                    {/* Mobile Slider */}




                    <div className="aboutAd">
                        <p className="title">{SelectedAd.title}</p>
                        <div className="subTitle">
                           {SelectedAd.description}
                        </div>
                        <div className="aboutLinks">
                            <a href="#"><p><img width="16" src={locationCity} alt=""/> <span>Şəhər:  {SelectedAd.city_id}</span></p></a>
                            <a href="#"><p><img width="16" src={humanSelectedAd} alt=""/> <span>Sifarişçi:  {SelectedAd?.user_data?.name}</span></p></a>   
                        </div>
                        <div className="aboutButtons">
                            <p>Elan yerləşdirilib: <pre className="date"> {SelectedAd?.tarix}</pre></p> 
                            <p><img src={selectedAdEye} alt=""/> <span> {SelectedAd.views}</span></p> 
                            <p><button className="btnHeart" onClick={() => selectItem(props.id)}><FavoriteIcon  id={`icon${props.id}`}/></button> <span>Seçilmişlərə əlave et</span></p> 
                            <Button type="button" function={() => functionApply()} name="Mən bu işi Görərəm"/> 
                        </div>
                        <div className="bottomLines"><hr/> <img src={mainLogo} alt="" /> <hr/></div>
                    </div>
                </div>
                <Comments id={id}/>

            </div>

        </div>
    )
}

export default SelectedAd
