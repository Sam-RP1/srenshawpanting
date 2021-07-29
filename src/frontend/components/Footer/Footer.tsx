import React from 'react';
import { Links, Icons } from '../../lib/interfaces';

// Hook Imports
import { useScrollTo } from '../../hooks/useScrollTo';

// Component Imports
import { Container } from '../UI/Container/Container';
import { Tooltip } from '../UI/Tooltip/Tooltip';

// Styles
import './Footer.scss';

// Types
type FooterProps = {
    links: Links;
    icons: Icons;
};

/**
 * Exports Footer component
 * @returns JSX.Element
 */
export const Footer = ({ links, icons }: FooterProps): JSX.Element => {
    const linkElems = links.map(({ id, label }, i) => {
        const isDivided = i <= links.length - 2 ? <div>|</div> : null;
        return (
            <React.Fragment key={id + '-footer'}>
                {<a onClick={() => useScrollTo(id)}>{label}</a>}
                {isDivided}
            </React.Fragment>
        );
    });

    const iconElems = icons.map((icon) => {
        return (
            <a key={icon.id} href={icon.url} target='_blank' rel='noreferrer'>
                <div className='icon-wrapper tooltip'>
                    {icon.icon}
                    <Tooltip tip={icon.tooltip} position={'top'} />
                </div>
            </a>
        );
    });

    return (
        <footer className='footer'>
            <Container classes={'footer__content'}>
                <>
                    <div className='footer__links-container'>{linkElems}</div>
                    <div className='footer__icons-container'>{iconElems}</div>
                </>
            </Container>
        </footer>
    );
};
