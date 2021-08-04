import React, { useEffect } from 'react';
import { gsap } from 'gsap';

// Style Imports
import './Cursor.scss';

/**
 * Exports Cursor component
 * @returns JSX.Element
 */
export const Cursor = (): JSX.Element => {
    useEffect(() => {
        const cursor = document.querySelector('.cursor');
        const outerCircle = document.querySelector('.cursor__circle--outer');
        const innerCircle = document.querySelector('.cursor__circle--inner');

        /**
         * onMouseOver()
         * Applies the cursor--hover class when a pointing device enters an <a> tag
         */
        const onMouseOver = () => {
            cursor?.classList.add('cursor--hover');
        };

        /**
         * onMouseOut()
         * Removes the cursor--hover class when a pointing device leaves an <a> tag
         */
        const onMouseOut = () => {
            cursor?.classList.remove('cursor--hover', 'cursor--down');
        };

        /**
         * onMouseEnter()
         * Removes the cursor--hidden, cursor--hover and cursor--down classes
         * when a pointing device enters the document body
         */
        const onMouseEnter = () => {
            cursor?.classList.remove('cursor--hidden', 'cursor--hover', 'cursor--down');
        };

        /**
         * onMouseLeave()
         * Applies the cursor--hidden and removes the cursor--hover, cursor--down classes
         * when a pointing device leaves the document body
         */
        const onMouseLeave = () => {
            cursor?.classList.add('cursor--hidden');
            cursor?.classList.remove('cursor--hover', 'cursor--down');
        };

        /**
         * onMouseMove()
         * Applies transform(translate(_px, _px)) to the cursor__circle--outer and
         * cursor__circle--inner elements
         * @param e event data from pointer movement used to calculate the position of the cursor
         */
        const onMouseMove = (e) => {
            gsap.to(outerCircle, {
                duration: 0,
                x: e.clientX,
                y: e.clientY,
            });
            gsap.to(innerCircle, {
                duration: 0,
                x: e.clientX,
                y: e.clientY,
            });
        };

        /**
         * onMouseDown()
         * Applies the cursor--down class when a pointing device button is pressed
         */
        const onMouseDown = () => {
            cursor?.classList.add('cursor--down');
        };

        /**
         * onMouseUp()
         * Removes the cursor--down class when a pointing device button is released
         */
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
            <div className='cursor__circle--outer'></div>

            <div className='cursor__circle--inner'></div>
        </div>
    );
};
