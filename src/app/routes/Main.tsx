import React from 'react';
import Post from '../components/lib/Post';
import { Box } from '../components/primitives/Box';
import Button from '../components/primitives/Button';
import SNavLink from '../components/primitives/NavLink';
import { ContentType } from '../data/initContent';

type MainProps = { contentState: ContentType[] };

export default function Main({ contentState }: MainProps) {
    const posts = contentState.map((item) => (
        <SNavLink to={`/posts/${item.id}`} key={item.id}>
            <Post postData={item} />
        </SNavLink>
    ));

    return (
        <Box>
            <Button
                variant='boxButton' ml='auto' mb='10px'
                bg='blue' p='0'
            >
                <SNavLink to='posts/create' p={2}>
                    Create New Post
                </SNavLink>
            </Button>

            <Box>{posts}</Box>
        </Box>
    );
}
