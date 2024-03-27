import React from 'react'
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
import { CgProfile } from "react-icons/cg";
import { FaThreads } from "react-icons/fa6";
import { RxDragHandleHorizontal } from "react-icons/rx";


const NavbarLeft = () => {
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
        <nav className="navbar navbar-light bg-light">
          <div className="navbar_home_section">
            <CgSearch size={28} style={{marginLeft: -5, marginRight: 7}}/>
            {/* <img src={HomeIcon} alt="pic" style={{
              width: '30px',
              height: '25px',
              objectFit: 'cover',
              objectPosition: 'top left',
              transform: 'scale(1.05)',
              filter: 'contrast(10000)'
            }} /> */}
            <a className="navbar_home_word" href="/">Search</a>
          </div>
        </nav>
        <nav className="navbar navbar-light bg-light">
          <div className="navbar_home_section">
            <MdOutlineExplore size={28} style={{marginLeft: -4, marginRight: 7}}/>
            {/* <img src={HomeIcon} alt="pic" style={{
              width: '30px',
              height: '25px',
              objectFit: 'cover',
              objectPosition: 'top left',
              transform: 'scale(1.05)',
              filter: 'contrast(10000)'
            }} /> */}
            <a className="navbar_home_word" href="/">Explore</a>
          </div>
        </nav>
        <nav className="navbar navbar-light bg-light">
          <div className="navbar_home_section">
            <ImFilm size={28} style={{marginLeft: -4, marginRight: 7}}/>
            {/* <img src={HomeIcon} alt="pic" style={{
              width: '30px',
              height: '25px',
              objectFit: 'cover',
              objectPosition: 'top left',
              transform: 'scale(1.05)',
              filter: 'contrast(10000)'
            }} /> */}
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
        <nav className="navbar navbar-light bg-light">
          <div className="navbar_home_section">
            <FiPlusSquare size={28} style={{marginLeft: -4, marginRight: 7}}/>
            {/* <img src={HomeIcon} alt="pic" style={{
              width: '30px',
              height: '25px',
              objectFit: 'cover',
              objectPosition: 'top left',
              transform: 'scale(1.05)',
              filter: 'contrast(10000)'
            }} /> */}
            <a className="navbar_home_word" href="/">Create</a>
          </div>
        </nav>
        <nav className="navbar navbar-light bg-light">
          <div className="navbar_home_section"  style={{ display: 'flex', alignItems: 'center'}}>
            <CgProfile size={28} style={{marginLeft: -4, marginRight: 7}}/>
            {/* <img src={HomeIcon} alt="pic" style={{
              width: '30px',
              height: '25px',
              objectFit: 'cover',
              objectPosition: 'top left',
              transform: 'scale(1.05)',
              filter: 'contrast(10000)'
            }} /> */}
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