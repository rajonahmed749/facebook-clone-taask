import React from 'react';
import DownloadApp from './DownloadApp';
import Explore from './Explore';
import SuggestedPple from './SuggestedPple';

function Sidebar() {
  return (
    <div className='container sidebar'>
      <Explore />
      <DownloadApp />
      <SuggestedPple />
    </div>
  )
}

export default Sidebar