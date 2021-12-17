import React from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '../components/primitives/Box';
import postList from '../logic/ContentList';

export default function Observe() {
    const params = useParams();
    const item = postList.getItem(params.postId as string);
    console.log(item);

    return <Box variant='layout'>{`Hello ${params.postId}`}</Box>;
}
