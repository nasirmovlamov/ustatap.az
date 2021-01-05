import React from 'react'
import { Redirect } from 'react-router'
import "../../assets/css/PagesCss/companyRegistration.css"
import Button from '../../components/Button'
import TopSelection from '../../components/TopSelection'
function CompanyRegistration() {
    return (
        <div className="companyRegCont" >
            
            <TopSelection value3="1"/>

            <form action="">
                
                <div className="inputSelectCont">
                    <div className="formPart1">
                        <input type="text" placeholder="Şirkətin adı" />
                        <select name="" id="" >
                            <option value="" disabled selected>Şəhər</option>
                            <option value="">Bakı</option>
                            <option value="">Gəncə</option>
                        </select>
                        <input type="text" placeholder="Ünvanı"/>
                        <input type="text" placeholder="Telefon nömrəsi"/>
                        <input type="password" placeholder="Şifrə"/>
                    </div>

                    <div className="formPart2">
                        <input type="text" placeholder="VÖEN" />
                        <select name="" id="" >
                                <option  value="" disabled selected>  Rayon</option>
                            <option value=""> İsmayıllı</option>
                            <option value=""> Qax</option>
                        </select>

                         <div className="selections">
                            <p className="titleSelections">Hansı işləri görürsünüz ? (maksimum 3 ədəd seçə bilərsiniz)</p>
                            <p className="buttons">
                                <button>Malyar</button>
                                <button>Santexnik</button>
                                <button>Elektrik</button>
                                <button>Qaynaqçı</button>
                                <button>Qaynaqçı</button>
                                <button>Qaynaqçı</button>
                                <button>Suvaqçı</button>
                                <button>Malyar</button>
                                <button>Santexnik</button>
                                <button>Elektrik</button>
                                <button>Qaynaqçı</button>
                                <button>Suvaqçı</button>
                                
                            </p>
                        </div>

                        <input type="text" placeholder="Elektron poçt ünvanı"/>
                        
                            <input type="password" placeholder="Təkrar şifrə" />
                    </div>
                    </div>
                <Button name="Qeydiyyatdan keç"/>
            </form>
        </div>
    )
}

export default CompanyRegistration
