import React from 'react'
import "../../assets/css/PagesCss/error404.css"
import man from "../../assets/images/page/background/man404.svg"
import Button from '../../components/Button'
function Page404() {
    return (
        <div className="eror404Cont">
            <img src={man} alt="" />
            <div className="textSide">
                <p className="title">Səhifə Tapılmadı</p>
                <Button  name="Əsas səhfəyə keç"/>
            </div>
        </div>
    )
}

export default Page404
