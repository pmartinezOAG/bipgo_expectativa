import React ,{useState} from 'react';
import { Link } from 'react-router-dom';

// style
import '../../resources/styles/gameover/gameover.scss';



function Gameover() {


  return (
    <div  className="game-over">
      <h1>GAME<br/>OVER</h1>
      <p>tienes una segunda oportunidad</p>
      <Link to="/">COMIENZA DE NUEVO</Link>
    </div>
  );
};


export default Gameover;
