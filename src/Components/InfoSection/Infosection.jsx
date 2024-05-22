import React from 'react';
import './Infosection.css';
import { Avatar } from '@mui/material';
import ProfilePic from '../../images/pp1.png';

const Infosection = () => {
  return (
    <div className='info__container'>
        <Avatar src={ProfilePic} className='info__image' style={{"height":"44px","width":"44px"}}/>
        <div>
            <div className='info__username'>Thephantom916</div>
            <div className='info__desc'>Aimbot Phantom</div>
        </div>
        <div className='info__switch'>
            Switch
        </div>
    </div>
  )
}

export default Infosection