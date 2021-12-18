import '../css/defaultStyle.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import { Box } from './components/primitives/Box';

import Main from './routes/Main';

import Observe from './routes/Observe';
import Edit from './routes/Edit';

import postList from './logic/ContentList';
import { SubmitClosure, ContentType } from './data/initContent';
import Create from './routes/Create';
import api from './request/api';
import useJsonFetch from './request/useJsonFetch';

const baseUrl = 'local';

export default function App() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<ContentType[]>([]);

    useEffect(() => {
        const fetchFunc = async () => {
            setLoading(true);

            const response = await fetch('http://localhost:9091/posts');
            const jsonData = await response.json();

            setData(jsonData.data);
            setLoading(false);
        };

        fetchFunc();
    }, []);

    const [posts, setPosts] = useState(postList.data);
    const onCreate: SubmitClosure = (item) => (e) => {
        postList.add(item);
        setPosts(postList.getData());
    };

    const onEdit: SubmitClosure = (item) => (e) => {
        const index = postList.findItemIndex(item.id);
        postList.remove(index);
        onCreate(item)(e);
    };

    // const { data } = useJsonFetch('http://localhost:9091/posts', null);
    // postList.data = data;
    // console.log(data);

    return (
        <Box variant='layout'>
            <Router>
                <Routes>
                    <Route path='/' element={<Main contentState={posts} />} />
                    <Route
                        path='/posts/:postId'
                        element={<Observe setPosts={setPosts} />}
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
