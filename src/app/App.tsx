import '../css/defaultStyle.css';
import {
    Route, BrowserRouter as Router, Routes, NavLink,
} from 'react-router-dom';

import React from 'react';
import Main from './routes/Main';
import { initContent } from './data/initContent';
import { Box } from './components/primitives/Box';
import CreateForm from './routes/Create';
import Observe from './routes/Observe';

export default function App() {
    return (
        <Box variant='layout'>
            <Router>
                <Routes>
                    <Route path='/' element={<Main contentState={initContent} />}>
                        <Route path=':postId' element={<Observe />} />
                    </Route>
                    <Route path='/create' element={<CreateForm />} />
                </Routes>
            </Router>
        </Box>
    );
}
