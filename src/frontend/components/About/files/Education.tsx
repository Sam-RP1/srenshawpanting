import React from 'react';

export const Education = (): JSX.Element => {
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
                <span className='keyword'>export const</span> <span className='function'>Education</span>{' '}
                <span className='symbol'>=</span> ()
                <span className='symbol'>:</span> <span className='string'>JSX</span>.
                <span className='component'>Element</span> <span className='arrow'>{'=>'}</span>
                {' {'}
            </p>

            {/* open education array */}
            <p className='editor__file__line indent--4'>
                <span className='keyword'>const</span> <span className='variable'>educationData</span>{' '}
                <span className='symbol'>=</span> {' ['}
            </p>

            {/* open obj 1 */}
            <p className='editor__file__line indent--8'>{'{ '}</p>
            <p className='editor__file__line indent--12'>
                <span className='obj-key'>
                    duration<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'2017-2020'"}</span>,
            </p>
            <p className='editor__file__line indent--12'>
                <span className='obj-key'>
                    establishment<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'Univeristy of Portsmouth'"}</span>,
            </p>
            <p className='editor__file__line indent--12'>
                <span className='obj-key'>
                    qualification<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'BSc Hons Software Engineering'"}</span>,
            </p>
            <p className='editor__file__line indent--8'>{' }'},</p>
            {/* close obj 1 */}

            {/* open obj 2 */}
            <p className='editor__file__line indent--8'>{'{ '}</p>
            <p className='editor__file__line indent--12'>
                <span className='obj-key'>
                    duration<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'2015-2017'"}</span>,
            </p>
            <p className='editor__file__line indent--12'>
                <span className='obj-key'>
                    establishment<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'Christs College'"}</span>,
            </p>
            <p className='editor__file__line indent--12'>
                <span className='obj-key'>
                    qualification<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'A-Levels in Business, Chemistry, Geography & ICT'"}</span>,
            </p>
            <p className='editor__file__line indent--8'>{' }'},</p>
            {/* close obj 2 */}

            {/* close education array */}
            <p className='editor__file__line indent--4'>{'];'}</p>

            {/* blank line */}
            <p className='editor__file__line'>&nbsp;</p>

            {/* open return */}
            <p className='editor__file__line indent--4'>
                <span className='keyword'>return</span> (
            </p>

            <p className='editor__file__line indent--8'>
                {'<'}
                <span className='elem'>ul</span> <span className='class'>className</span>=
                <span className='string'>{"'about__education'"}</span>
                {'>'}
            </p>

            <p className='editor__file__line indent--12'>
                {'{'}
                <span className='elem'>educationData</span>.<span className='special'>map</span>((
                {'{ duration, establishment, qualification }'}, i) <span className='arrow'>{'=>'}</span>
                {' ('}
            </p>
            <p className='editor__file__line indent--16'>
                {'<'}
                <span className='elem'>li</span> <span className='class'>key</span>
                <span className='symbol'>=</span>
                {'{'}
                <span className='string'>{"'edu-li-'"}</span> + i{'}>'}
            </p>
            <p className='editor__file__line indent--20'>
                {'<'}
                <span className='elem'>p</span>
                {'>'}
                {'{ '}
                <span className='elem'>duration</span> {'}'}: {'{ '}
                <span className='elem'>establishment</span>
                {' }'} || {'{ '}
                <span className='elem'>qualification</span>
                {' }'}
                {'</'}
                <span className='elem'>p</span>
                {'>'}
            </p>
            <p className='editor__file__line indent--16'>
                {'</'}
                <span className='elem'>li</span>
                {'>'}
            </p>
            <p className='editor__file__line indent--12'>{'))}'}</p>

            <p className='editor__file__line indent--8'>
                {'</'}
                <span className='elem'>ul</span>
                {'>'}
            </p>

            {/* close return */}
            <p className='editor__file__line indent--4'>);</p>

            {/* close function */}
            <p className='editor__file__line'>{'};'}</p>
        </article>
    );
};
