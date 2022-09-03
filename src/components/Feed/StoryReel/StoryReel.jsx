import React from 'react'
import Story from '../Story/Story';
import img1 from '../../../Images/couple.jpg';
import img2 from '../../../Images/bike.jpg';
import user from '../../../Images/user.png';
import user2 from '../../../Images/user-1.jpg';
import user3 from '../../../Images/user-2.jpg';
import './StoryReel.css'


function StoryReel() {
    return (
        <div className='storyReel'>
            <Story image={img1} profileSrc={user} title='Rajon ahmed'/>
            <Story image={img2} profileSrc={user2} title='Mr. Suriya'/>
            <Story image={img1} profileSrc={user3} title='Max Smith'/>

        </div>
    )
}

export default StoryReel