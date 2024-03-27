import React from 'react'
import './MainContent.css';
import StoriesBar from './StoriesBar';
import Content from './Content';

const MainContent = () => {
  return (
    <div>
        <div>
            <StoriesBar />
            <Content />
        </div>
    </div>
  )
}

export default MainContent