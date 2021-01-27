import React, {useState , useRef} from 'react'
import "../assets/css/componentsCss/searchBox.css"
import drpLogo1 from "../assets/images/component/element/drpLogo1.svg" 
import drpLogo2 from "../assets/images/component/element/drpLogo2.svg" 
import drpLogo3 from "../assets/images/component/element/drpLogo3.svg" 
import lupa from "../assets/images/component/element/lupa.svg" 

import Button from './Button';

function SearchBox() {
    const [checker, setchecker] = useState(0)
    const btn1 = useRef(null)
    const focusHandler = (dropbtn ) => {
        
        if (dropbtn === 1)
        {
            document.getElementById("drp1").setAttribute("style" , "display: block")
        }
        else if (dropbtn === 2)
        {
            document.getElementById("drp2").setAttribute("style" , "display: block")
        }
        else if (dropbtn === 3)
        {
            document.getElementById("drp3").setAttribute("style" , "display: block")
        }
        else 
        {

        }
    }  
    const blurHandler = (dropbtn ) => {
        
        if (dropbtn === 1 )
        {
            document.getElementById("drp1").setAttribute("style" , "display: none")
        }
        else if (dropbtn === 2)
        {
            document.getElementById("drp2").setAttribute("style" , "display: none")
        }
        else if (dropbtn === 3 )
        {
            document.getElementById("drp3").setAttribute("style" , "display: none")
        }
        else {}
    }  
    return (
        <div className="searchbox">
            {/* title Subtitle */}
            <p className="title">UstaTap.net</p>
            <p className="subTitle">Usta Axtarışı Portalı</p>
            {/* Dropdown */}
            <form action="" method="post">>

                <div className="searchCont">  
                    <div className="dropdownCont">
                        <button class="dropdown " >
                            <button class="dropbtn dropbtn1" ref={btn1} onBlur={() => blurHandler(1)} onFocus={() => focusHandler(1 )}><img src={drpLogo1} alt="logo"/>   Elan / Usta / Şirkət</button>
                            <div class="dropdown-content dropdown1" id="drp1">
                                <a href="">Elan</a>
                                <a href="">Usta</a>
                                <a href="">Şirkət</a>
                            </div>
                        </button>

                        <div class="dropdown " >
                            <button class="dropbtn dropbtn2" onBlur={() => blurHandler(2)} onFocus={() => focusHandler(2)}><img src={drpLogo2} alt="logo"/> Bütün Şəhərlər</button>
                            <div class="dropdown-content dropdown2" id="drp2">
                                <a href="">Bakı</a>
                                <a href="">Quba</a>
                                <a href="">Gəncə</a>
                            </div>
                        </div>

                        <div  class="dropdown ">
                            <button class="dropbtn dropbtn3" onBlur={() => blurHandler(3)} onFocus={()=>focusHandler(3)}><img src={drpLogo3} alt="logo"/> Kategorya Seçin</button>
                            <div class="dropdown-content dropdown3" id="drp3">
                                <a href="">Elan</a>
                                <a href="">Usta</a>
                                <a href="">Şirkət</a>
                            </div>
                        </div>
                    </div>
                    <button class="searchButton"> <img src={lupa} />axtar</button>
                </div>
            </form>

            {/* Dropdown */}

        </div>  
    )
}

export default SearchBox
