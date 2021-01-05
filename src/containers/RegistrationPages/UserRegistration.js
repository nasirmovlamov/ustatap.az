import React from 'react'
import "../../assets/css/PagesCss/userRegistration.css"
import user from "../../assets/images/page/background/userRegistration.svg"
import Button from '../../components/Button'
import TopSelection from '../../components/TopSelection'
function UserRegistration() {
    return (
        <div className="userRegCont">
            <TopSelection  value1="1"/>
            
            <div className="formAndImg">
                <img src={user} alt="" />
                <form action="">
                    <input type="text" placeholder="Ad və Soyad"/>
                    <input type="mail" placeholder="Elektron poçt ünvanı"/>
                    <input type="text" placeholder="Telefon nömrəsi"/>
                    <input type="password" placeholder="Şifrə"/>
                    <input type="password" placeholder="Təkrar şifrə" />
                    <Button name="Qeydiyatdan keç"/>
                </form>
            </div>
            
        </div>
    )
}

export default UserRegistration
