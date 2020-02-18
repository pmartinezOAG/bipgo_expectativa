import React, { Component } from 'react';
import lottie from 'lottie-web';
import mountingAnimation from './animations/mounting.json';
import speakAnimation from './animations/speaking.json';

let animObj = null;

class Bigo  extends Component {

    constructor(props){
        super(props);
        this.state = {
            animationState: mountingAnimation
        }
        this.changeAnimation = this.changeAnimation.bind(this);
        this.repeatAnimation = this.repeatAnimation.bind(this);
    }

    componentDidMount(){
        this.repeatAnimation()
    }

    repeatAnimation(){
        animObj = lottie.loadAnimation({
            container:  this.animBox,
            renderer:'svg',
            loop:false,
            autoplay:true,
            animationData: this.state.animationState
        });
        console.log(this.state.animationState)
    }

    changeAnimation(){
        this.setState({
            animationState:speakAnimation
        });
      
        //animObj.play();
        console.log(this.state.animationState)
    }

    render(){
        return(
            <div>
                <div ref={ ref => this.animBox = ref}></div>   
                <button onClick={this.changeAnimation}>Change Animation</button>   
            </div>
        )
    }
    
}

export default Bigo;