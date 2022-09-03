import React from 'react';
import avater from '../../Images/avater.png';
import user1 from '../../Images/user-1.jpg';
import user2 from '../../Images/user-2.jpg';
import './Widget.css'

function FriendList() {
    const FriendList = [
        { name: 'Admin.', img: avater },
        { name: 'Max Sheam', img: user1 },
        { name: 'Masuma Sheli', img: user2 }
    ]
    return (
        <div style={{ backgroundColor: 'white', padding: '15px', marginTop: '15px', borderRadius: '8px' }}>
            <h5 className='mightLike-title pb-3'>Your Friends</h5>
            <input
                className='search-input mt-2'
                type="text"
                placeholder='search...' />
            {
                FriendList.map((friend) => {
                    return (
                        <div className='friend-list'>
                            <img src={friend.img} alt="photo" className='user-img' />
                            <h6>{friend.name}</h6>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FriendList