import React from 'react'
import ReplyComment from './ReplyComment'

function SingleComment() {
    return (
        <div>
            <div>
                <img src="" alt="" /> 
                <div> 
                        <p>Anar Babayev <img src="" alt="" /> 13.03.2020</p>  
                        <hr/> 
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type book.</p>
                        <div></div>
                        <button></button>
                </div>
            </div>
            <ReplyComment/>
        </div>
    )
}

export default SingleComment
