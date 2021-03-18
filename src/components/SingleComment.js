import React,{useRef} from 'react'
import Button from '../components/Button'

import ReplyComment from './ReplyComment'
import "../assets/css/componentsCss/singleComment.css"
import defaultCommentAvatar from "../assets/images/component/element/defaultCommentAvatar.jpg"
import calendar from "../assets/images/component/element/calendarForComment.svg"
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import {Formik , Form , Field, ErrorMessage} from "formik"
import * as Yup from "yup"
function SingleComment(props) {
    
    const imgHandler = {
        backgroundImage: `url(http://ustatap.testjed.me/${props.image})` ,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat'
    }
    const defaultimgHandler = {
        backgroundImage: `url(${defaultCommentAvatar})` ,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className="singleCommentCont">
            <div className="mainCommentCont"> 
                {props.image === null ? <div style={defaultimgHandler} className="profileMainImg" ></div> : <div style={imgHandler} className="profileMainImg" ></div>  }
                <div className="singleCommentAbout">
                    <p className="name">{props.nameMainComment} <span><img src={calendar} alt="" />{props.date}</span> </p>  
                    <hr className="lineForMain"/> 
                    <div className="mainComment"><p>{props.mainComment} </p></div>
                    
                </div>
            </div>
        </div>
    )
}

export default SingleComment
