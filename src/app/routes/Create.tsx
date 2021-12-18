import React from 'react';
import { BoxProps } from '../components/primitives/rebassTypes';
import CreateForm from '../components/lib/CreateForm';
import { Box } from '../components/primitives/Box';
import { ContentType, SubmitClosure } from '../data/initContent';
import Heading from '../components/primitives/Heading';
import useFetch from '../request/useJsonFetch';

type CreateFormProps = BoxProps & { onSubmitClosure: SubmitClosure };

export default function Create({ onSubmitClosure }: CreateFormProps) {
    return (
        <Box>
            <Heading variant='h1' mb={2}>
                Добавить новый пост
            </Heading>
            <CreateForm onSubmitClosure={onSubmitClosure} />
        </Box>
    );
}
