import React, { Component } from 'react';
import lottie from 'lottie-web';

import mountingAnimation from './animations/mounting.json';
import speakAnimation from './animations/speaking.json';

let animObj = null;
let animObj2 = null;

class Bigo  extends Component {
     
    constructor(props){
        super(props);
    }

    componentDidMount(){
        
        const animData= {
            container:  this.animBox,
            renderer:'svg',
            loop:false,
            autoplay:true,
            animationData: mountingAnimation
        }
        animObj = lottie.loadAnimation(animData);
        //animObj.stop();
        animObj.addEventListener('complete', () => {
            console.log('la animacion ha concluido');
            const animDataSpeak = {
                container:  this.animBox2,
                renderer:'svg',
                loop:true,
                autoplay:true,
                animationData: speakAnimation
            }
            //
            animObj2 = lottie.loadAnimation(animDataSpeak);
            
        });
        
    }


    render(){
        return(
            <div className="content-bigo">
                <div className="container-anim" ref={ ref => this.animBox = ref}></div>   
                <div className="container-anim" ref={ ref => this.animBox2 = ref}></div>
            </div>
        )
    }
    
}

export default Bigo;