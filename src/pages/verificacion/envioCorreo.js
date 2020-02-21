import React, { useState } from 'react';

// style
import '../../resources/styles/verificacion/envioCorreo.scss';
import LoadingBigo from '../../components/Bigo/bigo-loading';
import bipgo_logo from '../../resources/images/logo_bipgo.svg';
import facebook_logo from '../../resources/images/facebook-icon.png';
import instagram_logo from '../../resources/images/instragram-icon.png';
import message_logo from '../../resources/images/message-icon.png';
import Bigo from '../../components/Bigo/bigo';

function EnvioCorreo() {
  const [hideLoadingAnimation, changeDivContainerState] = useState(false);
  const [showLogoContainer, changeLogoContainerState] = useState(false);

  const [show1Element, change1Element] = useState(false);
  const [show2Element, change2Element] = useState(false);
  const [show3Element, change3Element] = useState(false);
  const [show4Element, change4Element] = useState(false);
  const [show5Element, change5Element] = useState(false);
  const [show6Element, change6Element] = useState(false);

  useState(() => {
    setTimeout(() => {
      changeDivContainerState(hideLoadingAnimation => !hideLoadingAnimation);
    }, 600);

    setTimeout(() => {
      changeLogoContainerState(showLogoContainer => !showLogoContainer);
    }, 900);

    setTimeout(() => {
      change1Element(show1Element => !show1Element);
    }, 1200);

    setTimeout(() => {
      change2Element(show2Element => !show2Element);
    }, 1300);

    setTimeout(() => {
      change3Element(show3Element => !show3Element);
    }, 1350);

    setTimeout(() => {
      change4Element(show4Element => !show4Element);
    }, 1400);

    setTimeout(() => {
      change5Element(show5Element => !show5Element);
    }, 1450);

    setTimeout(() => {
      change6Element(show6Element => !show6Element);
    }, 1500);


  });

  return (

    <div className="row content-home no-gutters">
      <div className={`animation-container ${hideLoadingAnimation === true ? 'hide-div-container' : ''}`}>
        <div className="bigo-container">
          <LoadingBigo />
        </div>
      </div>

      <div className={`logo-container ${showLogoContainer === true ? 'show-logo-container' : ''}`}>
        <img className={show1Element === true ? 'back-anim' : ''} src={bipgo_logo} alt="Logo Bipgo"></img>
      </div>

      <div className={`message-container ${show4Element === true ? 'back-anim' : ''}`} >
        <span>¡Gracias por registrarte!</span>
      </div>

      <div className={`text-container ${show5Element === true ? 'back-anim' : ''}`} >
        <span>Hemos enviado un correo de verificación.</span>
      </div>

      <div className={`send-message-logo-container ${show6Element === true ? 'back-anim' : ''}`}>
        <img src={message_logo} alt="Mensaje logo"></img>
      </div>

      <div className="icons-container">
        <img className={show3Element === true ? 'back-anim' : ''} src={facebook_logo} alt="Facebook logo"></img>
        <img className={show2Element === true ? 'back-anim' : ''} src={instagram_logo} alt="Instagram logo"></img>
      </div>

      <div className="div-bigo">
        <div className="bigo-container">
          <Bigo  activeAnimation={true} timeAnimationStart={700} />
        </div>
      </div>

    </div>

  );
};


export default EnvioCorreo;
