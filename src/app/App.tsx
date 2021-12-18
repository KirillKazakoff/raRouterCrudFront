import '../css/defaultStyle.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import React, { useEffect } from 'react';
import { Box } from './components/primitives/Box';

import Main from './routes/Main';
import Observe from './routes/Observe';
import Edit from './routes/Edit';
import Create from './routes/Create';

import useApi from './request/useApi';

export default function App() {
    const { api, data, isQuerying } = useApi('http://localhost:9091');

    useEffect(() => {
        api.list();
    }, []);

    if (isQuerying) return <div>Loading ...</div>;

    return (
        <Box variant='layout'>
            <Router>
                <Routes>
                    <Route path='/' element={<Main contentState={data} />} />
                    <Route
                        path='/posts/:postId'
                        element={<Observe apiMethod={api.remove} contentState={data} />}
                    />
                    <Route
                        path='/posts/edit/:postId'
                        element={<Edit contentState={data} apiMethod={api.edit} />}
                    />
                    <Route
                        path='/posts/create'
                        element={<Create apiMethod={api.add} />}
                    />
                </Routes>
            </Router>
        </Box>
    );
}
