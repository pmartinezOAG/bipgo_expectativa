import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import '../../resources/styles/home/homeRight.scss';
import bipgo_logo from '../../resources/images/logo_bipgo.svg';
import arrow_up from '../../resources/images/up-arrow-icon.png';

let messages = [{ message: 'La mejor decisión esta a tu derecha.', showing: true },
{ message: 'bipgo es la mejor opción.', showing: false },
{ message: 'no es necesario cargar tu CV.', showing: false }];

let pos = 0;

function RightHome() {

    const [position, changeMessage] = useState(0);
    const [bouncing, changeAnimation] = useState(false);
    const [showDiv, changeDiv] = useState(true);

    useEffect(() => {

        const interval2 = setInterval(() => {
            changeAnimation(bouncing => !bouncing);
        }, 1500);

        const interval = setInterval(() => {

            changeDiv(showDiv => !showDiv);

            setTimeout(() => {
                if (pos == (messages.length - 1)) {
                    pos = 0;
                    changeMessage(0);
                } else {
                    pos++;
                    changeMessage(position => position + 1);
                }
            }, 250);
        }, 3000);
        return () => {
                clearInterval(interval2)
                clearInterval(interval)
            };
    }, []);

    return (
        <div className="right-home">
            <div className="main-container">

                <button className="enter-elements delay-1 logo-button">
                    <Link to="/formulario">
                        <img src={bipgo_logo} alt="Logo Bipgo"></img>
                    </Link>
                </button>

                <img src={arrow_up} className={`enter-elements icon-arrow ${bouncing === false ? 'bounce-icon' : ''}`} alt="Up Arrow"    ></img>

                <div className={`enter-elements delay-3 ${showDiv === true ? 'principal-message-container' : 'secondary-message-container'} `}>
                    <div className="intern-margin">
                        <h5> {messages[position].message} </h5>
                    </div>
                </div>

                <div className={`enter-elements ${showDiv === true ? 'secondary-message-container' : 'principal-message-container'} `}>
                    <div className="intern-margin">
                        <h5> {messages[position].message} </h5>
                    </div>
                </div>

            </div>
        </div>
    );
};


export default RightHome;
