import React from 'react'
import "../../assets/css/componentsCss/contact.css"
import phone from "../../assets/images/component/element/greenPhone.svg"
import mail from "../../assets/images/component/element/greenMail.svg"
import location from "../../assets/images/component/element/greenLocation.svg"
import Button from '../../components/Button'
function Contact(props) {
    return (
        <div className="contact">
                <div className="contactCont">
                    <div className="FrameCont2">
                        <img  alt=""/>
                        <div className="frame" >
                            <div className="overlay" ></div>
                            <div  className="contDetail">

                                <div>
                                    <img className="phoneContact" src={phone} alt="" />
                                    <p>+994 55 XXX XX XX</p>
                                    <p>+994  70 XXX XX XX</p>
                                </div>

                                <div>
                                    <img className="mailContact" src={mail} alt=""/>
                                    <p>info@ustatap.net</p>
                                </div>
                                
                                <div>   
                                    <img className="locContact" src={location} alt=""/>
                                    <p>N.Nərimanov pr., 127, Bakı,Azərbaycan, AZ1006</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    <div className="formCont">
                        <form action="" method="post">
                            <input type="text" placeholder="Ad və soyad"/>
                            <input type="text" placeholder="Elektron poçt ünvanı"/>
                            <input type="text" placeholder="Müraciətin mövzusu"/>
                            <input type="text" placeholder="Telefon nömrəsi"/>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Müraciət Mətn"></textarea>
                            <Button name="Göndər"/>
                        </form>
                    </div>
                </div>
        </div>
    )
}

export default Contact
