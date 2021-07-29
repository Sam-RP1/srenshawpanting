import React from 'react';

import '../Button.scss';
import './DefaultButton.scss';

type DefaultButtonProps = {
    text: string;
    colour?: string;
};

export const DefaultButton = ({ text, colour = '' }: DefaultButtonProps): JSX.Element => {
    return (
        <button className={'button button--w-full button--max-w-300px button--default ml-auto mr-auto' + colour}>
            <span>
                <p>{text}</p>
            </span>
        </button>
    );
};
