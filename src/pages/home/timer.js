import React ,{useState, Fragment, useEffect} from 'react';

//Styles
import '../../resources/styles/home/homeLeft.scss'


let circle_anim = React.createRef();
let h1_seconds = React.createRef();
let title_1 = React.createRef();
let title_2 = React.createRef();
let title_3 = React.createRef();
let radius = 100;
let length = Math.PI * 2 * radius;


function Timerpart(props) {
  const seconds = props.seconds;
  const gameStatus = props.userStatus;
  const [timeLeft, setTimeLeft] = useState(seconds);

 if(circle_anim.current !== null){
        circle_anim.current.style.strokeDasharray = length;
 }

  if(h1_seconds !=null && timeLeft < 4){
      h1_seconds.current.className = 'color-red';
      title_1.current.className = 'color-red';
      title_2.current.className = 'color-red';
      title_3.current.className = 'color-red';
      circle_anim.current.classList.add('border-red');
  }

  useEffect( ()=> {
    var progress = timeLeft * 10 / 100;
    var dashOffset = length * (1 - progress);
    circle_anim.current.style.strokeDashoffset = dashOffset;
    
    if(timeLeft === 0){
        gameStatus(true);
    }
    
    if (!timeLeft)  return;
    
    const intervalId = setInterval(() => {
     
      setTimeLeft(timeLeft - 1);
      

    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);
  
  return (
        <div className="circle-counter spin circle">
            <h4 ref={title_1}>Tienes</h4>
            <h1 ref={h1_seconds}>{timeLeft}</h1>
            <h4 ref={title_2}>segundos</h4>
            <h5 ref={title_3}>para tomar la desición correcta</h5>
            <div className="circle" >
                <svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(110,110)">
                        <circle r="100" className="e-c-base"/>
                        <g transform="rotate(-90)">
                            <circle r="100" className="e-c-progress" ref={circle_anim}/>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default Timerpart;
