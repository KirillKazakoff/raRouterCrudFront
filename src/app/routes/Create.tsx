import React from 'react';
import { BiSend } from '@react-icons/all-files/bi/BiSend';
import { Box } from '../components/primitives/Box';
import { Flex } from '../components/primitives/Flex';
import Form from '../components/primitives/Form';
import Textarea from '../components/primitives/Textarea';
import Button from '../components/primitives/Button';
import AbsoluteBox from '../components/primitives/AbsoluteBox';
import { BoxProps } from '../components/primitives/rebassTypes';

type CreateFormProps = BoxProps;

export default function CreateForm({ onSubmit, ...props }: CreateFormProps) {
    return (
        <Form
            bg='white' border='primary' {...props}
            width='400px' onSubmit={onSubmit}
        >
            <Flex minHeight='200px' p='10px' position='relative'>
                <Textarea
                    display='block' width='85%' fontSize='20px'
                    name='textarea'
                />
                <Button
                    alignSelf='flex-end' variant='rounded' p='5px'
                    type='submit'
                >
                    <BiSend color='green' size='35px' />
                </Button>
                <AbsoluteBox right={-10} top={-10}>
                    <Button
                        variant='cancel'
                        px='5px'
                        fontSize='20px'
                        bg='white'
                        id='remove'
                    >
                        X
                    </Button>
                </AbsoluteBox>
            </Flex>
        </Form>
    );
}
