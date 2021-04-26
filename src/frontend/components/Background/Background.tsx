import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

import './Background.scss';

export const Background = (): JSX.Element => {
    const planet = useRef();
    const cb1 = useRef();
    const cb2 = useRef();
    const cb3 = useRef();

    useEffect(() => {
        const bg = document.getElementById('bg');
        const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        const animations = [];
        let bgColor = '#25243c';
        let cHeight;
        let cWidth;

        const colorPicker = (() => {
            const colors = ['#25243c', '#36346f', '#18154b', '#621360', '#ff6138'];
            let i = 0;

            const getNextCol = () => {
                i = i++ < colors.length - 1 ? i : 0;
                return colors[i];
            };

            const getCurrentCol = () => {
                return colors[i];
            };

            return {
                getNextCol: getNextCol,
                getCurrentCol: getCurrentCol,
            };
        })();

        const removeAnimation = (animation) => {
            const i = animations.indexOf(animation);
            if (i > -1) animations.splice(i, 1);
        };

        const calcPageFill = (x, y) => {
            const l = Math.max(x - 0, cWidth - x);
            const h = Math.max(y - 0, cHeight - y);
            return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
        };

        const handleEvent = (e) => {
            if (e.touches) {
                e.preventDefault();
                e = e.touches[0];
            }

            const currentColor = colorPicker.getCurrentCol();
            const nextColor = colorPicker.getNextCol();
            const targetR = calcPageFill(e.clientX, e.clientY);
            const rippleSize = Math.min(200, cWidth * 0.4);
            const minCoverDuration = 750;
            const particles = [];

            const updatePlanetarySystem = () => {
                const oldColor = planet.current.style.background;
                cb1.current.style.background = oldColor;
                cb2.current.style.background = oldColor;
                cb3.current.style.background = oldColor;
                planet.current.style.background = currentColor;
            };

            const pageFill = new Circle({
                x: e.clientX,
                y: e.clientY,
                r: 0,
                fill: nextColor,
            });

            const fillAnimation = anime({
                targets: pageFill,
                r: targetR,
                duration: Math.max(targetR / 2, minCoverDuration),
                easing: 'easeOutQuart',
                complete: () => {
                    bgColor = pageFill.fill;
                    removeAnimation(fillAnimation);
                },
            });

            const ripple = new Circle({
                x: e.clientX,
                y: e.clientY,
                r: 0,
                fill: currentColor,
                stroke: {
                    width: 3,
                    color: currentColor,
                },
                opacity: 1,
            });

            const rippleAnimation = anime({
                targets: ripple,
                r: rippleSize,
                opacity: 0,
                easing: 'easeOutExpo',
                duration: 900,
                complete: removeAnimation,
            });

            for (let i = 0; i < 26; i++) {
                const particle = new Circle({
                    x: e.clientX,
                    y: e.clientY,
                    fill: currentColor,
                    r: anime.random(24, 48),
                });
                particles.push(particle);
            }

            const particlesAnimation = anime({
                targets: particles,
                x: (particle) => {
                    return particle.x + anime.random(rippleSize, -rippleSize);
                },
                y: (particle) => {
                    return particle.y + anime.random(rippleSize * 1.15, -rippleSize * 1.15);
                },
                r: 0,
                easing: 'easeOutExpo',
                duration: anime.random(1000, 1300),
                complete: removeAnimation,
            });

            animations.push(fillAnimation, rippleAnimation, particlesAnimation);
            updatePlanetarySystem();
        };

        const extend = (a, b) => {
            for (const key in b) {
                // eslint-disable-next-line
                if (b.hasOwnProperty(key)) {
                    a[key] = b[key];
                }
            }
            return a;
        };

        const Circle = function (opts) {
            extend(this, opts);
        };

        Circle.prototype.draw = function () {
            ctx.globalAlpha = this.opacity || 1;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);

            if (this.stroke) {
                ctx.strokeStyle = this.stroke.color;
                ctx.lineWidth = this.stroke.width;
                ctx.stroke();
            }

            if (this.fill) {
                ctx.fillStyle = this.fill;
                ctx.fill();
            }

            ctx.closePath();
            ctx.globalAlpha = 1;
        };

        const animate = anime({
            duration: Infinity,
            update: function () {
                ctx.fillStyle = bgColor;
                ctx.fillRect(0, 0, cWidth, cHeight);
                animations.forEach(function (anim) {
                    anim.animatables.forEach(function (animatable) {
                        animatable.target.draw();
                    });
                });
            },
        });

        const resizeCanvas = () => {
            cWidth = window.innerWidth;
            cHeight = window.innerHeight;
            canvas.width = cWidth * devicePixelRatio;
            canvas.height = cHeight * devicePixelRatio;
            ctx.scale(devicePixelRatio, devicePixelRatio);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        bg.addEventListener('touchstart', handleEvent);
        bg.addEventListener('mousedown', handleEvent);
        console.log('Canvas Height', canvas.height);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            bg.removeEventListener('touchstart', handleEvent);
            bg.removeEventListener('mousedown', handleEvent);
        };
    }, []);

    return (
        <div id='bg'>
            <canvas id='canvas'></canvas>
            <div id='planetary-system'>
                <section className='ps__wrapper'>
                    <div className='ps__celestial-body ps__celestial-body--planet'>
                        <span ref={planet}></span>
                    </div>
                </section>
                <section className='ps__wrapper'>
                    <div className='ps__celestial-body ps__celestial-body--satellite tooltip'>
                        <span ref={cb1}></span>
                    </div>
                </section>
                <section className='ps__wrapper'>
                    <div className='ps__celestial-body ps__celestial-body--satellite tooltip'>
                        <span ref={cb2}></span>
                    </div>
                </section>
                <section className='ps__wrapper'>
                    <div className='ps__celestial-body ps__celestial-body--satellite tooltip'>
                        <span ref={cb3}></span>
                    </div>
                </section>
            </div>
        </div>
    );
};
