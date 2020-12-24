import React from 'react'
import ReplyComment from './ReplyComment'
import SingleComment from './SingleComment'
import "../assets/css/componentsCss/comments.css"
function Comments(props) {
    const mainComment = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type book.", "mainComment2", "mainComment3"]
    const nameMainComment = ["Nasir", "Vusal", "Davud"]
    const namesubComment = [["NasirSub1" ,"Vusalsub1" ,"Davudsub1"] , ["Nasirsub2" ,"Vusalsub2"] , ["Davudsub3"]]
    const subComments = [["sub1" , "sub12" , "sub13"]  ,   ["sub21", "sub22"]   ,   ["sub31"]]
    return (
        <div className="commentsCont">

            <p className="titleComments">Rəylər {props.id}</p>
            {nameMainComment.map(( name,index )=> <SingleComment  nameMainComment={name} mainComment={mainComment[index]} namesubComment={[namesubComment[index]]} subComment={[subComments[index]]} />)}
            
        </div>
    )
}

export default Comments
