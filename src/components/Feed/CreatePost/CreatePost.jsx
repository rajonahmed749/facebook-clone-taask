import React from 'react';
import avater from '../../../Images/avater.png';
import { CgEditContrast } from "react-icons/cg";
import { BsCameraFill } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import './CreatePost.css'

function CreatePost() {
    return (
        <div className='container createPost my-4'>
            {/* Top section of create a post */}
            <div className="createPost-top">
                <img src={avater} alt="avater" className='create-user' />
                <input
                    type="text"
                    placeholder='Create a New Post'
                    className='createPost-input'
                />
            </div>
            {/* Bottom section of create a post */}
            <div className="createPost-bottom row">
                <div className="createPost-options col-md-3">
                    <CgEditContrast />
                    <h6 style={{ paddingTop: '5px' }}> Background </h6>
                </div>
                <div className="createPost-options col-md-3">
                    <BsCameraFill />
                    <h6 style={{ paddingTop: '5px' }}> Photo/Video</h6>
                </div>
                <div className="createPost-options col-md-3">
                    <BsEmojiSmile />
                    <h6 style={{ paddingTop: '5px' }}> Feeling/Activity</h6>
                </div>
            </div>
        </div>
    )
}

export default CreatePost