'use strict';

import React, { Component } from 'react';

import '../../styles/root.scss';
import './Splash.scss';

/**
 * SplashIndex - Class for the splash component that is used specifically on the index page.
 */
class SplashIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Software Engineering Graduate',
        };

        this.counter = 0;

        this.infoFadeOut = this.infoFadeOut.bind(this);
        this.infoFadeIn = this.infoFadeIn.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.infoFadeOut(), 6000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    infoFadeOut() {
        const msg = document.getElementById('splash-msg');
        msg.style.opacity = '0';

        this.counter += 1;

        this.timeoutID = setTimeout(() => this.infoFadeIn(), 2000);
    }

    infoFadeIn() {
        if (this.counter % 2 == 0) {
            this.setState({
                message: 'Software Engineering Graduate',
            });
        } else {
            this.setState({
                message: 'Web Developer',
            });
        }

        const msg = document.getElementById('splash-msg');
        msg.style.opacity = '1';
    }

    render() {
        return (
            <div className='splash-content-container container'>
                <div className='animate__animated animate__backInLeft animate__slow'>
                    <h1 id='splash-heading'>Sam Renshaw-Panting</h1>
                    <p id='splash-msg'>{this.state.message}</p>
                </div>
                <div className='splash-arrow-wrapper animate__animated animate__backInUp animate__slow'>
                    <span className='splash-down-arrow'></span>
                </div>
            </div>
        );
    }
}

export default SplashIndex;
