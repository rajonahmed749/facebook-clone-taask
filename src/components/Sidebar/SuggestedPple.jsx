import React from 'react';
import user from '../../Images/user.png';
import './Sidebar.css';


function SuggestedPple() {
    return (
        <div style={{ backgroundColor: 'white', padding: '15px', marginTop: '15px', borderRadius: '8px' }}>
            <h5 style={{ fontWeight: 'bold' }}>Suggested People</h5>
            <div className='d-flex justify-content-start'>
                <div className='d-flex justify-content-start'>
                    <img src={user} alt="user" className='suggested-user-img' />
                    <p className='suggested-user'>Sadek Hossain</p>
                </div>
                <button className='btn '>Add +</button>
            </div>
        </div>
    )
}

export default SuggestedPple