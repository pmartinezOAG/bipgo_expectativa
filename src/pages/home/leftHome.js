import React from 'react';

import '../../resources/styles/home/home.scss';



function LeftHome() {
    let page = React.createRef();
    let btn_run = React.createRef();
    
   console.log(btn_run);

    
   const getMouseEnter = ()=>{
    console.log('ingresa mouse');
    }


   btn_run.addEventListener('mouseenter', getMouseEnter);

  return (
    <div ref={page} className="left-home content-page">
      <button ref={btn_run} className="btn btn-danger btn_run">Cargar tu cv</button>
    </div>
  );
}




export default LeftHome;
