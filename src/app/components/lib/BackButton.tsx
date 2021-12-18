import React from 'react';
import SNavLink from '../primitives/NavLink';
import Button from '../primitives/Button';
import { BoxProps } from '../primitives/rebassTypes';

export default function BackButton({ id, children }: BoxProps) {
    return (
        <SNavLink to={id ? `/posts/${id}` : '/'}>
            <Button variant='cancel' id='remove'>
                {children}
            </Button>
        </SNavLink>
    );
}
