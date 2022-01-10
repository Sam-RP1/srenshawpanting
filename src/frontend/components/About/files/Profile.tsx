import React from 'react';

/**
 * Exports About Profile File component
 * @returns JSX.Element
 */
export const Profile = (): JSX.Element => {
    return (
        <article className='editor__file'>
            {/* import react */}
            <p className='editor__file__line'>
                <span className='keyword'>import</span> <span className='import'>React</span>{' '}
                <span className='keyword'>from</span> <span className='string'>{"'react'"}</span>;
            </p>

            {/* import style */}
            <p className='editor__file__line'>
                <span className='keyword'>import</span> <span className='string'>{"'../About.scss'"}</span>;
            </p>

            {/* blank line */}
            <p className='editor__file__line'>&nbsp;</p>

            {/* open function */}
            <p className='editor__file__line'>
                <span className='keyword'>export const</span> <span className='function'>Profile</span>{' '}
                <span className='symbol'>=</span> ()
                <span className='symbol'>:</span> <span className='string'>JSX</span>.
                <span className='component'>Element</span> <span className='arrow'>{'=>'}</span>
                {' {'}
            </p>

            {/* open return */}
            <p className='editor__file__line indent--4'>
                <span className='keyword'>return</span> (
            </p>

            {/* open div 1 */}
            <p className='editor__file__line indent--8'>
                {'<'}
                <span className='elem'>div</span> <span className='class'>className</span>=
                <span className='string'>{"'about__profile'"}</span>
                {'>'}
            </p>

            {/* open p1 */}
            <p className='editor__file__line indent--12'>
                {'<'}
                <span className='elem'>p</span>
                {'>'}
            </p>
            <p className='editor__file__line indent--16'>
                Hi there, I&apos;m Sam, a 23-year-old Full Stack Web Developer and Software Engineer. I&apos;m an
                enthusiastic guy with a passion for the web and its multitude of technologies. I like to compose
                captivating designs, create smart user interfaces, solve complex problems, squash troublesome bugs,
                develop rich web experiences and web applications from the ground up.
            </p>
            <p className='editor__file__line indent--12'>
                {'</'}
                <span className='elem'>p</span>
                {'>'}
            </p>
            {/* close p1 */}

            {/* open p2 */}
            <p className='editor__file__line indent--12'>
                {'<'}
                <span className='elem'>p</span>
                {'>'}
            </p>
            <p className='editor__file__line indent--16'>
                Throughout the time I have invested in programming and developing I have become experienced and
                proficient in various languages, frameworks and technologies. Some of these include HTML, CSS, JS, SASS,
                React, Redux, Jest, Enzyme, MySQL, NoSQL, Webpack, Node.js, npm, Express.js, Websockets, PWA, SPA, AWS
                and GCP.
            </p>
            <p className='editor__file__line indent--12'>
                {'</'}
                <span className='elem'>p</span>
                {'>'}
            </p>
            {/* close p2 */}

            {/* open p3 */}
            <p className='editor__file__line indent--12'>
                {'<'}
                <span className='elem'>p</span>
                {'>'}
            </p>
            <p className='editor__file__line indent--16'>
                I enjoy consistently pushing myself by learning new languages, frameworks and technologies in addition
                to further improving my abilities in ones I am already familiar with. When I&apos;m not learning,
                conceptualising, designing, developing or programming, you&apos;ll most likely find me either
                exercising, playing with my dog, listening to music or being below average at chess.
            </p>
            <p className='editor__file__line indent--12'>
                {'</'}
                <span className='elem'>p</span>
                {'>'}
            </p>
            {/* close p3 */}

            {/* open p4 */}
            <p className='editor__file__line indent--12'>
                {'<'}
                <span className='elem'>p</span>
                {'>'}
            </p>
            <p className='editor__file__line indent--16'>
                My many professional and personal interests include UI/UX, Web Design, Frontend Development, Backend
                Development, Full Stack Development, Cloud Computing, Drones, Photography, Fitness, Nutrition, NFL,
                Formula 1, Chess, Music and FPS/MMO Games.
            </p>
            <p className='editor__file__line indent--12'>
                {'</'}
                <span className='elem'>p</span>
                {'>'}
            </p>
            {/* close p4 */}

            {/* close div 1 */}
            <p className='editor__file__line indent--8'>
                {'</'}
                <span className='elem'>div</span>
                {'>'}
            </p>

            {/* close return */}
            <p className='editor__file__line indent--4'>);</p>

            {/* close function */}
            <p className='editor__file__line'>{'};'}</p>
        </article>
    );
};
