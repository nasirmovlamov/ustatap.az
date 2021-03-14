import React from 'react'
import "../assets/css/componentsCss/replyComment.css"
import humanImg from "../assets/images/component/element/commentMainHuman.svg"
import calendar from "../assets/images/component/element/calendarForComment.svg"

function ReplyComment(props) {
    const avatar = {
        backgroundImage: `url(${humanImg})`
    }
    return (
        props.subComment.map((name1 ,index) => 
        (
            <div className="replyCommentCont">
                <div className="avatar" style={avatar}></div>
                <div  className="replyCommentAbout"> 
                        <p className="name">{props.namesubComment.map(name2 => name2[index] )}<img src={calendar} alt="" /> 25.03.2020 </p>
                        <hr className="lineForMain"/> 
                        <p className="mainComment"> {name1}</p>
                </div>
            </div>
        )))
}

export default ReplyComment
