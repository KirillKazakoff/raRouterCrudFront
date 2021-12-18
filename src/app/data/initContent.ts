import React, { Dispatch, SetStateAction } from 'react';

export const initContent = [
    {
        username: 'SomeName1',
        note: 'Hello There is some content1',
        id: '1',
        avatar: 'http://localhost:9000/img/user.png',
        time: '20:04',
    },
    {
        username: 'SomeName1',
        note: 'Hello There is some content2',
        id: '2',
        avatar: 'http://localhost:9000/img/user.png',
        time: '10:12',
    },
];

export type ContentType = typeof initContent[0];
export type SetPostType = Dispatch<SetStateAction<ContentType[]>>;
export type SubmitClosure = (item: ContentType) => (e: React.SyntheticEvent) => void;
