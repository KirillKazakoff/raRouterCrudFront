import React from 'react';
import { BoxProps } from '../components/primitives/rebassTypes';
import CreateForm from '../components/lib/CreateForm';
import { Box } from '../components/primitives/Box';
import { ContentType } from '../data/initContent';
import Heading from '../components/primitives/Heading';

type CreateFormProps = BoxProps & { apiMethod: (item: ContentType) => void };

export default function Create({ apiMethod }: CreateFormProps) {
    return (
        <Box>
            <Heading variant='h1' mb={2}>
                Добавить новый пост
            </Heading>
            <CreateForm apiMethod={apiMethod} />
        </Box>
    );
}
