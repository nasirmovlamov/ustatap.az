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
                    <p> <img src={phone} alt="" />+994 55 XXX XX XX</p>
                    <p> <img src={phone2} alt="" />+994 70 XXX XX XX</p>
                    <p> <img src={mail} alt="" />info@ustatap.net</p>
                    <p> <img src={location} alt="" />Bakı ş., Nəsimi rayonu, Azadlıq prospekti 110A</p>
                </div>
                
                <div className="elements1">
                    <p>Santexnik</p>
                    <p>Elektirik</p>
                    <p>Divar kağızı</p>
                    <p>Qapı pəncərə</p>
                    <p>Qaynaqçı</p>
                    <p>Suvaqçı</p>
                    <p>Metlaq</p>
                </div>
                
                <div className="elements2">
                    <p>Bənna</p>
                    <p>Malyar</p>
                    <p>Pol-Parket</p>
                    <p>Şüşə-Güzgü</p>
                    <p>Dülgər</p>
                    <p>Döşəmə</p>
                    <p>Digər</p>
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
