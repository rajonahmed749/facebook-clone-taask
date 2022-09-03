import React from 'react'
import FriendList from './FriendList';
import YouMayLike from './YouMayLike';

function Widget() {
    return (
        <div className='widget'>
            <YouMayLike />
            <FriendList />
        </div>
    )
}

export default Widget;