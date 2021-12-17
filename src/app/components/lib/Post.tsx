/* eslint-disable object-curly-newline */
import React from 'react';
import { Outlet } from 'react-router-dom';
import { ContentType } from '../../data/initContent';
import { Box } from '../primitives/Box';
import { Flex } from '../primitives/Flex';
import Heading from '../primitives/Heading';
import Image from '../primitives/Image';
import SNavLink from '../primitives/NavLink';
import { Text } from '../primitives/Text';

type PostProps = { postData: ContentType };

export default function Post({ postData }: PostProps) {
    const { username, note, id, avatar, time } = postData;
    return (
        <Box
            id={id} bg='grey' mb='10px'
            variant='primary'
        >
            <SNavLink to={`/${id}`}>
                <Flex alignItems='center' pb='10px'>
                    <Box variant='rounded' bg='red'>
                        <Image
                            border='2px solid red'
                            backgroundSize='cover'
                            borderRadius='100px'
                            backgroundImage={`url(${avatar})`}
                            width='50px'
                            height='50px'
                        />
                    </Box>

                    <Box pl='20px'>
                        <Heading pb='5px' variant='h2'>
                            {username}
                        </Heading>
                        <Text>{time}</Text>
                    </Box>
                </Flex>

                <Text>{note}</Text>
            </SNavLink>
        </Box>
    );
}
