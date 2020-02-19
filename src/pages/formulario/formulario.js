import React from 'react';
import { useForm } from 'react-hook-form'

import '../../resources/styles/formulario/formulario.scss';
import Bigo from '../../components/Bigo/bigo';

function Formulario() {

  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => { console.log(data) }

  return (
    <div className="row content-home no-gutters">
      <div className="left-div">

        <div className="message-container">
          <div className="big-type">
            Tomaste
          </div>
          <div className="little-type">
            la
          </div>
          <div className="medium-type">
            <span>mejor</span> <span className="letra-roja">decisión</span>
          </div>
        </div>

        <div className="paragraph-container">
          <span>Se uno de los primeros en disfrutar la aplicación que cambiará la forma de conseguir empleo</span>
        </div>

        <div className="bigo-container">
          <Bigo />
        </div>


      </div>

      <div className="right-div">
        <div className="form-container">
          <form onSubmit={handleSubmit(onSubmit)} className="form-grid">

            <div className="form-group">
              <label>Nombres</label>
              <input name="nombres" ref={register} />
            </div>

            <div className="form-group">
              <label>Apellido</label>
              <input name="apellido" ref={register({ required: true })} />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input name="email" ref={register({
                required: 'Required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "invalid email address"
                }
              })} />
              {errors.email && <span>This field is required</span>}
            </div>

            <input type="submit" className="submit-button" value="Regístrate" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
