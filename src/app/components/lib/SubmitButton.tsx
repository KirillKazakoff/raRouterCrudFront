import { BiSend } from '@react-icons/all-files/bi/BiSend';
import React from 'react';
import Button from '../primitives/Button';

export default function SubmitButton() {
    return (
        <Button
            alignSelf='flex-end' variant='rounded' p='5px'
            type='submit'
        >
            <BiSend color='green' size='35px' />
        </Button>
    );
}
