import React ,{useState} from 'react';

import '../../resources/styles/home/homeLeft.scss';

// images
import bipgo_iso from '../../resources/images/bipgo_iso.png';
import bipgo_fail from '../../resources/images/bipgo_fail.png';

let num_lives = 3;

function LeftHome() {
  

  const [lives, setLives] = useState([
    {id: 'live1', src: bipgo_iso, hasLife:true },
    {id: 'live2', src: bipgo_iso, hasLife:true },
    {id: 'live3', src: bipgo_fail, hasLife:true },
  ]);

  const animButtonCV = (e) => {
    num_lives --;
    const btn_cv = e.target;
    btn_cv.classList.add('shake_Button');
    btn_cv.addEventListener('animationend', () => {
      btn_cv.classList.remove('shake_Button');
      let newArray = [...lives];
      newArray[num_lives].hasLife = false;
      console.log(newArray);
      setLives(newArray);
    });
  }

  return (
    <div  className="left-home">
      <button className="btn btn_run" onClick={animButtonCV}>Cargar tu cv</button>
      <div className="lives">
        <span>LIVES:</span>
        <div className="lives_icons">
            {
              lives.map( life => {
                let img_picked;
                (life.hasLife) ? img_picked=bipgo_iso : img_picked=bipgo_fail;
                return <div key={life.id}><img className='img-fluid' src={img_picked} alt="Bipgo" /></div>
              })
            }
        </div> 
      </div>
    </div>
  );
};


export default LeftHome;
