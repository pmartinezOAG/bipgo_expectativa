import React ,{useState, Fragment, useEffect} from 'react';

//Styles
import '../../resources/styles/home/homeLeft.scss'


let circle_anim = React.createRef();
let radius = 100;
let length = Math.PI * 2 * radius;
let color = '#ff3642';

function Timerpart(props) {
  const seconds = props.seconds;
  const gameStatus = props.userStatus;
  const [timeLeft, setTimeLeft] = useState(seconds);

  let circle_bar = <circle r="100" className="e-c-progress" ref={circle_anim}/>;
  
 if(circle_anim.current !== null){
        circle_anim.current.style.strokeDasharray = length;
        //circle_anim.current.style.strokeDashoffset = 100;
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
            <h4>Tienes</h4>
            <h1>{timeLeft}</h1>
            <h4>segundos</h4>
            <h5>para tomar la desición correcta</h5>
            <div className="circle" >
                <svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(110,110)">
                        <circle r="100" className="e-c-base"/>
                        <g transform="rotate(-90)">
                            {circle_bar}
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default Timerpart;
