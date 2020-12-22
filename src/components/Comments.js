import React from 'react'

function Comments() {
    const singleComment = ["Bruce", "Clark", "Nasir"]
    const subComments = {comment1Reply:["salam1" , "necesen1" , "nevarneyox1"],comment2Reply:["salam2", "nevarneyox2"],comment3Reply:["salam3"]}
    console.log(subComments.comment1Reply)
    return (
        <div>

            <p>Rəylər</p>


            <div>
                <div>
                    <img src="" alt="" /> 
                    <div> 
                        <p>
                            Anar Babayev <img src="" alt="" /> 13.03.2020</p>  
                            <hr/> 
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type book.
                            <div></div>
                            <button></button>
                        </p> 
                    </div>
                </div>
                <div>
                    <img src="" alt="" /> 
                    <div> 
                        <p>
                            Anar Abbasov <img src="" alt="" /> 25.03.2020</p>  
                            <hr/> 
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type book.
                            <div></div>
                            <button></button>
                        </p> 
                    </div>
                </div>
            </div>















        </div>
    )
}

export default Comments
