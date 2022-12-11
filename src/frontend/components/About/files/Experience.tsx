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
                <span className='string'>{"'2022/01 - Present'"}</span>,
            </p>
            <p className='editor__file__line indent--12'>
                <span className='obj-key'>
                    role<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'Infrastructure Manager'"}</span>,
            </p>
            <p className='editor__file__line indent--12'>
                <span className='obj-key'>
                    establishment<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'Expert Hosts'"}</span>,
            </p>
            <p className='editor__file__line indent--12'>
                <span className='obj-key'>
                    details<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>
                    {
                        "'As infrastructure manager, my primary responsibility is to ensure that all necessary IT infrastructure is in place, functioning efficiently and effectively to support our organisation's operations. In addition to overseeing the organisation's IT systems, I also engage in software engineering to develop and maintain systems and applications that support our business. I am also responsible for coordinating and actively managing all aspects of our event logistics, including procuring the necessary contractors, flights, hotels and rental vehicles. I strive to maintain strong positive relationships with contractors and vendors to ensure that all necessary services are provided in a timely and efficient manner.'"
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
                <span className='string'>{"'2021/08 - 2022/11'"}</span>,
            </p>
            <p className='editor__file__line indent--12'>
                <span className='obj-key'>
                    role<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'Technical Producer'"}</span>,
            </p>
            <p className='editor__file__line indent--12'>
                <span className='obj-key'>
                    establishment<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'Expert Hosts - Formula 1'"}</span>,
            </p>
            <p className='editor__file__line indent--12'>
                <span className='obj-key'>
                    details<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>
                    {
                        "'As the technical producer for the Formula 1 Virtual Paddock Club™, I was responsible for ensuring the smooth operation and high-quality production of multiple live shows from Friday to Sunday of each grand prix for fans, corporate guests and VIPs. I collaborated with producers, hosts, tech engineers, and media departments to create behind-the-scenes and exclusive Formula 1 content that engaged and entertained our audiences. In addition to coordinating the technical aspects of the live shows, I also assisted in organizing and conducting interviews with VIPs and celebrities for the Formula 1 Paddock Club™. In this role, I used various software and tools to control the content, transitions, audio balance, live feeds, and other media elements of both the live shows and interviews.'"
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
                <span className='string'>{"'2021/02 - 2022/01'"}</span>,
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
                <span className='string'>{"'Morrisons - Amazon Flex'"}</span>,
            </p>
            <p className='editor__file__line indent--12'>
                <span className='obj-key'>
                    details<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>
                    {
                        "'As a part-time team leader at Morrisons, I played a crucial role in running and managing the stores's Amazon Flex department. In this fast-paced role, I used my analytical and logistical skills to ensure that orders placed by customers were completed to a high standard each hour. At a single time, I was in charge of up to 30 members of staff and was responsible for organizing, motivating, and making sure they each had a positive work environment.'"
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
                <span className='string'>{"'2019/06 - 2022/01'"}</span>,
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
                        "'SRP Designs was a dynamic business that created engaging, captivating, and meaningful digital experiences for emerging businesses, brands, and individual clients. The services included UI/UX design, web development, web hosting, and media production, all of which were designed to help my clients stand out and succeed in the digital world.'"
                    }
                </span>
                ,
            </p>
            <p className='editor__file__line indent--8'>{' }'},</p>
            {/* close obj 4 */}

            {/* open obj 5 */}
            <p className='editor__file__line indent--8'>{'{ '}</p>
            <p className='editor__file__line indent--12'>
                <span className='obj-key'>
                    duration<span className='symbol'>:</span>
                </span>{' '}
                <span className='string'>{"'2017/09 - 2020/05'"}</span>,
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
                        "'As a software engineering student, I have developed advanced skills in front-end and back-end development through studying and using various frameworks, environments and platforms such as React, Node.js, and AWS. I have also gained experience working in teams to design, implement, test and deploy applications. Through my coursework and projects, I became proficient in using version control systems such as Git, and I am skilled at collaborating with other developers and writing clear, well-documented code.'"
                    }
                </span>
                ,
            </p>
            <p className='editor__file__line indent--8'>{' }'},</p>
            {/* close obj 5 */}

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
