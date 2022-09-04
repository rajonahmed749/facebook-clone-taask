import React from 'react';
import StoryReel from './StoryReel/StoryReel';
import './Feed.css';
import CreatePost from './CreatePost/CreatePost';
import NoPost from './NoPost/NoPost';
import Post from './Post/Post';
import PostOption from './PostOption/PostOption';
import PullPost from './PullPost/PullPost';

function Feed() {
  return (
    <div className='container feed' >
      <StoryReel />
      <CreatePost />
      <PostOption />
      <PullPost />
      <Post />
      <NoPost />
    </div>
  )
}

export default Feed