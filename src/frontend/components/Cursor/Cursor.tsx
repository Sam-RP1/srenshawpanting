import React, { useEffect } from 'react';
import { gsap } from 'gsap';

import './Cursor.scss';

// todo
// create + and use that on 'a'

export const Cursor = (): JSX.Element => {
    useEffect(() => {
        const cursor = document.querySelector('.cursor');
        const bigCircle = document.querySelector('.cursor__circle--outer');
        const smallCircle = document.querySelector('.cursor__circle--inner');

        // Bug where if you hold down on an 'a' tag and then drag only the hover class is removed
        // Bug where if you click on a button and then it is no longer there you havent left it so the class stays applied
        const onMouseOver = () => {
            cursor?.classList.add('cursor--hover');
        };

        const onMouseOut = () => {
            cursor?.classList.remove('cursor--hover');
        };

        const onMouseEnter = () => {
            cursor?.classList.remove('cursor--hidden');
        };

        const onMouseLeave = () => {
            cursor?.classList.add('cursor--hidden');
        };

        const onMouseMove = (e) => {
            gsap.to(bigCircle, {
                duration: 0,
                x: e.clientX,
                y: e.clientY,
            });
            gsap.to(smallCircle, {
                duration: 0,
                x: e.clientX,
                y: e.clientY,
            });
        };

        const onMouseDown = () => {
            cursor?.classList.add('cursor--down');
        };

        const onMouseUp = () => {
            cursor?.classList.remove('cursor--down');
        };

        document.querySelectorAll('a').forEach((el) => {
            el.addEventListener('mouseover', onMouseOver);
            el.addEventListener('mouseout', onMouseOut);
        });

        document.body.addEventListener('mouseenter', onMouseEnter);
        document.body.addEventListener('mouseleave', onMouseLeave);
        document.body.addEventListener('mousemove', onMouseMove);
        document.body.addEventListener('mousedown', onMouseDown);
        document.body.addEventListener('mouseup', onMouseUp);

        return () => {
            document.querySelectorAll('a').forEach((el) => {
                el.removeEventListener('mouseover', onMouseOver);
                el.removeEventListener('mouseout', onMouseOut);
            });
            document.body.removeEventListener('mouseenter', onMouseEnter);
            document.body.removeEventListener('mouseleave', onMouseLeave);
            document.body.removeEventListener('mousemove', onMouseMove);
            document.body.removeEventListener('mousedown', onMouseDown);
            document.body.removeEventListener('mouseup', onMouseUp);
        };
    }, []);

    return (
        <div className='cursor cursor--hidden'>
            <div className='cursor__circle cursor__circle--outer'></div>

            <div className='cursor__circle cursor__circle--inner'></div>
        </div>
    );
};
