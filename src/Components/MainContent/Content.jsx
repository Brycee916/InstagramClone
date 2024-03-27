import React, {useEffect, useState} from 'react'
import './Content.css';
import Post from '../Post/Post';
// import profilePic from '../../images/pp1.png';
import postimage from "../../images/post.jpg";

const Content = () => {
  const [postArray, setPostArray] = useState([]);

  useEffect(() => {
    getPost();
  }, [])

  const getPost = () => {//call api to get a post
    let data = [
      {
        "postId": "123456",
        "userName": "anindya",
        "postImageURL":"https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
        "timestamp":"12345",
        "Likes": "1234"
      },
      {
        "postId": "123456",
        "userName": "anindya",
        "postImageURL":"https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
        "timestamp":"12345",
        "Likes": "1234"
      },
      {
        "postId": "123456",
        "userName": "anindya",
        "postImageURL":"https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
        "timestamp":"12345",
        "Likes": "1234"
      }
    ];
    setPostArray(data);
  }

  return (
    <div>
      {
        postArray.map((item) => (
          <Post id={item.postId} username={item.userName} profilePic={item.postImageURL} postimage={postimage} numLikes={item.Likes}/>
        ))
      }
    </div>
  )
}

export default Content