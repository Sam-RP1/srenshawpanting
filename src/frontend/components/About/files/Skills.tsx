import React from 'react';

export const Skills = (): JSX.Element => {
    return (
        <article className='editor__file'>
            {/* open function */}
            <p className='editor__file__line'>
                <span className='keyword'>export const</span> <span className='function'>skills</span>{' '}
                <span className='symbol'>=</span> [
            </p>

            <p className='editor__file__line editor__file__line__string'>
                <span>&apos;HTML&apos;</span>, <span>&apos;CSS&apos;</span>, <span>&apos;JS&apos;</span>,{' '}
                <span>&apos;SASS&apos;</span>, <span>&apos;React&apos;</span>, <span>&apos;Redux&apos;</span>,{' '}
                <span>&apos;Jest&apos;</span>, <span>&apos;Enzyme&apos;</span>, <span>&apos;MySQL&apos;</span>,{' '}
                <span>&apos;NoSQL&apos;</span>, <span>&apos;Webpack&apos;</span>, <span>&apos;Node.js&apos;</span>,{' '}
                <span>&apos;npm&apos;</span>, <span>&apos;Express.js&apos;</span>, <span>&apos;Websockets&apos;</span>,{' '}
                <span>&apos;Socket.io&apos;</span>, <span>&apos;PWA&apos;</span>, <span>&apos;SPA&apos;</span>,{' '}
                <span>&apos;AWS&apos;</span>, <span>&apos;GCP&apos;</span>
            </p>

            {/* close function */}
            <p className='editor__file__line'>{'];'}</p>
        </article>
    );
};
