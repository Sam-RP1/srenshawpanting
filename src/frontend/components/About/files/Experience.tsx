import React from 'react';

export const Experience = (): JSX.Element => {
    return (
        <article className='editor__file'>
            {/* import react */}
            <p className='editor__file__line'>
                <span className='keyword'>import</span> <span className='import'>React</span>{' '}
                <span className='keyword'>from</span> <span className='string'>{"'react'"}</span>;
            </p>

            {/* blank line */}
            <p className='editor__file__line'>&nbsp;</p>

            {/* open function */}
            <p className='editor__file__line'>
                <span className='keyword'>export const</span> <span className='function'>Experience</span>{' '}
                <span className='symbol'>=</span> ()
                <span className='symbol'>:</span> <span className='string'>JSX</span>.
                <span className='component'>Element</span> <span className='keyword'>{'=>'}</span>
                {' {'}
            </p>

            {/* open return */}
            <p className='editor__file__line'>
                <span className='keyword indent--4'>return</span> (
            </p>

            {/* close return */}
            <p className='editor__file__line'>
                <span className='indent--4'>);</span>
            </p>

            {/* close function */}
            <p className='editor__file__line'>{'};'}</p>
        </article>
    );
};
