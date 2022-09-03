import React from 'react';
import './Post.css';
import { BsHandThumbsUp, BsEmojiSmileFill } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";
import { ImLink } from "react-icons/im";
import { FaPaperPlane } from "react-icons/fa";
import { AiOutlineGif } from "react-icons/ai";
import avater from '../../../Images/avater.png';

function SocialComponents() {
    return (
        <div>
            <div className="post-options">
                <div className="post-option">
                    <BsHandThumbsUp />
                    <p>Like</p>
                </div>
                <div className="post-option">
                    <BiComment />
                    <p>Comment</p>
                </div>
                <div className="post-option">
                    <IoMdShareAlt />
                    <p>Share</p>
                </div>
            </div>
            <p className='text-secondary px-2'>View more comments</p>
            <div className='comment-section d-flex justify-content-between row'>
                <div className='ms-3 col-md-5 col-sm-6'>
                    <img src={avater} alt="user icon" className='post-user-icon me-3' />
                    <BsEmojiSmileFill className='me-1'/><ImLink className='me-1'/><AiOutlineGif />
                </div>
                <div className='comment-box col-md-6 col-sm-6 '>
                    <input
                        className='comment-input'
                        type="text"
                        placeholder='Write a comment..'/>
                    {/* <FaPaperPlane /> */}
                </div>
            </div>
        </div>
    )
}

export default SocialComponents;