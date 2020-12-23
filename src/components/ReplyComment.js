import React from 'react'
import "../assets/css/componentsCss/replyComment.css"
function ReplyComment(props) {
    return (
        props.namesubComment.map((name) => (<div className="replyCommentCont">
            <img src="" alt="" /> 
            <div> 
                    <p>{name}<img src="" alt="" /> 25.03.2020  <div><img src="" alt=""/> <img src="" alt=""/> <img src="" alt=""/> <img src="" alt=""/> <img src="" alt=""/></div> </p>
                    <hr/> 
                    <p>{props.comment}</p>
                    <div></div>
                    <button></button>
            </div>
        </div>))
    )
}

export default ReplyComment
