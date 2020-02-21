import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import axios from 'axios';


import '../../resources/styles/formulario/formulario.scss';
import Bigo from '../../components/Bigo/bigo';
import LoadingBigo from '../../components/Bigo/bigo-loading';

function Formulario(props) {

  const [rightDivAnimation, changeRightDivPosition] = useState(true);
  const [hideLoadingAnimation, changeDivContainerState] = useState(false);

  const [show1Element, change1Element] = useState(false);
  const [show2Element, change2Element] = useState(false);
  const [show3Element, change3Element] = useState(false);

  const [show4Element, change4Element] = useState(false);
  const [show5Element, change5Element] = useState(false);
  const [show6Element, change6Element] = useState(false);

  useState(() => {

    setTimeout(() => {
      changeDivContainerState(hideLoadingAnimation => !hideLoadingAnimation);
    }, 500);

    setTimeout(() => {
      changeRightDivPosition(rightDivAnimation => !rightDivAnimation);
    }, 1000);


    setTimeout(() => {
      change1Element(show1Element => !show1Element);
    }, 1250);

    setTimeout(() => {
      change2Element(show2Element => !show2Element);
    }, 1500);

    setTimeout(() => {
      change3Element(show3Element => !show3Element);
    }, 1900);

    setTimeout(() => {
      change4Element(show4Element => !show4Element);
    }, 1950);

    setTimeout(() => {
      change5Element(show5Element => !show5Element);
    }, 2000);

    setTimeout(() => {
      change6Element(show6Element => !show6Element);
    }, 2050);


  });

  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => {

    props.history.push('/envio-correo');

    /*let url = 'https://bipbe.azurewebsites.net/controllers/landapi.php';

    let formData = new FormData();

    formData.set('name', data['nombres']);
    formData.set('lastname', data['apellido']);
    formData.set('email', data['email']);

    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }

    axios.post(url, formData, config)
      .then(response => {
        history.push('/envio-correo');
      })
      .catch(error => {
        console.log(error);
      });*/
  };

  return (
    <div className="row content-home no-gutters">

      <div className={`animation-container ${hideLoadingAnimation === true ? 'hide-div-container' : ''}`}>
        <div className="bigo-container">
          <LoadingBigo />
        </div>
      </div>

      <div className="left-div">

        <div className={`message-container ${show1Element === true ? 'back-anim' : ''}`}>
          <div className='big-type'>
            Tomaste
          </div>
          <div className="little-type">
            la
          </div>
          <div className="medium-type">
            <span className="letra-roja">mejor</span> <span>decisión</span>
          </div>
        </div>

        <div className={`paragraph-container ${show2Element === true ? 'back-anim' : ''}`} >
          <span>Se uno de los primeros en disfrutar la aplicación que cambiará la forma de conseguir empleo</span>
        </div>

        <div className="bigo-container">
          <Bigo activeAnimation={true} timeAnimationStart={2250} />
        </div>


      </div>

      <div className={`right-div ${rightDivAnimation === true ? 'hide-right-div' : ''}`}>
        <div className="form-container">
          <form onSubmit={handleSubmit(onSubmit)} className="form-grid">

            <div className={`form-group ${show3Element === true ? 'back-anim' : ''}`}>
              <label>Nombres</label>
              <input name="nombres" ref={register} />
            </div>

            <div className={`form-group ${show4Element === true ? 'back-anim' : ''}`}>
              <label>Apellido</label>
              <input name="apellido" ref={register} />
            </div>

            <div className={`form-group ${show5Element === true ? 'back-anim' : ''}`}>
              <label>Email</label>
              <input name="email" ref={register} />
              {errors.email && <span>This field is required</span>}
            </div>

            <input type="submit" className={`submit-button ${show6Element === true ? 'back-anim' : ''}`} value="Regístrate" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
