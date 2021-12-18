import React from 'react';
import { useParams } from 'react-router-dom';
import CreateForm from '../components/lib/CreateForm';
import { Box } from '../components/primitives/Box';
import Heading from '../components/primitives/Heading';
import { BoxProps } from '../components/primitives/rebassTypes';
import { ContentType } from '../data/initContent';

type EditProps = BoxProps & {
    apiMethod: (item: ContentType) => void;
    contentState: ContentType[];
};

export default function Edit({ apiMethod, contentState }: EditProps) {
    const params = useParams();
    const item = contentState.find((dItem) => dItem.id === params.postId);

    if (!item) return <div>Error</div>;

    return (
        <Box>
            <Heading variant='h1' mb={2}>
                Редактировать публикацию
            </Heading>
            <CreateForm apiMethod={apiMethod} defaultValue={item.note} id={item.id} />
        </Box>
    );
}
