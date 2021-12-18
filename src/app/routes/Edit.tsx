import React from 'react';
import { useParams } from 'react-router-dom';
import CreateForm from '../components/lib/CreateForm';
import { Box } from '../components/primitives/Box';
import Heading from '../components/primitives/Heading';
import { BoxProps } from '../components/primitives/rebassTypes';
import { SubmitClosure } from '../data/initContent';
import postList from '../logic/ContentList';

type EditProps = BoxProps & { onSubmitClosure: SubmitClosure };

export default function Edit({ onSubmitClosure }: EditProps) {
    const params = useParams();
    const item = postList.getItem(params.postId as string);
    console.log(item);

    return (
        <Box>
            <Heading variant='h1' mb={2}>
                Редактировать публикацию
            </Heading>
            <CreateForm
                onSubmitClosure={onSubmitClosure}
                defaultValue={item.note}
                id={item.id}
            />
        </Box>
    );
}
