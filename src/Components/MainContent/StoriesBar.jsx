import React, {useEffect, useState} from 'react'
import './StoriesBar.css';
import Avatar from '@mui/material/Avatar';
import storyImg from '../../images/pp1.png';

const StoriesBar = () => {

    const [statusList, setStatusList] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        //dummy data
        let data=[
            {
                "username":"anindyna_bunny",
                "imageURL":"../../images/pp1.png"
            },
            {
                "username":"testing",
                "imageURL":"../../images/pp1.png"
            },
            {
                "username":"aabc",
                "imageURL":"../../images/pp1.png"
            },
            {
                "username":"qweret",
                "imageURL":"../../images/pp1.png"
            },
            {
                "username":"dfadf",
                "imageURL":"../../images/pp1.png"
            },
            {
                "username":"535hyhh",
                "imageURL":"../../images/pp1.png"
            },
            {
                "username":"kroel13",
                "imageURL":"../../images/pp1.png"
            },
            {
                "username":"otpp4t",
                "imageURL":"../../images/pp1.png"
            },
            {
                "username":"kroel13",
                "imageURL":"../../images/pp1.png"
            },
            {
                "username":"otpp4t",
                "imageURL":"../../images/pp1.png"
            }
        ];
        setStatusList(data);
    }

  return (
    <div>
        <div className="storiesbar_container">
            {
                statusList.map((item, index) => (
                    <div className='storiesbar_story'>
                        <Avatar className='storiesbar_img' src={storyImg}/>
                        <div className='storiesbar_username'>{item.username}</div>
                    </div>
                ))
            }

        </div>
    </div>
  )

}

export default StoriesBar