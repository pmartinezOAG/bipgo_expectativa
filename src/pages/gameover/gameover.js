import React  from 'react';
import { useHistory } from 'react-router-dom';

// style
import '../../resources/styles/gameover/gameover.scss';




function Gameover() {
  const history = useHistory();  

  const goHome = () =>{
    history.push('/');
  }  

  return (
    <div  className="game-over back-anim">
      <h1 className="enter-elements delay-1">GAME<br/>OVER</h1>
      <p className="enter-elements delay-2">tienes una segunda oportunidad</p>
      <a className="enter-elements delay-3" onClick={goHome}>COMIENZA DE NUEVO</a>
    </div>
  );
};


export default Gameover;
