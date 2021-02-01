import React from 'react'
import "../assets/css/componentsCss/topSelection.css"
import {Link,Route,Router,Switch} from "react-router-dom"
import MasterRegistration from '../containers/RegistrationPages/MasterRegistration'
import frame from "../assets/images/component/element/selectionFrame.svg"
import checked from "../assets/images/component/element/checkedSelection.svg"
function TopSelection(props) {
    const imageHandler = (value) => {
        if (value == 2 || value == 1 || value == 3 ) {
            return checked
        }
        else 
        {
            return frame
        }
    } 
    return (
            <div className="topSelection">
            
                <div className="regSelection">
                    <Link to="/istifadeci-qeydiyyati"><p><img src={imageHandler(props.value1)} width="28" alt=""/> Elan yerləşdirməkçün qeydiyyatdan keçin</p></Link>
                    <Link to="/usta-qeydiyyati"><p><img src={imageHandler(props.value2)} width="28" alt=""/>Usta kimi qeydiyyatdan keç</p></Link>
                    <Link to="/shirket-qeydiyyati"><p><img src={imageHandler(props.value3)} width="28" alt=""/>Şirkət kimi qeydiyyatdan keç</p></Link>
                </div>
                
            </div>
    )
}

export default TopSelection
