import React from 'react';

export const Profile = (): JSX.Element => {
    const pElemOpen = (
        <>
            {'<'}
            <span className='elem'>p</span>
            {'>'}
        </>
    );
    const pElemClose = (
        <>
            {'</'}
            <span className='elem'>p</span>
            {'>'}
        </>
    );

    return (
        <article className='editor__file'>
            {/* import react */}
            <p className='editor__file__line'>
                <span className='keyword'>import</span> <span className='import'>React</span>{' '}
                <span className='keyword'>from</span> <span className='string'>{"'react'"}</span>;
            </p>

            {/* blank line */}
            <p className='editor__file__line'>&nbsp;</p>

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
            <p className='editor__file__line indent--12'>{pElemOpen}</p>
            <p className='editor__file__line indent--16'>
                Hi there, I&apos;m Sam, a 22-year-old Web Developer and Software Engineering graduate. I&apos;m an
                enthusiastic guy with a passion for the web and its multitude of technologies. I like to compose
                captivating designs, create smart user interfaces, solve complex problems, squash troublesome bugs,
                develop rich web experiences and web applications.
            </p>
            <p className='editor__file__line indent--12'>{pElemClose}</p>
            {/* close p1 */}

            {/* open p2 */}
            <p className='editor__file__line indent--12'>{pElemOpen}</p>
            <p className='editor__file__line indent--16'>
                As well as, I enjoy consistently pushing myself by learning new languages, frameworks and technologies
                in addition to further improving my abilities in ones I am already familiar with. When I&apos;m not
                learning, conceptualising, designing or developing, you&apos;ll most likely find me either exercising,
                playing with my dog, listening to music or being below average at chess.
            </p>
            <p className='editor__file__line indent--12'>{pElemClose}</p>
            {/* close p2 */}

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
