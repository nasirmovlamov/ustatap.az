import React from 'react'
import "../assets/css/componentsCss/replyComment.css"
import humanImg from "../assets/images/component/element/commentMainHuman.svg"
function ReplyComment(props) {

    return (
        props.subComment.map((name1 ,index) => 
        (
            <div className="replyCommentCont">
                <img src={humanImg} alt="" /> 
                <div> 
                        <p>{props.namesubComment.map(name2 => name2[index] )}<img src="" alt="" /> 25.03.2020  <div><img src="" alt=""/> <img src="" alt=""/> <img src="" alt=""/> <img src="" alt=""/> <img src="" alt=""/></div> </p>
                        <hr/> 
                        <p> {name1}</p>
                        <div></div>
                        <button></button>
                </div>
            </div>
        )))
}

export default ReplyComment
