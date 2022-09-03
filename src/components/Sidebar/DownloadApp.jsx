import React from 'react';
import playStore from '../../Images/play-store.png';
import appleStore from '../../Images/app-store.png';
import './Sidebar.css';


function DownloadApp() {
    return (
        <div style={{ backgroundColor: 'white', padding: '15px', marginTop: '15px', borderRadius: '8px' }}>
            <h5 style={{ fontWeight: 'bold' }}>Download App</h5>
            <div className='d-flex'>
                <img src={appleStore} alt="store" className='stores-download' />
                <img src={playStore} alt="store" className='stores-download' />
            </div>

        </div>
    )
}

export default DownloadApp