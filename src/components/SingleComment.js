import React from 'react'
import ReplyComment from './ReplyComment'
import "../assets/css/componentsCss/singleComment.css"
function SingleComment(props) {
    return (
        <div className="singleCommentCont">
            <div>
                <img src="" alt="" /> 
                <div> 
                        <p>{props.nameMainComment} <img src="" alt="" /> 13.03.2020</p>  
                        <hr/> 
                        <p></p>
                        <div>{props.mainComment}</div>
                        <button></button>
                </div>
            </div>
            {props.namesubComment.map(name=><ReplyComment  namesubComment={name}/>)}

        </div>
    )
}

export default SingleComment
