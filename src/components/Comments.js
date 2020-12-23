import React from 'react'
import ReplyComment from './ReplyComment'
import SingleComment from './SingleComment'

function Comments() {
    const mainComment = ["mainComment1", "mainComment2", "mainComment3"]
    const nameMainComment = ["Nasir", "Vusal", "Davud"]
    const namesubComment = [["NasirSub1" ,"Vusalsub1" ,"Davudsub1"] , ["Nasirsub2" ,"Vusalsub2"] , ["Davudsub3"]]
    const subComments = [["sub1" , "sub12" , "sub13"]  ,   ["sub21", "sub22"]   ,   ["sub31"]]
    return (
        <div>

            <p>Rəylər</p>
            {nameMainComment.map(( name,index )=> <SingleComment  nameMainComment={name} mainComment={mainComment[index]} namesubComment={[namesubComment[index]]}/>)}
            
        </div>
    )
}

export default Comments
