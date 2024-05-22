import React from 'react';
import './Suggestions.css';
import Avatar from '@mui/material/Avatar';
import storyImg from '../../images/pp1.png';

const Suggestions = () => {
  return (
    <div>
      <div>
        <div className='suggested_heading'>Suggested for you</div>
        <div className='info_container_container'>
          <div className='info__container_sugg'>
            <Avatar src={storyImg} className='info__image' style={{"height":"44px","width":"44px"}}/>
            <div>
              <div className='info__username_sugg'>RichYoung</div>
              <div className='info__desc_sugg'>Suggested for you</div>
            </div>
            <div className='info__switch_sugg'>
              Follow
            </div>
          </div>

          <div className='info__container_sugg'>
            <Avatar src={storyImg} className='info__image' style={{"height":"44px","width":"44px"}}/>
            <div>
              <div className='info__username_sugg'>RichYoung</div>
              <div className='info__desc_sugg'>Suggested for you</div>
            </div>
            <div className='info__switch_sugg'>
              Follow
            </div>
          </div>

          <div className='info__container_sugg'>
            <Avatar src={storyImg} className='info__image' style={{"height":"44px","width":"44px"}}/>
            <div>
              <div className='info__username_sugg'>RichYoung</div>
              <div className='info__desc_sugg'>Suggested for you</div>
            </div>
            <div className='info__switch_sugg'>
              Follow
            </div>
          </div>

          <div className='info__container_sugg'>
            <Avatar src={storyImg} className='info__image' style={{"height":"44px","width":"44px"}}/>
            <div>
              <div className='info__username_sugg'>RichYoung</div>
              <div className='info__desc_sugg'>Suggested for you</div>
            </div>
            <div className='info__switch_sugg'>
              Follow
            </div>
          </div>

          <div className='info__container_sugg'>
            <Avatar src={storyImg} className='info__image' style={{"height":"44px","width":"44px"}}/>
            <div>
              <div className='info__username_sugg'>RichYoung</div>
              <div className='info__desc_sugg'>Suggested for you</div>
            </div>
            <div className='info__switch_sugg'>
              Follow
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Suggestions