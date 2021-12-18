import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Post from '../components/lib/Post';
import { Box } from '../components/primitives/Box';
import Button from '../components/primitives/Button';
import { Flex } from '../components/primitives/Flex';
import SNavLink from '../components/primitives/NavLink';
import { SetPostType } from '../data/initContent';
import BackButton from '../components/lib/BackButton';
import AbsoluteBox from '../components/primitives/AbsoluteBox';
import postList from '../logic/ContentList';

type ObserveProps = { setPosts: SetPostType };

export default function Observe({ setPosts }: ObserveProps) {
    const params = useParams();
    const navigation = useNavigate();

    const item = postList.getItem(params.postId as string);
    const removeHandler = (id: string) => () => {
        postList.remove(id);
        setPosts(postList.getData());
        navigation('/');
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
                <Button variant='boxButton' bg='darkred' onClick={removeHandler(item.id)}>
                    Удалить
                </Button>
            </Flex>
        </Box>
    );
}
