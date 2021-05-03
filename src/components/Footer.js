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
import jedaiLogo from '../assets/images/component/element/JedaiLogo.png'
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
                    <p> <a href="tel:+994505486947"> <img src={phone} alt="" />+994 50 548 69 47</a></p>
                    <p> <a href="tel:+994124246804"><img src={phone2} alt="" />+994 12 424 68 04</a></p>
                    <p> <a href="mailto:info@ustatap.net"><img src={mail} alt="" />info@ustatap.net</a></p>
                    <p> <a href="https://www.google.com/maps/place/Nariman+Narimanov/@40.4028339,49.8684909,17z/data=!3m1!4b1!4m5!3m4!1s0x40307d4ee9253a65:0x29160f1a81905e71!8m2!3d40.4028298!4d49.8706796"><img src={location} alt="" />N.Nərimanov pr., 127, Bakı , Azərbaycan, AZ1006</a></p>
                </div>
                {titles && <hr className='mainHr' />}
                <div className="elements1">
                    {titles && <p className="title">Keçidlər</p>}
                    <Link to="ustalar"><p>Santexnik</p></Link>
                    <Link to="ustalar"><p>Elektirik</p></Link>
                    <Link to="ustalar"><p>Divar kağızı</p></Link>
                    <Link to="ustalar"><p>Qapı pəncərə</p></Link>
                    <Link to="ustalar"><p>Qaynaqçı</p></Link>
                    <Link to="ustalar"><p>Suvaqçı</p></Link>
                    <Link to="ustalar"><p>Metlaq</p></Link>
                </div>
                <div className="elements2">
                    <Link to="ustalar"><p>Bənna</p></Link>
                    <Link to="ustalar"> <p>Malyar</p></Link>
                    <Link to="ustalar"> <p>Pol-Parket</p></Link>
                    <Link to="ustalar">  <p>Şüşə-Güzgü</p></Link>
                    <Link to="ustalar">  <p>Dülgər</p></Link>
                    <Link to="ustalar">  <p>Döşəmə</p></Link>
                    <Link to="ustalar">  <p>Digər</p></Link>
                </div>
                {titles &&<hr className='mainHr' />}

                <div className="social">
                    <div className="mailSubs">
                        <div className="aboutPart">
                            <p > Yeniliklərə Abunə Ol</p>
                            <Input />
                            <Button name="Abunə ol" color="linear-gradient(90deg, #F37B29 0%, #F97922 100%)" className={buttonEdit} only="1" />
                        </div>
                    </div>
                    {titles && <p className="title1">Sosial Şəbəkələrdə bizi izləyin</p>}
                    <div className="socialImgs"> <a href="https://m.facebook.com/funn.zonee.1232?ref=bookmarks"><img src={facebook} alt="facebook" /></a>  <a href="https://www.instagram.com/ustatap.net.2021/"><img src={instagram} alt="instagram" /></a>  <a href="https://www.linkedin.com/in/usta-tap-66335320a"><img src={linkedin} alt="linkedin" /></a>  <a href="https://mobile.twitter.com/tap_usta"><img src={twitter} alt="twitter" /></a> </div>
                </div>
            </div>
            <div className="downSide">
                <hr className='mainHr' />
                <div className="downDown">
                    <p className="text">© Ustatap.net. Müəllif Hüquqları Qorunur.</p>
                    <a target="_blank" className="textCreator" href='https://jedai.az/saytlarin-hazirlanmasi'>Site  by <img src={jedaiLogo} width='auto' height='20px' alt="Jedai Logo"/></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
