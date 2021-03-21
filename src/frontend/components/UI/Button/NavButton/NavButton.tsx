import React from 'react';
import { NavLink } from 'react-router-dom';

import '../Button.scss';
import './NavButton.scss';

type NavButtonProps = {
    test: string;
};

export const NavButton = ({ test }: NavButtonProps): JSX.Element => {
    return (
        <header className='header'>
            <h1>{test}</h1>
            <h1 className='header__title'>Deduction</h1>
        </header>
    );
};
