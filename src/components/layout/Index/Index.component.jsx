import React from 'react';

import Tracks from '../../content/Track/Tracks.component';
import Search from '../../content/Search/Search.component';
const Index = () => {
  return (
    <div className="index">
        <Search />
        <Tracks />
    </div>
  );
};

export default Index;