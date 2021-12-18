import '../css/defaultStyle.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import { Box } from './components/primitives/Box';

import Main from './routes/Main';

import Observe from './routes/Observe';
import Edit from './routes/Edit';

// import postList from './logic/ContentList';
import { SubmitClosure, ContentType } from './data/initContent';
import Create from './routes/Create';
import useGet from './request/useGet';
// import postList from './logic/ContentList';
import api from './request/api';

export default function App() {
    const { postList, setData, loading } = useGet('INIT');

    console.log(postList.data);
    const onCreate: SubmitClosure = (item) => (e) => {
        postList.add(item);
        setData(postList.getData());
        api.posts.addPost(item);
    };

    const onEdit: SubmitClosure = (item) => (e) => {
        // const index = postList.findItemIndex(item.id);
        // postList.remove(index);
        // onCreate(item)(e);
    };

    if (loading) return <div>Loading ...</div>;

    return (
        <Box variant='layout'>
            <Router>
                <Routes>
                    <Route path='/' element={<Main contentState={postList.data} />} />
                    <Route
                        path='/posts/:postId'
                        element={<Observe setPosts={() => console.log('hello')} />}
                    />
                    <Route
                        path='/posts/edit/:postId'
                        element={<Edit onSubmitClosure={onEdit} />}
                    />
                    <Route
                        path='/posts/create'
                        element={<Create onSubmitClosure={onCreate} />}
                    />
                </Routes>
            </Router>
        </Box>
    );
}
