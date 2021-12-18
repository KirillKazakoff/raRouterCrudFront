import React from 'react';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { ContentType, SubmitClosure } from '../../data/initContent';
import { Flex } from '../primitives/Flex';
import Form from '../primitives/Form';
import Textarea from '../primitives/Textarea';
import AbsoluteBox from '../primitives/AbsoluteBox';
import { BoxProps } from '../primitives/rebassTypes';
import BackButton from './BackButton';
import SubmitButton from './SubmitButton';
import { Text } from '../primitives/Text';

type CreateFormProps = BoxProps & { apiMethod: (item: ContentType) => void };
export default function CreateForm({
    defaultValue,
    id,
    apiMethod,
    ...props
}: CreateFormProps) {
    const navigation = useNavigate();

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        const currentTarget = e.currentTarget as typeof e.currentTarget & {
            textarea: { value: string };
        };

        const { value } = currentTarget.textarea;
        if (!value) return false;

        const postObj = {
            note: value,
            id: nanoid(),
            username: 'SomeName1',
            avatar: 'http://localhost:9000/img/user.png',
            time: '20:04',
        };

        apiMethod(postObj);
        navigation('/');
        return true;
    };

    return (
        <Form
            onSubmit={onSubmit} bg='white' border='primary'
            width='400px' {...props}
        >
            <Flex minHeight='200px' p='10px' position='relative'>
                <Textarea variant='default' defaultValue={defaultValue} />
                <SubmitButton />
                <AbsoluteBox right={-10} top={-10}>
                    <BackButton id={id}>X</BackButton>
                </AbsoluteBox>
            </Flex>
        </Form>
    );
}
