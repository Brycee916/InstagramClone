import React from 'react'
import './Home.css';
import Grid from '@mui/material/Grid';
import NavbarLeft from '../NavbarLeft/NavbarLeft'
import home from '../../images/home.svg';
import message from '../../images/message.svg';
import find from '../../images/find.svg';
import love from '../../images/love.svg';
import Avatar from '@mui/material/Avatar';
import profilePic from '../../images/pp1.png';
import MainContent from '../MainContent/MainContent';

const Home = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={3.8} >
          <NavbarLeft/>
        </Grid>
        <Grid item xs={4} >
          <div>
            <input text="text" placeholder="Search" className='home_searchbar'/>
          </div>
          <div>
            <MainContent />
          </div>
        </Grid>
        <Grid item xs={4.2} style={{"display": "flex"}} >
          <img className='navbar_img' alt="icon" src={home} width="25px" />
          <img className='navbar_img' alt="icon" src={message} width="25px" />
          <img className='navbar_img' alt="icon" src={find} width="25px" />
          <img className='navbar_img' alt="icon" src={love} width="25px" />
          <Avatar src={profilePic} alt="icon" className='navbar_img' style={{"maxWidth": "25px", "maxHeight": "25px"}}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home