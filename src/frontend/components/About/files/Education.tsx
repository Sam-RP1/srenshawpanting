import React from 'react';

export const Education = (): JSX.Element => {
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
                <span className='keyword'>import</span> <span className='string'>{"'./education.scss'"}</span>;
            </p>

            {/* blank line */}
            <p className='editor__file__line'>&nbsp;</p>

            {/* open function */}
            <p className='editor__file__line'>
                <span className='keyword'>export const</span> <span className='function'>Education</span>{' '}
                <span className='symbol'>=</span> ()
                <span className='symbol'>:</span> <span className='string'>JSX</span>.
                <span className='component'>Element</span> <span className='keyword'>{'=>'}</span>
                {' {'}
            </p>

            {/* open education array */}
            <p className='editor__file__line'>
                <span className='indent--4'>
                    <span className='keyword'>const</span> <span className='variable'>educationData</span>{' '}
                    <span className='symbol'>=</span> {' ['}
                </span>
            </p>

            {/* open obj 1 */}
            <p className='editor__file__line'>
                <span className='indent--8'>{'{ '}</span>
            </p>
            <p className='editor__file__line'>
                <span className='indent--12'>
                    <span className='obj-key'>
                        duration<span className='symbol'>:</span>
                    </span>{' '}
                    <span className='string'>{"'2017-2020'"}</span>,
                </span>
            </p>
            <p className='editor__file__line'>
                <span className='indent--12'>
                    <span className='obj-key'>
                        establishment<span className='symbol'>:</span>
                    </span>{' '}
                    <span className='string'>{"'Univeristy of Portsmouth'"}</span>,
                </span>
            </p>
            <p className='editor__file__line'>
                <span className='indent--12'>
                    <span className='obj-key'>
                        qualification<span className='symbol'>:</span>
                    </span>{' '}
                    <span className='string'>{"'BSc Hons Software Engineering'"}</span>,
                </span>
            </p>
            <p className='editor__file__line'>
                <span className='indent--8'>{' }'},</span>
            </p>
            {/* close obj 1 */}

            {/* open obj 2 */}
            <p className='editor__file__line'>
                <span className='indent--8'>{'{ '}</span>
            </p>
            <p className='editor__file__line'>
                <span className='indent--12'>
                    <span className='obj-key'>
                        duration<span className='symbol'>:</span>
                    </span>{' '}
                    <span className='string'>{"'2015-2017'"}</span>,
                </span>
            </p>
            <p className='editor__file__line'>
                <span className='indent--12'>
                    <span className='obj-key'>
                        establishment<span className='symbol'>:</span>
                    </span>{' '}
                    <span className='string'>{"'Christs College'"}</span>,
                </span>
            </p>
            <p className='editor__file__line'>
                <span className='indent--12'>
                    <span className='obj-key'>
                        qualification<span className='symbol'>:</span>
                    </span>{' '}
                    <span className='string'>{"'A-Levels in ICT, Chemistry & Business'"}</span>,
                </span>
            </p>
            <p className='editor__file__line'>
                <span className='indent--8'>{' }'},</span>
            </p>
            {/* close obj 2 */}

            {/* open obj 3 */}
            <p className='editor__file__line'>
                <span className='indent--8'>{'{ '}</span>
            </p>
            <p className='editor__file__line'>
                <span className='indent--12'>
                    <span className='obj-key'>
                        duration<span className='symbol'>:</span>
                    </span>{' '}
                    <span className='string'>{"'2015-2016'"}</span>,
                </span>
            </p>
            <p className='editor__file__line'>
                <span className='indent--12'>
                    <span className='obj-key'>
                        establishment<span className='symbol'>:</span>
                    </span>{' '}
                    <span className='string'>{"'Christs College'"}</span>,
                </span>
            </p>
            <p className='editor__file__line'>
                <span className='indent--12'>
                    <span className='obj-key'>
                        qualification<span className='symbol'>:</span>
                    </span>{' '}
                    <span className='string'>{"'AS-Level in Geography'"}</span>,
                </span>
            </p>
            <p className='editor__file__line'>
                <span className='indent--8'>{' }'},</span>
            </p>
            {/* close obj 3 */}

            {/* close education array */}
            <p className='editor__file__line'>
                <span className='indent--4'>{'];'}</span>
            </p>

            {/* blank line */}
            <p className='editor__file__line'>&nbsp;</p>

            {/* open return */}
            <p className='editor__file__line'>
                <span className='keyword indent--4'>return</span> (
            </p>
            <p className='editor__file__line'>
                <span className='indent--8'>
                    {'<'}
                    <span className='elem'>ul</span>
                    {'>'}
                </span>
            </p>
            <p className='editor__file__line'>
                <span className='indent--12'>
                    {'{ '}
                    <span className='elem'>educationData</span>.<span className='special'>map</span>((item, i){' '}
                    <span className='arrow'>{'=>'}</span>
                    {' {'}
                </span>
            </p>
            <p className='editor__file__line'>
                <span className='keyword indent--16'>return</span> (
            </p>

            <p className='editor__file__line'>
                <span className='indent--20'>
                    {'<'}
                    <span className='elem'>li</span> <span className='class'>key</span>
                    <span className='symbol'>=</span>
                    {'{'}
                    <span className='string'>{"'edu-list-elem-'"}</span> + i{'}>{'} <span className='elem'>item</span>.
                    <span className='elem'>duration</span> {'}'}: {'{'} <span className='elem'>item</span>.
                    <span className='elem'>establishment</span>
                    {' }'} || {'{ '}
                    <span className='elem'>item</span>.<span className='elem'>qualification</span>
                    {' }'}
                    {'</'}
                    <span className='elem'>li</span>
                    {'>'}
                </span>
            </p>

            <p className='editor__file__line'>
                <span className='indent--16'>);</span>
            </p>
            <p className='editor__file__line'>
                <span className='indent--12'>{'})}'}</span>
            </p>
            <p className='editor__file__line'>
                <span className='indent--8'>
                    {'</'}
                    <span className='elem'>ul</span>
                    {'>'}
                </span>
            </p>
            {/* const recentRepos = recent.map((repo) => {
        return (
            <div key={'lab-featured-repo-' + repo.id} className='lab__github__panel__repo'>
                <p>{repo.title}</p>
                <div className='lab__github__panel__repo__icons'></div>
            </div>
        );
    }); */}

            {/* close return */}
            <p className='editor__file__line'>
                <span className='indent--4'>);</span>
            </p>

            {/* close function */}
            <p className='editor__file__line'>{'};'}</p>
        </article>
    );
};
