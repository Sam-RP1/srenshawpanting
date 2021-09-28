import React from 'react';

/**
 * Exports About Experience File component
 * @returns JSX.Element
 */
export const Experience = (): JSX.Element => {
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
                <span className='keyword'>export const</span> <span className='function'>Experience</span>{' '}
                <span className='symbol'>=</span> ()
                <span className='symbol'>:</span> <span className='string'>JSX</span>.
                <span className='component'>Element</span> <span className='keyword'>{'=>'}</span>
                {' {'}
            </p>

            {/* open experience array */}
            <p className='editor__file__line indent--4'>
                <span className='keyword'>const</span> <span className='variable'>experienceData</span>{' '}
                <span className='symbol'>=</span> {' ['}
            </p>

            {/* open obj 1 */}
            <p className='editor__file__line indent--8'>{'{ '}</p>
            <p className='editor__file__line indent--12'>
                <span className='obj-key'>
                    duration<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'2021-Present'"}</span>,
            </p>
            <p className='editor__file__line indent--12'>
                <span className='obj-key'>
                    role<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'Formula 1 VPC™ Technical Producer'"}</span>,
            </p>
            <p className='editor__file__line indent--12'>
                <span className='obj-key'>
                    establishment<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'Formula 1'"}</span>,
            </p>
            <p className='editor__file__line indent--12'>
                <span className='obj-key'>
                    details<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>
                    {
                        "'I am the technical producer for the Formula 1 Virtual Paddock Club™. In my role, I collaborate with producers, hosts, engineers and various media departments to produce behind the scenes and exclusive Formula 1 content for fans, corporate guests and VIPs. As the technical producer, I am responsible for ensuring the Virtual Paddock Club live streams run perfectly. I utilise various software to control the video content, scene transitions, audio balance, live interviews, and all other media content for the live streams. Alongside this, I communicate timings and queues concisely with the producers, hosts and co-hosts when we are live.'"
                    }
                </span>
                ,
            </p>
            <p className='editor__file__line indent--8'>{' }'},</p>
            {/* close obj 1 */}

            {/* open obj 2 */}
            <p className='editor__file__line indent--8'>{'{ '}</p>
            <p className='editor__file__line indent--12'>
                <span className='obj-key'>
                    duration<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'2021-Present'"}</span>,
            </p>
            <p className='editor__file__line indent--12'>
                <span className='obj-key'>
                    role<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'Team Leader'"}</span>,
            </p>
            <p className='editor__file__line indent--12'>
                <span className='obj-key'>
                    establishment<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'Amazon Flex - Morrisons'"}</span>,
            </p>
            <p className='editor__file__line indent--12'>
                <span className='obj-key'>
                    details<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>
                    {
                        "'I am a part-time team leader at Morrisons, running and managing their Amazon Flex department. As a team leader, I work in a fast-paced environment that requires my analytical and logistical skills to make sure orders placed by customers through Amazon are assigned, picked, packed and completed to a high quality each hour. At any single time, I am in charge of up to 24 members of staff for which I need to organise, motivate and make sure they have a great time doing their job. The entire team currently consists of 60 members of staff.'"
                    }
                </span>
                ,
            </p>
            <p className='editor__file__line indent--8'>{' }'},</p>
            {/* close obj 2 */}

            {/* open obj 3 */}
            <p className='editor__file__line indent--8'>{'{ '}</p>
            <p className='editor__file__line indent--12'>
                <span className='obj-key'>
                    duration<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'2019-Present'"}</span>,
            </p>
            <p className='editor__file__line indent--12'>
                <span className='obj-key'>
                    role<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'Freelance'"}</span>,
            </p>
            <p className='editor__file__line indent--12'>
                <span className='obj-key'>
                    establishment<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'SRP Designs'"}</span>,
            </p>
            <p className='editor__file__line indent--12'>
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
            <p className='editor__file__line indent--8'>{' }'},</p>
            {/* close obj 3 */}

            {/* open obj 4 */}
            <p className='editor__file__line indent--8'>{'{ '}</p>
            <p className='editor__file__line indent--12'>
                <span className='obj-key'>
                    duration<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'2017-2020'"}</span>,
            </p>
            <p className='editor__file__line indent--12'>
                <span className='obj-key'>
                    role<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'Student'"}</span>,
            </p>
            <p className='editor__file__line indent--12'>
                <span className='obj-key'>
                    establishment<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'University of Portsmouth'"}</span>,
            </p>
            <p className='editor__file__line indent--12'>
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
            <p className='editor__file__line indent--8'>{' }'},</p>
            {/* close obj 4 */}

            {/* close experience array */}
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
                <span className='string'>{"'about__experience'"}</span>
                {'>'}
            </p>
            <p className='editor__file__line indent--12'>
                {'{'}
                <span className='elem'>experienceData</span>.<span className='special'>map</span>((
                {'{ duration, role, establishment, details }'}, i) <span className='arrow'>{'=>'}</span>
                {' ('}
            </p>
            <p className='editor__file__line indent--16'>
                {'<'}
                <span className='elem'>li</span> <span className='class'>key</span>
                <span className='symbol'>=</span>
                {'{'}
                <span className='string'>{"'exp-li-'"}</span> + i{'}>'}
            </p>
            <p className='editor__file__line indent--20'>
                {'<'}
                <span className='elem'>p</span>
                {'>'}
                {'{ '}
                <span className='elem'>duration</span> {'}'}: {'{ '}
                <span className='elem'>establishment</span>
                {' }'} || {'{ '}
                <span className='elem'>role</span>
                {' }'}
                {'</'}
                <span className='elem'>p</span>
                {'>'}
            </p>
            <p className='editor__file__line indent--20'>
                {'<'}
                <span className='elem'>p</span>
                {'>'}
                {'{ '}
                <span className='elem'>details</span>
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
