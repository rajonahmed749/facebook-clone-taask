import React from 'react';
import './Story.css';

function Story(props) {
    return (
        <div style={{ backgroundImage: `url(${props.image})` }} className='story'>
            <img src={props.profileSrc} alt="images" className='story-avater' />
            <h6>{props.title}</h6>
        </div>
    )
}

export default Story