import React from 'react'
import "../assets/css/componentsCss/footer.css"
import phone from "../assets/images/component/element/phone.svg"
import phone2 from "../assets/images/component/element/phone2.svg"
import mail from "../assets/images/component/element/mail.svg"
import location from "../assets/images/component/element/locationFooter.svg"
import facebook from "../assets/images/component/element/facebookLogo.svg"
import instagram from "../assets/images/component/element/instagramLogo.svg"
import linkedin from "../assets/images/component/element/linkedinLogo.svg"
import twitter from "../assets/images/component/element/twitterLogo.svg"
import {Link} from 'react-router-dom'
import Button from './Button'
import Input from './Input';

function Footer() {
    const buttonEdit = {
        width:"71px" ,
        height:"16px" 
    }

    return (
        <footer className="footer">

            <div className="upSide">
                <div className="number">
                    <p> <a href="tel:+994 55 XXX XX XX"> <img src={phone} alt="" />+994 55 XXX XX XX</a></p>
                    <p> <a href="tel:+994 55 XXX XX XX"><img src={phone2} alt="" />+994 70 XXX XX XX</a></p>
                    <p> <a href="mailto:info@ustatap.net"></a><img src={mail} alt="" />info@ustatap.net</p>
                    <p> <a href="https://www.google.com/maps/place/Disneyland+Park/@33.8120962,-117.9211629,17z/data=!3m1!4b1!4m5!3m4!1s0x80dcd7d12b3b5e6b:0x2ef62f8418225cfa!8m2!3d33.8120918!4d-117.9189742"><img src={location} alt="" />Bakı ş., Nəsimi rayonu, Azadlıq prospekti 110A</a></p>
                </div>
                
                <div className="elements1">
                    <Link to="masters/Santexnik"><p>Santexnik</p></Link>
                    <Link to="masters/elektrik"><p>Elektirik</p></Link>
                    <Link to="masters/malyar"><p>Divar kağızı</p></Link>
                    <Link to="masters/dulger"><p>Qapı pəncərə</p></Link>
                    <Link to="masters/qaynaqci"><p>Qaynaqçı</p></Link>
                    <Link to="masters/suvaqci"><p>Suvaqçı</p></Link>
                    <Link to="masters/metlaq"><p>Metlaq</p></Link>
                </div>
                
                <div className="elements2">
                <Link to="masters/benna"><p>Bənna</p></Link>
                <Link to="masters/malyar"> <p>Malyar</p></Link>
                <Link to="masters/dosheme"> <p>Pol-Parket</p></Link>
                <Link to="masters/sushe-guzgu">  <p>Şüşə-Güzgü</p></Link>
                <Link to="masters/dulger">  <p>Dülgər</p></Link>
                <Link to="masters/dosheme">  <p>Döşəmə</p></Link>
                <Link to="masters/diger">  <p>Digər</p></Link>
                </div>
                
                <div className="social">
                    <div className="mailSubs">
                        <div className="aboutPart">
                            <p>Yeniliklərə Abunə Ol</p>
                            <Input/>
                            <Button name="Abunə ol" color="linear-gradient(90deg, #F37B29 0%, #F97922 100%)" className={buttonEdit} only="1"/>
                        </div>
                    </div>
                    <div className="socialImgs"> <img src={facebook} alt="facebook" />  <img src={instagram} alt="instagram" />  <img src={linkedin} alt="linkedin" />  <img src={twitter} alt="twitter" /> </div>
                </div>
            </div>



            <div className="downSide"> 
                <hr/>
                <p className="text">© Ustatap.net. Müəllif Hüquqları Qorunur.</p>
            </div>
        </footer>
    )
}

export default Footer
