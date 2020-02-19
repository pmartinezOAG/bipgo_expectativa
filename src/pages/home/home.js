import React from 'react';

import '../../resources/styles/home/home.scss';
import LefHome from './leftHome'
import RightHome from './rightHome'

function Home() {
  return (
    <div className="row content-home no-gutters">
      <LefHome />
      <RightHome />
    </div>
  );
}

export default Home;
