import React from 'react'
import selectedAd from '../assets/images/component/element/selectedAdJpg.jpg';
import "../assets/css/componentsCss/frame.css"
function Frame(props) {


    const subButtonHandler = (nmb) => {
        for (let i = 1; i <= 5; i++) {
            document?.getElementById("btn" + i)?.setAttribute("style", "background-color:white")
            document?.getElementById("btn" + nmb)?.setAttribute("style", "background-color:#F97922")
        }
        if (nmb === 1) {
            document.getElementById("imgCont").style.background =  `url(${props.mainImg})`
        }
        else if(nmb === 2)
        {
            document.getElementById("imgCont").style.background =  `url(${props.image2})`
        }
        else if(nmb === 3)
        {
            document.getElementById("imgCont").style.background =  `url(${props.image3})`
        }
        else if(nmb === 4)
        {
            document.getElementById("imgCont").style.background =  `url(${props.image4})`
        }
        
    }
    const styleOverlay = {
        width: props.width,
        height: props.height,
        background: props.color,
    }
    const styleImg = {

    }

    const overlayForİmage = {
        backgroundColor: "white",
        backgroundImage: `url(${props.mainImg}) `,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center !important',
        backgroundSize: 'cover',
        width: props.widthImg,
        height: props.heightImg,
    }
    const image1 = {
        backgroundColor: "white",
        backgroundImage: `url(${props.mainImg})`,
        backgroundRepeat: 'norepeat !important',
        backgroundPosition: 'top center',
        backgroundSize: 'cover !important',
    }
    const image2 = {
        backgroundColor: "white",
        backgroundImage:`url(${props.image2 !== null && props?.image2 })`,
        backgroundRepeat: 'norepeat !important',
        backgroundPosition: 'top center',
        backgroundSize: 'cover !important',
    }
    const image3 = {
        backgroundColor: "white",
        backgroundImage:`url(${props.image3 !== null && props?.image3})`,
        backgroundRepeat: 'norepeat !important',
        backgroundPosition: 'top center',
        backgroundSize: 'cover !important',
    }
    const image4 = {
        backgroundColor: "white",
        backgroundImage:`url(${props.image4 !== null && props?.image4})`,
        backgroundRepeat: 'norepeat !important',
        backgroundPosition: 'top center',
        backgroundSize: 'cover !important',
    }
    console.log(props.image2)
    return (
        <div className="FrameCont">
            <img alt="" />
            <div className="frame" >
                <div className="overlay" style={styleOverlay}></div>
                <div className="imgAndBullet">
                    <div id="imgCont" className="imgCont" style={overlayForİmage} ></div>
                    { 
                    props.noBullet && 
                    props.mainImg !== 0 && ( <div className="bullets">
                        { props.image2  !== null && <button  id="btn1"  onClick={() => subButtonHandler(1)}></button>  }
                        { props.image2 !== null && <button  id="btn2"  onClick={() => subButtonHandler(2)}></button>  }
                        { props.image3 !== null  && <button  id="btn3"  onClick={() => subButtonHandler(3)}></button>  }
                        { props.image4 !== null &&  <button  id="btn4"  onClick={() => subButtonHandler(4)}></button>  }
                    </div>)}
                </div>
            </div>
            { props.noBullet && 
                props.mainImg !== 0 && (<div className="subImgCont">
                { props.image2  !== null &&  <button id="subBtn1"  onClick={() => subButtonHandler(1)}> <div  style={image1} className="imgCont imgContDiv"> </div></button>}
                { props.image2 !== null  &&  <button id="subBtn2"  onClick={() => subButtonHandler(2)}> <div  style={image2} className="imgCont imgContDiv"> </div></button>}
                { props.image3 !== null  &&  <button id="subBtn3"  onClick={() => subButtonHandler(3)}><div  style={image3} className="imgCont imgContDiv"> </div></button>}
                { props.image4 !== null  &&  <button id="subBtn4"  onClick={() => subButtonHandler(4)}><div  style={image4} className="imgCont imgContDiv"> </div></button>}
                </div>)
            }
        </div>
    )
}

export default Frame
