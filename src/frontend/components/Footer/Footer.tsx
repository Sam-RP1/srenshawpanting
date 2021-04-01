import React from 'react';
import { Link, Icon } from '../../interfaces';

import { Container } from '../UI/Container/Container';
import { Heading } from '../UI/Typography/Heading/Heading';
import { Tooltip } from '../UI/Tooltip/Tooltip';

import './Footer.scss';

type FooterProps = {
    links: Link[];
    icons: Icon[];
};

export const Footer = ({ links, icons }: FooterProps): JSX.Element => {
    const linkElems = links.map((link, i) => {
        const isDivided = i <= links.length - 2 ? <div>|</div> : null;
        return (
            <React.Fragment key={link.id + '-footer'}>
                {link.url}
                {isDivided}
            </React.Fragment>
        );
    });

    const iconElems = icons.map((icon) => {
        return (
            <a key={icon.id} href={icon.url} target='_blank' rel='noreferrer'>
                <div className='icon-wrapper tooltip'>
                    {icon.icon}
                    <Tooltip tip={'HELLO!'} position={'left'} />
                </div>
            </a>
        );
    });

    return (
        <footer className='footer'>
            <Container classes={'footer__content'}>
                <>
                    <Heading
                        importance={6}
                        title={'Stay Connected'}
                        classes={['uppercase', 'spaced', 'footer__content__label']}
                    />
                    <div className='footer__content__icons-container'>{iconElems}</div>
                    <div className='footer__content__links-container'>{linkElems}</div>
                </>
            </Container>
        </footer>
    );
};
