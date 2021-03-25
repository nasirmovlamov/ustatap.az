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

const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

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
             .then((res) =>  (setSelectedAd(res.data)))  
    }   


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
                    {frameContMQ &&<Frame image={SelectedAd} mainImg={ `https://ustatap.net/public/${SelectedAd.images}`} height="420px" heightImg="282px" widthImg="458px"/>}

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
                            <a href="#"><p><img width="16" src={locationCity} alt=""/> <span>Şəhər: Bakı {SelectedAd.city}</span></p></a>
                            <a href="#"><p><img width="16" src={humanSelectedAd} alt=""/> <span>Sifarişçi: Nasir Movlamov {SelectedAd?.costumer}</span></p></a>   
                        </div>
                        <div className="aboutButtons">
                            <p>Elan yerləşdirilib: <pre className="date"> 14.11.2021{SelectedAd?.created_at?.slice(0 , 10)}</pre></p> 
                            <p><img src={selectedAdEye} alt=""/> <span> 180{SelectedAd.views}</span></p> 
                            <p><img src={heart} alt=""/> <span>Seçilmişlərə əlave et</span></p> 
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
