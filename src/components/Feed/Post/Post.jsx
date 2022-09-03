import React from 'react';
import './Post.css';
import avater from '../../../Images/avater.png';
import { HiOutlineSupport } from "react-icons/hi";
import { BsFillBookmarkFill, BsFlagFill, BsLink45Deg, BsHandThumbsUpFill, BsFillHeartFill } from "react-icons/bs";
import { MdMode, MdDelete } from "react-icons/md";
import Dropdown from 'react-bootstrap/Dropdown';
import couplePic from '../../../Images/couple.jpg';
import user2 from '../../../Images/user-2.jpg';
import user3 from '../../../Images/user.png'
import postPhoto1 from '../../../Images/pic-1.png';
import postPhoto2 from '../../../Images/pic-5.jpg';
import SocialComponents from './SocialComponents';

function Post() {
    const FakeData = [
        {
            userName: 'Rajon Ahmed',
            time: '24',
            UserImg: avater,
            postImg: couplePic,
            post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, minus. Dolor, quam sint nobis tempora cumque odit! Ducimus, distinctio natus.',
            likes: 'you and 45 others'
        },
        {
            userName: 'Mizanur Rahman Azahari',
            time: '24',
            UserImg: user2,
            postImg: postPhoto1,
            post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, minus. Dolor, quam sint nobis tempora cumque odit! Ducimus, distinctio natus.',
            likes: 'you and 45 others'
        },
        {
            userName: 'Abul Hakim',
            time: '23',
            UserImg: user2,
            postImg: null,
            post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, minus. Dolor, quam sint nobis tempora cumque odit! Ducimus, distinctio natus.',
            likes: 'you and 745 others'
        },
        {
            userName: 'Cool Boy',
            time: '3',
            UserImg: avater,
            postImg: null,
            post: 'Lorem ipsum dolor sit amet, consectetur',
            likes: 'you and 7 others'
        },
        {
            userName: 'Nazmul Hassan',
            time: '6',
            UserImg: avater,
            postImg: postPhoto2,
            post: null,
            likes: 'you and 97 others'
        },
        {
            userName: 'Abid Hassan',
            time: '12',
            UserImg: avater,
            postImg: null,
            post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, minus. Dolor, quam sint nobis tempora cumque odit! Ducimus, distinctio natus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, minus. Dolor, quam sint nobis tempora cumque odit! Ducimus, distinctio natus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, minus. Dolor, quam sint nobis tempora cumque odit! Ducimus, distinctio natus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, minus. Dolor, quam sint nobis tempora cumque odit! Ducimus, distinctio natus.',
            likes: 'you and 97 others'
        },
        {
            userName: 'Cool Boy',
            time: '3',
            UserImg: user3,
            postImg: null,
            post: 'Thae Fact that we are letting love die sickness me!!'
        },
    ]
    return (
        <div className='container'>
            {
                FakeData.map((post) => {
                    return (
                        <div className='container post my-2'>
                            <div className="post-top d-flex justify-content-between">
                                <div className='post-top-info p-2'>
                                    <img src={post.UserImg} alt="avater" className='post-user img-fluid' />
                                    <div className='mt-1'>
                                        <h6 className='ps-2'>{post.userName}</h6>
                                        <p className='text-secondary ps-2'>{post.time} days ago <HiOutlineSupport /></p>
                                    </div>
                                </div>
                                <div>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="none" id="dropdown-split-basic" />

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1"><BsFillBookmarkFill /> Saved Post</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2"><BsFlagFill /> Report Post</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2"><MdMode /> Edit Post</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2"><MdDelete /> Delete Post</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item href="#/action-3"><BsLink45Deg /> Open post in the new tab</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="post-middle">
                                {
                                    post.post && <p className='p-2'>{post.post}</p>
                                }
                                {
                                    post.postImg && <img src={post.postImg} alt="images" className='img-fluid w-100' />
                                }
                            </div>
                            {
                                post.likes &&
                                <div className='d-flex my-2 px-2'>
                                    <div><BsHandThumbsUpFill color='blue' /><BsFillHeartFill color='red' /></div>
                                    <p style={{ paddingLeft: '5px' }}><u>{post.likes}</u></p>
                                </div>
                            }
                            <SocialComponents />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Post;