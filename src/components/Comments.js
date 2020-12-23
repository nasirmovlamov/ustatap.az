import React from 'react'
import ReplyComment from './ReplyComment'
import SingleComment from './SingleComment'

function Comments() {
    const singleComment = ["Bruce", "Clark", "Nasir"]
    const subComments = {comment1Reply:["salam1" , "necesen1" , "nevarneyox1"],comment2Reply:["salam2", "nevarneyox2"],comment3Reply:["salam3"]}
    console.log(subComments.comment1Reply)
    const comments = []
    for(let i=1;i<=2;i++)
    {
        comments.push(
        <div>
            <SingleComment/>
            <ReplyComment/>
        </div>
        )
    }
    return (
        <div>

            <p>Rəylər</p>
            {comments}
            
        </div>
    )
}

export default Comments
