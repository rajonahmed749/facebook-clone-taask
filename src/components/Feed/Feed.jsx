import React from 'react'
import StoryReel from './StoryReel/StoryReel';
import './Feed.css'
import CreatePost from './CreatePost/CreatePost';

function Feed() {
  return (
    <div className='container feed' >
      <StoryReel />
      <CreatePost />
      {/* Messege sender */}
    </div>
  )
}

export default Feed