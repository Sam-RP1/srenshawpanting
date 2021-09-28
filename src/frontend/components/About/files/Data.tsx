import React from 'react';

/**
 * Exports About Data File component
 * @returns JSX.Element
 */
export const Data = (): JSX.Element => {
    return (
        <article className='editor__file'>
            {/* open myInfo */}
            <p className='editor__file__line'>
                <span className='keyword'>export const</span> <span className='variable'>myInfo</span>{' '}
                <span className='symbol'>=</span> {'{'}
            </p>
            <p className='editor__file__line indent--4'>
                <span className='obj-key'>
                    name<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'Samuel Renshaw-Panting'"}</span>,
            </p>
            <p className='editor__file__line indent--4'>
                <span className='obj-key'>
                    age<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'23'"}</span>,
            </p>
            <p className='editor__file__line indent--4'>
                <span className='obj-key'>
                    gender<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'Male'"}</span>,
            </p>
            <p className='editor__file__line indent--4'>
                <span className='obj-key'>
                    dateOfBirth<span className='symbol'>:</span>
                </span>{' '}
                <span className='integer'>906726600000</span>,
            </p>
            <p className='editor__file__line indent--4'>
                <span className='obj-key'>
                    email<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'srenshawpanting@gmail.com'"}</span>,
            </p>
            {/* close myInfo */}
            <p className='editor__file__line'>{'};'}</p>

            {/* blank line */}
            <p className='editor__file__line'>&nbsp;</p>

            {/* open mySkills */}
            <p className='editor__file__line'>
                <span className='keyword'>export const</span> <span className='variable'>mySkills</span>{' '}
                <span className='symbol'>=</span> [
            </p>
            <p className='editor__file__line editor__file__line__string indent--4'>
                <span>&apos;HTML&apos;</span>, <span>&apos;CSS&apos;</span>, <span>&apos;JS&apos;</span>,{' '}
                <span>&apos;SASS&apos;</span>, <span>&apos;React&apos;</span>, <span>&apos;Redux&apos;</span>,{' '}
                <span>&apos;Jest&apos;</span>, <span>&apos;Enzyme&apos;</span>, <span>&apos;MySQL&apos;</span>,{' '}
                <span>&apos;NoSQL&apos;</span>, <span>&apos;Webpack&apos;</span>, <span>&apos;Node.js&apos;</span>,{' '}
                <span>&apos;npm&apos;</span>, <span>&apos;Express.js&apos;</span>, <span>&apos;Websockets&apos;</span>,{' '}
                <span>&apos;Socket.io&apos;</span>, <span>&apos;PWA&apos;</span>, <span>&apos;SPA&apos;</span>,{' '}
                <span>&apos;AWS&apos;</span>, <span>&apos;GCP&apos;</span>,
            </p>
            {/* close mySkills */}
            <p className='editor__file__line'>{'];'}</p>

            {/* blank line */}
            <p className='editor__file__line'>&nbsp;</p>

            {/* open myEducation */}
            <p className='editor__file__line'>
                <span className='keyword'>export const</span> <span className='variable'>myEducation</span>{' '}
                <span className='symbol'>=</span> {' ['}
            </p>

            {/* open obj 1 */}
            <p className='editor__file__line indent--4'>{'{ '}</p>
            <p className='editor__file__line indent--8'>
                <span className='obj-key'>
                    duration<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'2017-2020'"}</span>,
            </p>
            <p className='editor__file__line indent--8'>
                <span className='obj-key'>
                    establishment<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'Univeristy of Portsmouth'"}</span>,
            </p>
            <p className='editor__file__line indent--8'>
                <span className='obj-key'>
                    qualification<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'BSc Hons Software Engineering'"}</span>,
            </p>
            <p className='editor__file__line indent--4'>{' }'},</p>
            {/* close obj 1 */}

            {/* open obj 2 */}
            <p className='editor__file__line indent--4'>{'{ '}</p>
            <p className='editor__file__line indent--8'>
                <span className='obj-key'>
                    duration<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'2015-2017'"}</span>,
            </p>
            <p className='editor__file__line indent--8'>
                <span className='obj-key'>
                    establishment<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'Christs College'"}</span>,
            </p>
            <p className='editor__file__line indent--8'>
                <span className='obj-key'>
                    qualification<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'A-Levels in Business, Chemistry, Geography & ICT'"}</span>,
            </p>
            <p className='editor__file__line indent--4'>{' }'},</p>
            {/* close obj 2 */}

            {/* close myEducation */}
            <p className='editor__file__line'>{'];'}</p>

            {/* blank line */}
            <p className='editor__file__line'>&nbsp;</p>

            {/* open myExperience */}
            <p className='editor__file__line'>
                <span className='keyword'>export const</span> <span className='variable'>myExperience</span>{' '}
                <span className='symbol'>=</span> {' ['}
            </p>

            {/* open obj 1 */}
            <p className='editor__file__line indent--4'>{'{ '}</p>
            <p className='editor__file__line indent--8'>
                <span className='obj-key'>
                    duration<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'2019-Present'"}</span>,
            </p>
            <p className='editor__file__line indent--8'>
                <span className='obj-key'>
                    role<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'Freelance'"}</span>,
            </p>
            <p className='editor__file__line indent--8'>
                <span className='obj-key'>
                    establishment<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'SRP Designs'"}</span>,
            </p>
            <p className='editor__file__line indent--8'>
                <span className='obj-key'>
                    details<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>
                    {
                        "'I operate SRP Designs, a business that creates exciting, captivating and meaningful digital experiences for emerging businesses, brands and individual clients alike. SRP Designs offers UI/UX design, web development and web hosting services.'"
                    }
                </span>
                ,
            </p>
            <p className='editor__file__line indent--4'>{' }'},</p>
            {/* close obj 1 */}

            {/* open obj 2 */}
            <p className='editor__file__line indent--4'>{'{ '}</p>
            <p className='editor__file__line indent--8'>
                <span className='obj-key'>
                    duration<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'2017-2020'"}</span>,
            </p>
            <p className='editor__file__line indent--8'>
                <span className='obj-key'>
                    role<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'Student'"}</span>,
            </p>
            <p className='editor__file__line indent--8'>
                <span className='obj-key'>
                    establishment<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'University of Portsmouth'"}</span>,
            </p>
            <p className='editor__file__line indent--8'>
                <span className='obj-key'>
                    details<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>
                    {
                        "'As a software engineering student, I furthered my proficiency in front-end and back-end development through studying and using numerous frameworks, environments and platforms such as React, Node.js and AWS. As well as, I also gained experience working in teams to collaboratively design, implement, test and deploy applications.'"
                    }
                </span>
                ,
            </p>
            <p className='editor__file__line indent--4'>{' }'},</p>
            {/* close obj 2 */}

            {/* close myExperience */}
            <p className='editor__file__line'>{'];'}</p>
        </article>
    );
};
