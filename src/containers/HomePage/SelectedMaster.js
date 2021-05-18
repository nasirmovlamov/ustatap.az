import React,{useState,useEffect} from 'react'
import {
    Link
  } from "react-router-dom";
import "../../assets/css/componentsCss/selectedMaster.css"
import axios from "axios"
import mainImg from '../../assets/images/component/element/selectedAdJpg.jpg';
import selectedAd2 from '../../assets/images/component/element/selectedAdJpg2.jpg';
import selectedAd3 from '../../assets/images/component/element/selectedAdJpg3.jpg';
import selectedAd4 from '../../assets/images/component/element/selectedAdJpg4.jpg';
import selectedAd5 from '../../assets/images/component/element/selectedAdJpg5.jpg';
import emptyStar from "../../assets/images/component/element/emptyStar.svg"
import fullStar from "../../assets/images/component/element/fullStar.svg"
import halfStar from "../../assets/images/component/element/halfStar.svg"
import diamond from "../../assets/images/component/element/diamond.svg"
import locationCity from '../../assets/images/component/element/locationCity.svg';
import locationDistrict from '../../assets/images/component/element/locationDistrict.svg';
import heart from '../../assets/images/component/element/heart.svg';
import tools from '../../assets/images/component/element/tools.svg';
import phone from '../../assets/images/component/element/grayPhone.svg';
import selectedAdEye from '../../assets/images/component/element/selectedAdEye.svg';
import Button from './../../components/Button';
import mainLogo from "../../assets/images/component/element/mainLogo.svg"
import Comments from '../../components/Comments';
import Frame from '../../components/Frame';
import OurSlider from '../../components/OurSlider';
import Ad2 from "../../components/Ad2"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
function SelectedMaster(props) {
    const [UserData, setUserData] = useState(0)
    useEffect(() => {
        if (UserData?.user?.id === undefined) 
        {
            setUserData(JSON.parse(localStorage.getItem('LoginUserData')))
        }
    } )

    useEffect(() => {
        if (JSON.parse(sessionStorage.getItem('secilmishElan')) !== null) {
            var selecteds = JSON.parse(sessionStorage.getItem('secilmishElan'))
            var index = selecteds.findIndex(x=> x.id === props.id)
            if (index !== -1) {
                document.getElementById(`icon${props.id}`).setAttribute('style' , 'color:red;')
            }
        }
    }, [])


    var url = window.location.href;
    var id = url.substring(url.lastIndexOf('masters/') + 1);


    var mainId = url.substring(url.lastIndexOf('/') + 1 );
    const [SelectedMaster, setSelectedMaster] = useState(0)
    const [MasterApi, setMasterApi] = useState([0])
    const masters = []
    masters.push( MasterApi.map(master =>  <Ad2 name={master.name} job={master.surname} address={master.city} image={master.image} numberStar={master.rating} id={master.id}/>)   ) 
    useEffect(() => 
    {
        axios.get(`https://ustatap.net/public/api/handyman/${mainId}`) 
             .then((res) =>  (setSelectedMaster(res.data)))
       
    } , [])


    const stars = []
    const numberStar = SelectedMaster.rating

    if ((numberStar - Math.floor(numberStar)) === 0) {
        
        for (var i=0;i<numberStar;i++) {
            stars.push(<img src={fullStar} alt="ulduz" /> )
          }
        for (var j=(numberStar);j<5;j++) {
            stars.push(<img src={emptyStar} alt="ulduz" /> )
        }

    }
    else 
    {
        for (var i=0;i<Math.floor(numberStar);i++) {
            stars.push(<img src={fullStar} alt="ulduz" /> )
          }
        stars.push(<img src={halfStar} alt="ulduz" />)

        for (var i=Math.floor(numberStar) + 1;i<5;i++) {
            stars.push(<img src={emptyStar} alt="ulduz" /> )
          }
    }



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
    console.log(SelectedMaster)
    return (
        <div className="selectedMaster">
            <div className="generalCont">
                <div className="link">
                    <p>
                    <Link to="/">
                        <a href="/"> ustaTap.net</a> 
                    </Link>
                        -&gt;
                    <Link to="/ustalar">
                        <a >ustalar</a> 
                    </Link>
                        
                    </p>
                </div>
                <div className="frameAndText">
                    <Frame noBullet={false} mainImg={`https://ustatap.net/${SelectedMaster.image}`} image={0} color="#F27B29" height="550px" heightImg="382px" widthImg="458px"/>
                    <div className="aboutAd">
                        <p className="title">{SelectedMaster.name}</p>
                        <div className="subTitle">
                            <p>{SelectedMaster.description}</p>
                        </div>
                         <div className="aboutLinks">
                            <a ><p><img width="16px" src={locationCity} alt=""/> <span>Şəhər: {SelectedMaster?.city?.name}</span></p></a>
                            <a ><p><img width="18px" src={tools} alt=""/> <span className="worksCanDo">Hansı işləri görür: {SelectedMaster?.category_id?.name} {(SelectedMaster?.subcategory_id?.name !== undefined && SelectedMaster?.subcategory_id?.name !== null) && " , "} {SelectedMaster?.subcategory_id?.name} {(SelectedMaster?.additionalcategory_id?.name !== undefined && SelectedMaster?.subcategory_id?.name !== null) && " , "} {SelectedMaster?.additionalcategory_id?.name} </span></p></a>   
                        </div>
                        <div href="#" className="phoneOfMaster"><p><img width="15px" src={phone} alt=""/> <div className="numbers"><a href={`tel:${SelectedMaster.phone}`}>{SelectedMaster.phone}</a> <a href={`tel:${SelectedMaster.phone}`}></a></div></p></div>   

                        <div className="aboutButtons">
                            <p><img src={selectedAdEye} alt=""/> <span>{SelectedMaster?.views}</span></p> 
                            <p><button className="btnHeart" onClick={() => selectItem(props.id)}><FavoriteIcon  id={`icon${props.id}`}/></button> <span>Seçilmişlərə əlavə et</span></p> 
                            <Button name="Elanı VIP-et" image2={diamond} color="linear-gradient(90deg, #F37B29 0%, #F97922 100%)"/>
                        </div>
                        
                    </div>
                </div>
                <Comments id={mainId}/>

            </div>

        </div>

    )
}

export default SelectedMaster
