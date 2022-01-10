import React from 'react';

/**
 * Exports About Data File component
 * @returns JSX.Element
 */
export const Data = (): JSX.Element => {
    return (
        <article className='editor__file'>
            {/* open myData */}
            <p className='editor__file__line'>
                <span className='keyword'>export const</span> <span className='variable'>myData</span>{' '}
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
            {/* close myData */}
            <p className='editor__file__line'>{'};'}</p>
        </article>
    );
};
