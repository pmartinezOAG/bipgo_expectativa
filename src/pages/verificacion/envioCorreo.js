import React, { useState } from 'react';

// style
import '../../resources/styles/verificacion/envioCorreo.scss';
import LoadingBigo from '../../components/Bigo/bigo-loading';
import bipgo_logo from '../../resources/images/logo_bipgo.svg';

function EnvioCorreo() {
  const [hideLoadingAnimation, changeDivContainerState] = useState(true);

  useState(() => {
    /*setTimeout(() => {
      changeDivContainerState(hideLoadingAnimation => !hideLoadingAnimation);
    }, 600);*/
  });

  return (

    <div className="row content-home no-gutters">
      <div className={`animation-container ${hideLoadingAnimation === true ? 'hide-div-container' : ''}`}>
        <div className="bigo-container">
          <LoadingBigo />
        </div>
      </div>

      <div className="main-container">
        <img src={bipgo_logo} alt="Logo Bipgo"></img>
      </div>
    </div>

  );
};


export default EnvioCorreo;
