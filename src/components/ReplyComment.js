import React from 'react'
import "../assets/css/componentsCss/replyComment.css"
import calendar from "../assets/images/component/element/calendarForComment.svg"

function ReplyComment(props) {
    
    return (
            <div className="replyCommentCont">
                <div  className="replyCommentAbout"> 
                        <p className="name">{props.namesubComment}<img src={calendar} alt="" /> {props.date} </p>
                        <hr className="lineForMain"/> 
                        <p className="mainComment"> {props.textsubComment}</p>
                </div>
            </div>
    )
}

export default ReplyComment
