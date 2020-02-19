import React, { Component } from 'react';
import lottie from 'lottie-web';

import loadingAnimation from './animations/loading.json';

let animObj = null;

class LoadingBigo extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        const animData = {
            container: this.animBox,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: loadingAnimation
        }

        animObj = lottie.loadAnimation(animData);

    }


    render() {
        return (
            <div className="content-bigo">
                <div className="container-anim" ref={ref => this.animBox = ref}></div>
            </div>
        )
    }

}

export default LoadingBigo;