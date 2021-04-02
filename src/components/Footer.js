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
import { Link } from 'react-router-dom'
import Button from './Button'
import Input from './Input';
import { useMediaQuery } from '@material-ui/core'

function Footer() {
    const buttonEdit = {
        width: "71px",
        height: "16px"
    }
    const titles = useMediaQuery('(max-width:435px)');

    return (
        <footer className="footer">
            <div className="upSide">
                <div className="number">
                    {titles && <p className="title">Əlaqə</p>}
                    <p> <a href="tel:+994 55 XXX XX XX"> <img src={phone} alt="" />+994 55 XXX XX XX</a></p>
                    <p> <a href="tel:+994 55 XXX XX XX"><img src={phone2} alt="" />+994 70 XXX XX XX</a></p>
                    <p> <a href="mailto:info@ustatap.net"></a><img src={mail} alt="" />info@ustatap.net</p>
                    <p> <a href="https://www.google.com/maps/place/Disneyland+Park/@33.8120962,-117.9211629,17z/data=!3m1!4b1!4m5!3m4!1s0x80dcd7d12b3b5e6b:0x2ef62f8418225cfa!8m2!3d33.8120918!4d-117.9189742"><img src={location} alt="" />Bakı ş., Nəsimi rayonu, Azadlıq prospekti 110A</a></p>
                </div>
                <hr className='mainHr' />
                <div className="elements1">
                    {titles && <p className="title">Keçidlər</p>}
                    <Link to="masters/"><p>Santexnik</p></Link>
                    <Link to="masters/"><p>Elektirik</p></Link>
                    <Link to="masters/"><p>Divar kağızı</p></Link>
                    <Link to="masters/"><p>Qapı pəncərə</p></Link>
                    <Link to="masters/"><p>Qaynaqçı</p></Link>
                    <Link to="masters/"><p>Suvaqçı</p></Link>
                    <Link to="masters/"><p>Metlaq</p></Link>
                </div>
                <div className="elements2">
                    <Link to="masters/"><p>Bənna</p></Link>
                    <Link to="masters/"> <p>Malyar</p></Link>
                    <Link to="masters/"> <p>Pol-Parket</p></Link>
                    <Link to="masters/">  <p>Şüşə-Güzgü</p></Link>
                    <Link to="masters/">  <p>Dülgər</p></Link>
                    <Link to="masters/">  <p>Döşəmə</p></Link>
                    <Link to="masters/">  <p>Digər</p></Link>
                </div>
                <hr className='mainHr' />

                <div className="social">
                    <div className="mailSubs">
                        <div className="aboutPart">
                            <p > Yeniliklərə Abunə Ol</p>
                            <Input />
                            <Button name="Abunə ol" color="linear-gradient(90deg, #F37B29 0%, #F97922 100%)" className={buttonEdit} only="1" />
                        </div>
                    </div>
                    {titles && <p className="title1">Sosial Şəbəkələrdə bizi izləyin</p>}
                    <div className="socialImgs"> <img src={facebook} alt="facebook" />  <img src={instagram} alt="instagram" />  <img src={linkedin} alt="linkedin" />  <img src={twitter} alt="twitter" /> </div>
                </div>
            </div>
            <div className="downSide">
                <hr className='mainHr' />
                <p className="text">© Ustatap.net. Müəllif Hüquqları Qorunur.</p>
            </div>
        </footer>
    )
}

export default Footer
