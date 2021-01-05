import React from 'react'
import "../../assets/css/PagesCss/masterRegistration.css"
import master from "../../assets/images/page/background/masterReg.png"
import TopSelection from '../../components/TopSelection';
function MasterRegistration() {
    var expanded = false;

    function showCheckboxes() {
        var checkboxes = document.getElementById("checkboxes");
        if (!expanded) {
            checkboxes.style.display = "block";
            expanded = true;
        } else {
            checkboxes.style.display = "none";
            expanded = false;
        }
    }

    return (
        <div className="masterRegistrationCont">
            
            <TopSelection  value2="1"/>


            <div className="registration">
                <img src={master} alt="" width="200" height="auto" className="masterImg"/>
                <div className="formContReg">
                    <form action="">
                        <input type="text" placeholder="Ad və soyad"/>
                        <select name="Şəhər" id="">
                            <option value="" disabled selected>Şəhər</option>
                            <option value="Bakı">Bakı</option>
                            <option value="Şuşa">Şuşa</option>
                        </select>
                        <select name="Rayon" id="" placeholder="Rayon">
                            <option value="" disabled selected>Rayon</option>
                            <option value="İsmayıllı">İsmayıllı</option>
                            <option value="Ağdərə">Ağdərə</option>
                        </select>
                        <input placeholder="Elektron poçt ünvanı" name="" id=""/>
                        <input placeholder="Telefon nömrəsi" name="" id="" />
                    

                        <div className="selections">
                            <p className="titleSelections">Hansı işləri görürsünüz ? (maksimum 3 ədəd seçə bilərsiniz)</p>
                            <p className="buttons">
                                <button>Malyar</button>
                                <button>Santexnik</button>
                                <button>Elektrik</button>
                                <button>Qaynaqçı</button>
                                <button>Suvaqçı</button>
                                <button>Bənna</button>
                                <button>Dülgər</button>
                                <button>Malyar</button>
                                <button>Malyar</button>
                                <button>Malyar</button>
                                <button>Malyar</button>
                                <button>Malyar</button>
                            </p>
                        </div>
                        <input type="password" placeholder="Şifrə"/>
                        <input type="password" placeholder="Təkrar şifrə" />

                    </form>
                    </div>
                </div>
        </div>
    )
}

export default MasterRegistration
