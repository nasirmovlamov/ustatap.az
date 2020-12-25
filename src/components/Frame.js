import React from 'react'
import selectedAd from '../assets/images/component/element/selectedAdJpg.jpg';
import "../assets/css/componentsCss/frame.css"
function Frame(props) {

    
    const subButtonHandler = (nmb) => {
        for (let i = 1; i <= 5; i++) {
            document.getElementById("btn" + i).setAttribute("style", "background-color:white") 
            document.getElementById("btn" + nmb).setAttribute("style", "background-color:#F97922") 
        }
      document.getElementById("mainImg").src = (props.image[nmb-1])
    }
    const styleOverlay = {
        width: props.width,
        height: props.height,
        background: props.color,
    }
    const overlayForİmage = {
        backgroundColor: "white",
        height:"282px",
        width:"458px",
        background:props.overlayImg,
    }
    return (
        <div className="FrameCont">
            <img  alt=""/>
            <div className="frame" >
                <div className="overlay" style={styleOverlay}></div>
                <div className="imgAndBullet">
                    <div  className="imgCont"  style={overlayForİmage}><img  alt="" src={props.mainImg} id="mainImg"/></div>
                    {props.image !== 0 && ( <div className="bullets">
                        <button  id="btn1"  onClick={() => subButtonHandler(1)}></button>  
                        <button  id="btn2"  onClick={() => subButtonHandler(2)}></button>  
                        <button  id="btn3"  onClick={() => subButtonHandler(3)}></button>  
                        <button  id="btn4"  onClick={() => subButtonHandler(4)}></button>  
                        <button  id="btn5"  onClick={() => subButtonHandler(5)}></button>
                    </div>)}
                </div>
            </div>
            {props.image !== 0 && (<div className="subImgCont">
                <button id="subBtn1"  onClick={() => subButtonHandler(1)}><img src={props.image[0]} alt="" className="imgCont"/></button>
                <button id="subBtn2"  onClick={() => subButtonHandler(2)}><img src={props.image[1]} alt="" className="imgCont"/></button>
                <button id="subBtn3"  onClick={() => subButtonHandler(3)}><img src={props.image[2]} alt="" className="imgCont"/></button>
                <button id="subBtn4"  onClick={() => subButtonHandler(4)}><img src={props.image[3]} alt="" className="imgCont"/></button>
                <button id="subBtn5"  onClick={() => subButtonHandler(5)}><img src={props.image[4]} alt="" className="imgCont"/></button>
            </div>)}
        </div>
    )
}

export default Frame
