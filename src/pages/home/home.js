import React from 'react';

import '../../resources/styles/home/home.scss';
import LefHome from './leftHome'
import RightHome from './rightHome'

function Home() {
  return (
    <div className="row content-home no-gutters">
      <div className="title-home">
        Toma<br/><div className="space-txt">la</div><br/><div className='tip-big'><span>mejor</span>desición</div>
      </div>
      <LefHome />
      <RightHome />
    </div>
  );
}

export default Home;
