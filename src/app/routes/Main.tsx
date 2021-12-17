import React from 'react';
import { Outlet } from 'react-router-dom';
import Post from '../components/lib/Post';
import { Box } from '../components/primitives/Box';
import Button from '../components/primitives/Button';
import SNavLink from '../components/primitives/NavLink';
import { ContentType } from '../data/initContent';

type MainProps = { contentState: ContentType[] };

export default function Main({ contentState }: MainProps) {
    const posts = contentState.map((item) => <Post key={item.id} postData={item} />);

    return (
        <Box>
            <Button
                variant='boxButton' ml='auto' mb='10px'
                bg='blue'
            >
                <SNavLink to='create'>Create New Post</SNavLink>
            </Button>

            <Box>{posts}</Box>
            <Outlet />
        </Box>
    );
}
