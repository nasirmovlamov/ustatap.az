import React,{useRef} from 'react'
import Button from '../components/Button'

import ReplyComment from './ReplyComment'
import "../assets/css/componentsCss/singleComment.css"
import mainCommentImage from "../assets/images/component/element/commentMainHuman.svg"
import calendar from "../assets/images/component/element/calendarForComment.svg"
function SingleComment(props) {
    const inputRef = useRef(null)
    
    const clickHandler = () => {
        document.getElementById(`inputMain${props.nameMainComment}`).className = "inputClick";
    }
    return (
        <div className="singleCommentCont">
            <div className="mainCommentCont"> 
                <img src={mainCommentImage} alt="" className="profileMainImg" /> 
                <div className="singleCommentAbout">
                    <p className="name">{props.nameMainComment} <span><img src={calendar} alt="" /> 13.03.2020</span> </p>  
                    <hr className="lineForMain"/> 
                    <div className="mainComment"><p>{props.mainComment} </p></div>
                    <div className="replyForm"><form><textarea ref={inputRef} id={`inputMain${props.nameMainComment}`} className="input"/></form> <button onClick={() => clickHandler()}>Cavabla</button></div>
                </div>
            </div>
            {props.subComment.map((comment,index) => <ReplyComment  namesubComment={props.namesubComment.map(name => name)} subComment={comment}/>)}
        </div>
    )
}

export default SingleComment
