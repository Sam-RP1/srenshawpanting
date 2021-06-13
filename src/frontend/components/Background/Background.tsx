import React from 'react';

import './Background.scss';
import moon from '../../assets/svgs/moontest.svg';

export const Background = (): JSX.Element => {
    return (
        <div id='bg'>
            <div className='moon'>
                <div className='moon__container'>
                    <div className='moon__layer'>
                        <img className='moon__img' src={moon} />
                    </div>
                </div>
            </div>
            <div className='moonlight'>
                <div className='moonlight__container'>
                    <div className='moonlight__wrap'>
                        <div className='moonlight__img'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
