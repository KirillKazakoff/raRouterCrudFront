import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Post from '../components/lib/Post';
import { Box } from '../components/primitives/Box';
import Button from '../components/primitives/Button';
import { Flex } from '../components/primitives/Flex';
import SNavLink from '../components/primitives/NavLink';
import BackButton from '../components/lib/BackButton';
import AbsoluteBox from '../components/primitives/AbsoluteBox';

import { ContentType } from '../data/initContent';

type ObserveProps = { contentState: ContentType[]; apiMethod: (id: string) => void };

export default function Observe({ contentState, apiMethod }: ObserveProps) {
    const params = useParams();
    const navigate = useNavigate();

    const item = contentState.find((dItem) => dItem.id === params.postId);
    if (!item) return <div>Error</div>;

    const onClick = () => {
        apiMethod(item.id);
        navigate('/');
    };

    return (
        <Box
            bg='red' variant='layout' p='70px'
            borderRadius='100px' position='relative'
        >
            <AbsoluteBox right={-10} top={-10}>
                <BackButton>{'<<<'}</BackButton>
            </AbsoluteBox>
            <Post postData={item} />
            <Flex justifyContent='flex-end' gap='10px'>
                <Button variant='boxButton' bg='hint'>
                    <SNavLink to={`/posts/edit/${item.id}`}>Изменить</SNavLink>
                </Button>
                <Button variant='boxButton' bg='darkred' onClick={onClick}>
                    Удалить
                </Button>
            </Flex>
        </Box>
    );
}
