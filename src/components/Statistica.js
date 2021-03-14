import React from 'react'
import "../assets/css/componentsCss/statistica.css"
import phoneWhite from "../assets/images/component/element/phoneWhite.svg"
import mailWhite from "../assets/images/component/element/mailWhite.svg"
import www from "../assets/images/component/element/wwwWhite.svg"
import homePhoneWhite from "../assets/images/component/element/homePhoneWhite.svg"
import mainLogo from "../assets/images/component/element/mainLogo.svg"
import { useMediaQuery } from '@material-ui/core'
function Statistica() {
    const gridItemMQ = useMediaQuery('(max-width:1170px)');

    return (
        <div className="statistica">
                <p className="title"> Statistika</p>
                <div className="gridCont1">
                    <p>Elanların sayı</p>
                    {gridItemMQ && <p>1547</p>}
                    <p>Ustaların sayı</p>
                    {gridItemMQ && <p>1547</p>}

                    <p>Şirkətlərin sayı</p>
                    {gridItemMQ && <p>1547</p>}

                    <p>Günlük Ziyarətçi Sayı</p>
                    {gridItemMQ && <p>1547</p>}

                    {
                    !gridItemMQ &&
                        <>
                        <p>1547</p>
                        <p>754</p>
                        <p>129</p>
                        <p>754</p>
                        </>
                    }
                </div>
                
                <hr className="underLine"/>
                
                <div className="gridCont2">
                    <p><img className="whiteImg1" src={phoneWhite} alt=""/> <span> +994 55 XXX XX XX</span>  </p>
                    <p><img className="whiteImg2" src={mailWhite} alt=""/> <span> info@ustatap.net</span> </p>
                    <p><img className="whiteImg3" src={homePhoneWhite} alt=""/> <span> +994 70 XXX XX XX</span>  </p>
                    <p><img className="whiteImg4" src={www} alt=""/> <span> www.ustatap.net</span> </p>
                </div>
                <img className="mainLogo" src={mainLogo} alt=""/>
        </div>
    )
}

export default Statistica
