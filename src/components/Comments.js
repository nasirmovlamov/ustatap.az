import React from 'react'
import ReplyComment from './ReplyComment'
import SingleComment from './SingleComment'
import "../assets/css/componentsCss/comments.css"
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import {Formik , Form , Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import { useRef } from 'react'
function Comments(props) {
    const inputRef = useRef(null)
    const clickHandler = () => {
        document.getElementById(`inputMain${props.id}`).className = "inputClick";
        document.getElementById(`submitBtn${props.id}`).className = "submitBtnShow";
    }
    console.log(props.id);
    const [UserData, setUserData] = useState(0)

    useEffect(() => {
        if (UserData?.user?.id === undefined) 
        {
            setUserData(JSON.parse(localStorage.getItem('LoginUserData')))
        }
    })
    const [CommentsUser, setCommentsUser] = useState([0])
    useEffect(() => {
            axios.post("https://ustatap.net/public/api/getcomments" , {elan_id: props.id}) 
            .then((res) =>  setCommentsUser(res.data) )
    }, [])
    
    const [commentText, setcommentText] = useState("")
    const validationSchema = Yup.object({
        comment: Yup.string().required('').max(500 ,"Şərh limitini keçmə ay eşşək 🦓!"),
    })
    const [Error, setError] = useState(false)
    const onSubmit =  (values) => {
        axios.post("https://ustatap.net/public/api/postcomment" , {user_id:UserData?.user?.id, elan_id:props.id, text:values.comment}) 
        .then((res) =>  (res.status === 200 && window.location.reload() ))
    }

    const initialValues = {
        comment:'',
    }
    return (
        <div className="commentsCont">
            <p className="titleComments">Rəylər </p>
            {CommentsUser.map(( name,index )=> <SingleComment image={name.user_image}  nameMainComment={name.user_name} id={name.id} mainComment={name.text} subComments={name.subcomments} date={name?.created_at?.slice(0,10)}/>)}
            <div className="replyForm">
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnChange={true} validateOnBlur={true}>
                    <Form action="" method="post" >
                        <Field  as="textarea"  name="comment" ref={inputRef} id={`inputMain${props.id}`} className="input"/>
                        <ErrorMessage name="comment"/>
                        <button className="button submitBtn" id={`submitBtn${props.id}`} type="submit">Göndər</button>
                    </Form> 
                </Formik>
                <button className="button" type="button" onClick={() => clickHandler()}>Rəy bildir</button>
            </div>
        </div>
    )
}

export default Comments
