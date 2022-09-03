import React from 'react';
import './PullPost.css';
import user from '../../../Images/avater.png';
import Dropdown from 'react-bootstrap/Dropdown';
import { HiOutlineSupport } from "react-icons/hi";
import { BsFillBookmarkFill, BsFlagFill, BsLink45Deg, BsHandThumbsUpFill, BsFillHeartFill } from "react-icons/bs";
import { MdMode, MdDelete } from "react-icons/md";
import PullOption from './PullOption';
import SocialComponents from '../Post/SocialComponents';

function PullPost() {
    return (
        <div className='container pull-post'>
            <div className="post-top d-flex justify-content-between">
                <div className='post-top-info p-2'>
                    <img src={user} alt="avater" className='post-user img-fluid' />
                    <div className='mt-1'>
                        <h6 className='ps-2'>Adnan Chowdhury</h6>
                        <p className='text-secondary ps-2'>1 hour ago <HiOutlineSupport /></p>
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
            {/* Pull body */}
            <div className='mb-3'>
                <p className='text-secondary'>Your favourite game</p>
                <PullOption user='you' sports='Football'/>
                <PullOption user='you' sports='Cricket'/>
                <PullOption user='you' sports='Badminton'/>
            </div>
            <SocialComponents/>
        </div>
    )
}

export default PullPost