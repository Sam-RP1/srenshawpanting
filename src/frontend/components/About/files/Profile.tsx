import React from 'react';

export const Profile = (): JSX.Element => {
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
                <span className='keyword'>import</span> <span className='string'>{"'./profile.scss'"}</span>;
            </p>

            {/* blank line */}
            <p className='editor__file__line'>&nbsp;</p>

            {/* open function */}
            <p className='editor__file__line'>
                <span className='keyword'>export const</span> <span className='function'>Profile</span>{' '}
                <span className='symbol'>=</span> ()
                <span className='symbol'>:</span> <span className='string'>JSX</span>.
                <span className='component'>Element</span> <span className='keyword'>{'=>'}</span>
                {' {'}
            </p>

            {/* open return */}
            <p className='editor__file__line'>
                <span className='keyword indent--4'>return</span> (
            </p>

            {/* open div 1 */}
            <p className='editor__file__line'>
                <span className='indent--8'>
                    {'<'}
                    <span className='elem'>div</span> <span className='class'>className</span>=
                    <span className='string'>{"'profile__content'"}</span>
                    {'>'}
                </span>
            </p>

            {/* p1 */}
            <p className='editor__file__line'>
                <span className='indent--12'>
                    {'<'}
                    <span className='elem'>p</span>
                    {'>'}
                </span>
            </p>
            <p className='editor__file__line'>
                <span className='indent--16'>
                    Hi there, I&apos;m Sam, a 22-year-old Web Developer and Software Engineering graduate. I&apos;m an
                    enthusiastic guy with a passion for the web and its multitude of technologies.
                </span>
            </p>
            <p className='editor__file__line'>
                <span className='indent--12'>
                    {'</'}
                    <span className='elem'>p</span>
                    {'>'}
                </span>
            </p>

            {/* p2 */}
            <p className='editor__file__line'>
                <span className='indent--12'>
                    {'<'}
                    <span className='elem'>p</span>
                    {'>'}
                </span>
            </p>
            <p className='editor__file__line'>
                <span className='indent--16'>
                    I like to compose captivating designs, create smart user interfaces, solve complex problems, squash
                    troublesome bugs, develop rich web experiences and web applications.
                </span>
            </p>
            <p className='editor__file__line'>
                <span className='indent--12'>
                    {'</'}
                    <span className='elem'>p</span>
                    {'>'}
                </span>
            </p>

            {/* p3 */}
            <p className='editor__file__line'>
                <span className='indent--12'>
                    {'<'}
                    <span className='elem'>p</span>
                    {'>'}
                </span>
            </p>
            <p className='editor__file__line'>
                <span className='indent--16'>
                    As well as, I enjoy consistently pushing myself by learning new languages, frameworks and
                    technologies in addition to further improving my abilities in ones I am already familiar with.
                </span>
            </p>
            <p className='editor__file__line'>
                <span className='indent--12'>
                    {'</'}
                    <span className='elem'>p</span>
                    {'>'}
                </span>
            </p>

            {/* p4 */}
            <p className='editor__file__line'>
                <span className='indent--12'>
                    {'<'}
                    <span className='elem'>p</span>
                    {'>'}
                </span>
            </p>
            <p className='editor__file__line'>
                <span className='indent--16'>
                    When I&apos;m not learning, conceptualising, designing or developing, you&apos;ll most likely find
                    me either exercising, playing with my dog, listening to music or being below average at chess.
                </span>
            </p>
            <p className='editor__file__line'>
                <span className='indent--12'>
                    {'</'}
                    <span className='elem'>p</span>
                    {'>'}
                </span>
            </p>

            {/* close div 1 */}
            <p className='editor__file__line'>
                <span className='indent--8'>
                    {'</'}
                    <span className='elem'>div</span>
                    {'>'}
                </span>
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
