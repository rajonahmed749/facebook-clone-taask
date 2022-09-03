import React from 'react';
import './Widget.css';
import avater from '../../Images/avater.png'

function YouMayLike() {
    return (
        <div style={{ backgroundColor: 'white', padding: '15px', marginTop: '15px', borderRadius: '8px' }}>
            <h5 className='mightLike-title'>You Might Like</h5>
            <div className='suggested-user'>
                <img src={avater} alt="" className='user-img' />
                <h6>Bill Gates</h6>
            </div>
            <div className="d-flex mt-3 justify-content-center">
                <button type="button" class="btn btn-outline-secondary ">Ignore</button>
                <button type="button" class="btn btn-danger ms-3">Follow</button>
            </div>
        </div>
    )
}

export default YouMayLike