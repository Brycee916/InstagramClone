import React, { useEffect, useState } from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import like from "../../images/love.svg";
import comment from "../../images/comment.svg";
import share from "../../images/share.svg";

const Post = (props) => {
    const { username, profilePic, postimage, numLikes } = props;
    const [commentList, setCommentList] = useState([]);

    useEffect(() => {
        getComments();
    }, [])

    const getComments = () => {
        let data=[
            {
                "username": "ASD",
                "commentId": "1234",
                "timestamp": "123456",
                "description": "Comment 1"
            },
            {
                "username": "VDD",
                "commentId": "1234",
                "timestamp": "123456",
                "description": "Comment 2"
            },
            {
                "username": "JJG",
                "commentId": "1234",
                "timestamp": "123456",
                "description": "Comment 3"
            }
        ]
        setCommentList(data);
    }

  return (
    <div className="posts__container">
        <div className='post__container'>
            {/* Header */}
            <div className='post__header'>
                <Avatar className='post__user_image' src={profilePic} />
                <div className='post__username'>{username}</div>
            </div>

            {/* Image */}
            <div>
                <img src={postimage} alt='pic' className='post__image'/>
            </div>

            {/* Analytics */}
            <div>
                {/* Like comment share buttons */}
                <div>
                    <img style={{"marginLeft":"0px"}} src={like} alt='like button' className="post_reactimage" />
                    <img src={comment} alt='comment button' className="post_reactimage" />
                    <img src={share} alt='share button' className="post_reactimage" />
                </div>
                {/* Number of likes*/}
                <div style={{"fontWeight":"500"}}>
                    {numLikes} likes
                </div>
            </div>

            {/* Comment Section */}
            <div>
                {
                    commentList.map((item, index) => (
                        <div className='post_comment'>{item.username}: {item.description}</div>
                    ))
                }
                <input className='post_commentbox'
                    text="text"
                    placeholder='Add a comment...'
                />
            </div>

        </div>
    </div>

  )
}

export default Post