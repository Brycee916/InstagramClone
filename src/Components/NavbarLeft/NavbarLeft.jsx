import React, { useEffect, useState } from 'react'
import instagramLogo from '../../images/logoinsta.png';
import './NavbarLeft.css';
// import HomeIcon from '../../images/home.svg';
import { MdHomeFilled } from 'react-icons/md';
import { CgSearch } from "react-icons/cg";
import { MdOutlineExplore } from "react-icons/md";
import { ImFilm } from "react-icons/im";
import { FiPlusSquare } from "react-icons/fi";
import messageIcon from '../../images/message.svg';
import likeIcon from '../../images/love.svg';
// import { CgProfile } from "react-icons/cg";
import { FaThreads } from "react-icons/fa6";
import { RxDragHandleHorizontal } from "react-icons/rx";
import { Avatar } from '@mui/material';
import profilePic from '../../images/pp1.png';
import UploadIcon from '../../images/upload.png';

const Overlay = ({ onClose }) => {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="overlay-content">
        <div className='create_post'>Create new post</div>
        <div class="line"></div>
        <div>
          <img src={UploadIcon} className='upload__icon'/>
        </div>
      </div>
    </div>
  );
};

const NavbarLeft = () => {

  const [showCreateBox, setShowCreateBox] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);

  useEffect(() => {
    toggleSearchBox();
  },[]);

  const toggleSearchBox = () => {
    setShowSearchBox(!showSearchBox);
  };
  const handleCreateOpen = () => {
    setShowCreateBox(true);
  }
  const handleCreateClose = () => {
    setShowCreateBox(false);
  }

  return (
    <div className='navbar_main'>
      <div className='navbar_left_section'>
        <div className='navbar_top_left'>
          <img src={instagramLogo} alt='instagram' className='navbar_ig_logo'/>
        </div>
        <nav className="navbar navbar-light bg-light">
          <div className="navbar_home_section">
            <MdHomeFilled size={30} style={{marginLeft: -5, marginRight: 7}}/>
            {/* <img src={HomeIcon} alt="pic" style={{
              width: '30px',
              height: '25px',
              objectFit: 'cover',
              objectPosition: 'top left',
              transform: 'scale(1.05)',
              filter: 'contrast(10000)'
            }} /> */}
            <a className="navbar_home_word" href="/" >Home</a>
          </div>
        </nav>
        <nav>
          {showSearchBox ? 
            <div className="navbar_home_section" onClick={toggleSearchBox}>
              <CgSearch size={28} style={{marginLeft: -5, marginRight: 7}}/>
              <span className="navbar_home_word">Search</span>
            </div>
            :
            <div>
              <CgSearch size={28} style={{marginLeft: -2, marginRight: 7, marginTop: 15}} onClick={toggleSearchBox}/>
              <input text="text" placeholder="Search" className='home_searchbar'/>
            </div>
          }
        </nav>

        <nav className="navbar navbar-light bg-light">
          <div className="navbar_home_section">
            <MdOutlineExplore size={28} style={{marginLeft: -4, marginRight: 7}}/>
            <span className="navbar_home_word">Explore</span>
          </div>
        </nav>
        <nav className="navbar navbar-light bg-light">
          <div className="navbar_home_section">
            <ImFilm size={28} style={{marginLeft: -4, marginRight: 7}}/>
            <a className="navbar_home_word" href="/">Reels</a>
          </div>
        </nav>
        <nav className="navbar navbar-light bg-light">
          <div className="navbar_home_section">
            <img src={messageIcon} alt="pic" style={{
              width: '30px',
              height: '25px',
              objectFit: 'cover',
              objectPosition: 'top left',
              transform: 'scale(1.05)',
              filter: 'contrast(10000)'
            }} />
            <a className="navbar_home_word" href="/">Messages</a>
          </div>
        </nav>
        <nav className="navbar navbar-light bg-light">
          <div className="navbar_home_section">
            <img src={likeIcon} alt="pic" style={{
              width: '30px',
              height: '25px',
              objectFit: 'cover',
              objectPosition: 'top left',
              transform: 'scale(1.05)',
              filter: 'contrast(10000)'
            }} />
            <a className="navbar_home_word" href="/">Notifications</a>
          </div>
        </nav>

        <nav className="navbar navbar-light bg-light" >
            {showCreateBox ? 
              <div>
                <div>
                  <div className="navbar_home_section" onClick={handleCreateOpen}>
                    <FiPlusSquare size={28} style={{marginLeft: -4, marginRight: 7}}/>
                    <span className="navbar_home_word">Create</span>
                  </div>
                </div>
                  <Overlay onClose={handleCreateClose} />
              </div>
              :
              <div className="navbar_home_section" onClick={handleCreateOpen}>
                <FiPlusSquare size={28} style={{marginLeft: -4, marginRight: 7}}/>
                <span className="navbar_home_word">Create</span>
              </div>
            }
          
        </nav>

        <nav className="navbar navbar-light bg-light">
          <div className="navbar_home_section"  style={{ display: 'flex', alignItems: 'center'}}>
            <Avatar src={profilePic} alt="icon" className='navbar_img' style={{"maxWidth": "25px", "maxHeight": "25px", "marginLeft":"-3px"}}/>
            <a className="navbar_home_word" style={{marginLeft: 43}} href="/">Profile</a>
          </div>
        </nav>
        <nav className="navbar navbar-light bg-light">
          <div className="navbar_home_section"  style={{ display: 'flex', alignItems: 'center', marginTop: 300}}>
            <FaThreads size={28} style={{marginLeft: -4, marginRight: 7}}/>
            <a className="navbar_home_word" style={{marginLeft: 43}} href="/">Threads</a>
          </div>
        </nav>
        <nav className="navbar navbar-light bg-light">
          <div className="navbar_home_section"  style={{ display: 'flex', alignItems: 'center'}}>
            <RxDragHandleHorizontal size={28} style={{marginLeft: -4, marginRight: 7}}/>
            <a className="navbar_home_word" style={{marginLeft: 43}} href="/">Threads</a>
          </div>
        </nav>
      </div>
      
    </div>
  )
}

export default NavbarLeft